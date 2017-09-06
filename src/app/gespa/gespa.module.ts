import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';


import { GespaComponent } from './gespa.component';
import { GespaInfosComponent } from './gespa-infos/gespa-infos.component';
import { GespaUsersComponent } from './gespa-users/gespa-users.component';
import { GespaVersionsComponent } from './gespa-versions/gespa-versions.component';



const routes: Routes = [
  { path: 'gespa', component: GespaComponent }
];

@NgModule({
  declarations: [
    GespaComponent,
    GespaInfosComponent,
    GespaUsersComponent,
    GespaVersionsComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [GespaComponent]
})
export class GespaModule { }
