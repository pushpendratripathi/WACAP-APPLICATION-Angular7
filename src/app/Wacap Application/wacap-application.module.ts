import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WacapComponent } from './wacap/wacap.component';

@NgModule({
  declarations: [WacapComponent,WacapComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[ReactiveFormsModule,WacapComponent]

})
export class WacapApplicationModule { }
