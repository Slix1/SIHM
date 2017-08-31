import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomPipesModule }     from './../custom-pipes.module';


import { DocumentumComponent } from './documentum.component';
import { DocinfosComponent } from './doc-infos/doc-infos.component';
import { DocinjecteursComponent } from './doc-injecteurs/doc-injecteurs.component';
import { InjecteursPipe } from './doc-injecteurs/injecteurs.pipe';

const routes: Routes = [
  { path: 'documentum', component: DocumentumComponent }
];

@NgModule({
  declarations: [
    DocumentumComponent,
    DocinfosComponent,
    DocinjecteursComponent,
    InjecteursPipe
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [DocumentumComponent]
})
export class DocumentumModule { }
