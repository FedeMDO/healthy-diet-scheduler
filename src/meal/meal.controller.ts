import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  create(@Body() createMealDto: CreateMealDto) {
    const { menuName, type, dailyPlanId } = createMealDto;

    return this.mealService.create({
      menuName,
      type,
      dailyPlan: { connect: { id: dailyPlanId } },
    });
  }

  @Get()
  findAll() {
    return this.mealService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealService.update({
      where: { id: Number(id) },
      data: updateMealDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealService.remove({ id: Number(id) });
  }
}
