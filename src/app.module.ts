import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { DailyPlanModule } from './daily-plan/daily-plan.module';

@Module({
  imports: [PrismaModule, UserModule, DailyPlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
