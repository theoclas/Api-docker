import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RipsService } from './rips.service';
import { RipsController } from './rips.controller';

@Module({
  imports: [HttpModule],
  providers: [RipsService],
  controllers: [RipsController],
})
export class RipsModule {}
