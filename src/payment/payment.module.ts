import { Module } from '@nestjs/common';
import { PaymentController } from './controller/payment.controller';
import { PaymentService } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, AddressHistory, Booking, BookingHistory, ParkingSlot, Payment, PaymentHistory, Role, User, UserHistory, UserRole, UserRoleHistory, VehicleDetail } from '../payment/entities';

@Module({
  imports: [TypeOrmModule.forFeature([
    Address,
    AddressHistory,
    Booking,
    BookingHistory,
    ParkingSlot,
    Payment,
    PaymentHistory,
    Role,
    UserRole,
    UserRoleHistory,
    User,
    UserHistory,
    VehicleDetail,
  ])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
