import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { ConverterService } from './converter.service';

@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [CommonModule],
  providers: [ConverterService],
  exports: [ConverterComponent]
})

export class ConverterModule {}
