import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorsComponent } from './colors/colors.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'colors',
    component: ColorsComponent,
  },
];
