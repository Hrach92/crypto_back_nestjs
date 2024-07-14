import { Controller, Get, Param } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('options/:address')
  async getTokenDetails(@Param('address') address: string): Promise<object> {
    return this.tokenService.getTokenDetails(address);
  }
}
