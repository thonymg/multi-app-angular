import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { ChartsModule } from 'ng2-charts';

export const chartingRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, ChartsModule],
  declarations: [SimpleChartComponent],
  exports: [SimpleChartComponent]
})
export class ChartingModule {}
