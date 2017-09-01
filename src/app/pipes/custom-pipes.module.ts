import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPipe } from './split.pipe';
import { VersionsPipe } from './versions.pipe';
import { InjecteursPipe } from './injecteurs.pipe';
import { BdocPipe } from './bdoc.pipe';
import { SqlPipe } from './sql.pipe';


@NgModule({
  imports: [],
  declarations: [SplitPipe, VersionsPipe, InjecteursPipe, BdocPipe, SqlPipe],
  exports: [SplitPipe, VersionsPipe, InjecteursPipe, BdocPipe, SqlPipe]
})
export class CustomPipesModule { }
