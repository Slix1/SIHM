import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPipe } from './split.pipe';
import { PackageVersionsPipe } from './packages-version.pipe';
import { InjecteursPipe } from './injecteurs.pipe';
import { BdocPipe } from './bdoc.pipe';
import { SqlPipe } from './sql.pipe';
import { VersionPipe } from './version.pipe';


@NgModule({
  imports: [],
  declarations: [SplitPipe, PackageVersionsPipe, InjecteursPipe, BdocPipe, SqlPipe, VersionPipe],
  exports: [SplitPipe, PackageVersionsPipe, InjecteursPipe, BdocPipe, SqlPipe, VersionPipe]
})
export class CustomPipesModule { }
