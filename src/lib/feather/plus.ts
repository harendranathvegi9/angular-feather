import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-plus',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/plus.svg'
})
export class IconPlusComponent {}

@NgModule({
  declarations: [ IconPlusComponent ],
  exports: [ IconPlusComponent ]
})
export class IconPlus {}
