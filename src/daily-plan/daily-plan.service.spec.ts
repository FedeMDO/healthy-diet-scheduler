import { Test, TestingModule } from '@nestjs/testing';
import { DailyPlanService } from './daily-plan.service';

describe('DailyPlanService', () => {
  let service: DailyPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyPlanService],
    }).compile();

    service = module.get<DailyPlanService>(DailyPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
