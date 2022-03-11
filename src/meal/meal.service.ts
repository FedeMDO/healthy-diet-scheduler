import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Meal, Prisma } from '@prisma/client';

@Injectable()
export class MealService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.MealCreateInput): Promise<Meal> {
    return this.prismaService.meal.create({
      data,
    });
  }

  async findAll(MealFindManyArgs?: Prisma.MealFindManyArgs): Promise<Meal[]> {
    return this.prismaService.meal.findMany(MealFindManyArgs);
  }

  async findOne(
    MealWhereUniqueInput: Prisma.MealWhereUniqueInput,
  ): Promise<Meal | []> {
    return await this.prismaService.meal.findUnique({
      where: MealWhereUniqueInput,
      include: { dailyPlan: true },
    });
  }

  async update(params: {
    where: Prisma.MealWhereUniqueInput;
    data: Prisma.MealUpdateInput;
  }): Promise<Meal> {
    const { data, where } = params;
    return this.prismaService.meal.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.MealWhereUniqueInput): Promise<Meal> {
    return this.prismaService.meal.delete({
      where,
    });
  }
}
