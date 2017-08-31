import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomPipesModule }     from './../custom-pipes.module';


import { FofComponent } from './fof.component';
import { FofinfosComponent } from './fof-infos/fof-infos.component';
import { FofdiskComponent } from './fof-disk/fof-disk.component';
import { FofpackageComponent } from './fof-package/fof-package.component';



const routes: Routes = [
  { path: 'fof', component: FofComponent }
];

@NgModule({
  declarations: [
    FofComponent,
    FofinfosComponent,
    FofdiskComponent,
    FofpackageComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [FofComponent]
})
export class FofModule { }
