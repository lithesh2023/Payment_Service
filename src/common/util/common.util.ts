const jwt = require("jsonwebtoken");
import * as config from 'config';

export class CommonUtil {
    public static getUserInfo(rawToken: any) {
        
        if(!rawToken) {
            throw new Error('Authorization Token missing');
        }
        const token = rawToken.replace('Bearer', '').trim();
        const segments = token.split(' ');
        if(segments.length === 0) {
            throw new Error('Invalid Authorization Token structure');     
        }
        let verified = null;
        try{
            verified = jwt.verify(segments[0], config.get('jwt.secret'));
        } catch(error) {
            throw new Error('Invalid Authorization Token secret, verification failed');
        }
        if(!verified) {
            throw new Error('Invalid Authorization Token secret');
        }
        return verified.userData;
    }
    /*
    public static generateToken(userData: any) {
        const token = jwt.sign({
            userData
        },
        config.get('jwt.secret'),
        {expiresIn: '1h'}
        );
        return token;
    }
    */
}