import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import{ApiTags, 
  ApiOperation, ApiHeaders, 
  ApiDefaultResponse, ApiOkResponse,
ApiParam, ApiQuery} from '@nestjs/swagger'
import { PaymentService } from '../service';
import { PaymentRequest } from '../model';

@Controller()
@ApiTags('Payment_Service')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('/payment/:id')
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
  getPaymentInfo(
    @Param() params
  ): any {
    return this.paymentService.getPaymentInfo(params.id);
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
  submitPayment(
    @Body() req: PaymentRequest
  ): any {
    return this.paymentService.submitPayment(req);
  }
}
