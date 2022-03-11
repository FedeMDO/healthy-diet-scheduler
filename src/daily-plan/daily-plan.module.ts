import { Module } from '@nestjs/common';
import { DailyPlanService } from './daily-plan.service';
import { DailyPlanController } from './daily-plan.controller';

@Module({
  controllers: [DailyPlanController],
  providers: [DailyPlanService],
  exports: [DailyPlanService],
})
export class DailyPlanModule {}
