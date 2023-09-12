import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Address, AddressHistory, Booking, BookingHistory, ParkingSlot, Payment, PaymentHistory, Role, User, UserHistory, UserRole, UserRoleHistory, VehicleDetail } from './payment/entities';

@Module({
  imports: [PaymentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
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
