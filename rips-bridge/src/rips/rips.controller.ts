import { Controller, Post, Body } from '@nestjs/common';
import { RipsService } from './rips.service';
import { RipsData } from './interfaces/rips.interface';

@Controller('rips')
export class RipsController {
  constructor(private readonly ripsService: RipsService) {}

  @Post('validate')
  async validate(@Body() data: RipsData) {
    return await this.ripsService.validateRips(data);
  }

  @Post('send')
  async send(@Body() data: RipsData) {
    return await this.ripsService.sendRips(data);
  }
}
