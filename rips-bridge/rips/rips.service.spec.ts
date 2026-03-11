import { Test, TestingModule } from '@nestjs/testing';
import { RipsService } from './rips.service';

describe('RipsService', () => {
  let service: RipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RipsService],
    }).compile();

    service = module.get<RipsService>(RipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
