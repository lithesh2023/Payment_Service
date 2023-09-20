import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import{ApiTags, 
  ApiOperation, ApiHeaders, 
  ApiDefaultResponse, ApiOkResponse,
ApiParam, ApiNotAcceptableResponse, ApiNotFoundResponse} from '@nestjs/swagger'
import { PaymentService } from '../service';
import { PaymentRequest } from '../model';
import { Payment } from '../entities';
import { CurrentUser } from '../../common/decorator';

@Controller()
@ApiTags('Payment_Service')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('/payment/:bookingId')
  @ApiOperation(
    {description: 'This Api resource will get the payment data for given payment id'}
  )
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Authorization Token',
      required: true,
    }
  ]
  )
  @ApiDefaultResponse({
    status: 200,
    description: 'success',
    type: [Payment],
  }
  )
  @ApiOkResponse({
    status: 200,
    description: 'success',
    schema: {
      example: [
        {
            "paymentId": 1,
            "bookingId": 1,
            "paymentStatus": "SUCCESS",
            "paymentAmount": 40,
            "paymentMethod": 1,
            "createdDt": "2023-09-12T11:32:46.514Z",
            "createdBy": "user1",
            "modifiedDt": "2023-09-12T11:32:46.514Z",
            "modifiedBy": "user1"
        },
        {
            "paymentId": 2,
            "bookingId": 1,
            "paymentStatus": "SUCCESS",
            "paymentAmount": 30,
            "paymentMethod": 2,
            "createdDt": "2023-09-12T11:50:27.333Z",
            "createdBy": "user1",
            "modifiedDt": "2023-09-12T11:50:27.333Z",
            "modifiedBy": "user1"
        }
    ]
    }
  }
  )
  @ApiNotAcceptableResponse({
    status: 500,
    description: 'error'
  }
  )
  @ApiNotFoundResponse({
    status: 404,
    description: 'Data not found'
  }
  )
  @ApiParam({ name: 'bookingId', type: Number })
  public async getPaymentInfo(
    @CurrentUser() currentUser: any,
    @Param("bookingId") bookingId: number,
  ) {
    return this.paymentService.getPaymentInfo(bookingId);
  }


  @Post('/payment')
  @ApiOperation(
    {description: 'This Api resource will process the payment submit request'}
  )
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Authorization Token',
      required: true,
    }
  ]
  )
  @ApiDefaultResponse({
    status: 200,
    description: 'success',
    type: String,
  }
  )
  @ApiOkResponse({
    status: 200,
    description: 'success',
    schema: {
      example: {"status":"Success"}
    }
  }
  )
  @ApiNotAcceptableResponse({
    status: 500,
    description: 'error'
  }
  )
  @ApiNotFoundResponse({
    status: 404,
    description: 'Data not found'
  }
  )
  public async submitPayment(
    @CurrentUser() currentUser: any,
    @Body() req: PaymentRequest
  ) {
    return this.paymentService.submitPayment(req);
  }
}
