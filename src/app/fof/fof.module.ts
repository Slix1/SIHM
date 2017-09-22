import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule } from './../pipes/custom-pipes.module';
import { PopoverModule } from 'ng4-popover';


import { FofComponent } from './fof.component';
import { FofinfosComponent } from './fof-infos/fof-infos.component';
import { FofdiskComponent } from './fof-disk/fof-disk.component';
import { FofpackageComponent } from './fof-package/fof-package.component';
import { FofTagComponent } from './fof-tag/fof-tag.component';



const routes: Routes = [
  { path: 'fof', component: FofComponent }
];

@NgModule({
  declarations: [
    FofComponent,
    FofinfosComponent,
    FofdiskComponent,
    FofpackageComponent,
    FofTagComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forRoot(routes),
    PopoverModule
  ],
  providers: [],
  bootstrap: [FofComponent]
})
export class FofModule { }
