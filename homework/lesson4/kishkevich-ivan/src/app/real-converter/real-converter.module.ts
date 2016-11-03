import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealConverterComponent } from './real-converter.component';
import {RealConverterService} from './real-converter.service';

@NgModule({
  declarations: [
    RealConverterComponent
  ],
  imports: [CommonModule],
  providers: [RealConverterService],
  exports: [RealConverterComponent]
})

export class RealConverterModule {}
