import { Module } from '@nestjs/common';
import { RipsService } from './rips.service';
import { RipsController } from './rips.controller';

@Module({
  providers: [RipsService],
  controllers: [RipsController]
})
export class RipsModule {}
