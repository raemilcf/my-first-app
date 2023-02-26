import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { Save,Check, Info
 } from "angular-feather/icons"
import { FeatherModule } from 'angular-feather';


const icons ={
  Save,Check, Info
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule

  ]

})
export class IconsModule { }
