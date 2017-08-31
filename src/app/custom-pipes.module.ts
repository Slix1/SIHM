import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe }     from './pipes/keys.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { VersionsPipe } from './pipes/versions.pipe';


@NgModule({
  imports: [
    
  ],
  declarations: [KeysPipe, SplitPipe, VersionsPipe],
  exports: [
    KeysPipe,
    SplitPipe,
    VersionsPipe
  ]
})
export class CustomPipesModule { }
