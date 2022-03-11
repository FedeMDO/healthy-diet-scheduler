import { MealType } from '../meal.enum';

export class CreateMealDto {
  type: MealType;
  menuName: string;
  dailyPlanId: number;
}
