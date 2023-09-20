import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as config from 'config';
import { Address, AddressHistory, Booking, BookingHistory, ParkingSlot, Payment, PaymentHistory, Role, User, UserHistory, UserRole, UserRoleHistory, VehicleDetail } from './payment/entities';

@Module({
  imports: [
    PaymentModule,
    TypeOrmModule.forRoot({
      type: config.get('db.type'),
      host: config.get('db.host'),
      port: config.get('db.port'),
      username: config.get('db.username'),
      password: config.get('db.password'),
      database: config.get('db.database'),
      retryAttempts: 3,
      retryDelay: 1000,
      entities: [
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
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
