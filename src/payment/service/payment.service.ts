import { Injectable } from '@nestjs/common';
import { PaymentRequest } from '../model';

@Injectable()
export class PaymentService {
  getPaymentInfo(id: string): any {
    return {"paymentId" : id, "amount": 100.00, "status": "SUCCESS", "paymentDate": "08/10/2023"};
  }

  submitPayment(req: PaymentRequest): any {
    return {"paymentId" : 12345, "amount": req.amount, "status": "SUCCESS", "paymentDate": "08/10/2023"};
  }
}
