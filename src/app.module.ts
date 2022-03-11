import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { DailyPlanModule } from './daily-plan/daily-plan.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [PrismaModule, UserModule, DailyPlanModule, MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
