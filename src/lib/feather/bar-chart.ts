import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-bar-chart',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/bar-chart.svg'
})
export class IconBarChartComponent {}

@NgModule({
  declarations: [ IconBarChartComponent ],
  exports: [ IconBarChartComponent ]
})
export class IconBarChart {}
