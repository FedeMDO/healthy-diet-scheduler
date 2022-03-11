import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DailyPlan, Prisma } from '@prisma/client';

@Injectable()
export class DailyPlanService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.DailyPlanCreateInput): Promise<DailyPlan> {
    return this.prismaService.dailyPlan.create({
      data,
    });
  }

  async findAll(
    dailyPlanFindManyArgs?: Prisma.DailyPlanFindManyArgs,
  ): Promise<DailyPlan[]> {
    return this.prismaService.dailyPlan.findMany(dailyPlanFindManyArgs);
  }

  async findOne(
    dailyPlanWhereUniqueInput: Prisma.DailyPlanWhereUniqueInput,
  ): Promise<DailyPlan | []> {
    return await this.prismaService.dailyPlan.findUnique({
      where: dailyPlanWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.DailyPlanWhereUniqueInput;
    data: Prisma.DailyPlanUpdateInput;
  }): Promise<DailyPlan> {
    const { data, where } = params;
    return this.prismaService.dailyPlan.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.DailyPlanWhereUniqueInput): Promise<DailyPlan> {
    return this.prismaService.dailyPlan.delete({
      where,
    });
  }
}
