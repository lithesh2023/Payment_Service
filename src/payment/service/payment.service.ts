import { Injectable } from '@nestjs/common';
import { PaymentRequest } from '../model';
import { Payment } from '../entities';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class PaymentService {

  @InjectEntityManager()
  private readonly entityManager : EntityManager;

  getPaymentInfo(id: string): any {
    return {"paymentId" : id, "amount": 100.00, "status": "SUCCESS", "paymentDate": "08/10/2023"};
  }

  public async submitPayment(req: PaymentRequest) {
    let response = {"status":"Failed"};
    const payment = new Payment();
    payment.bookingId = req.bookingId;
    payment.paymentStatus = 'SUCCESS';
    payment.paymentAmount = req.paymentAmount;
    payment.paymentMethod = req.paymentMethod;
    payment.createdDt = new Date();
    payment.createdBy = 'user1';
    payment.modifiedDt = new Date();
    payment.modifiedBy = 'user1';

    let result:any;
    await this.entityManager.transaction(async(entityManager) => {
      result = await this.entityManager.save(payment);
    });

    if(result && result.booking_id) {
      response = {"status":"Success"};
    }
    return response; 
  }
}
