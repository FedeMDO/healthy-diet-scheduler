import { Test, TestingModule } from '@nestjs/testing';
import { DailyPlanController } from './daily-plan.controller';
import { DailyPlanService } from './daily-plan.service';

describe('DailyPlanController', () => {
  let controller: DailyPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyPlanController],
      providers: [DailyPlanService],
    }).compile();

    controller = module.get<DailyPlanController>(DailyPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
