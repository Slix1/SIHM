import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPipe } from './split.pipe';



@NgModule({
  imports: [],
  declarations: [SplitPipe],
  exports: [SplitPipe]
})
export class CustomPipesModule { }
