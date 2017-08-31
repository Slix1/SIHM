import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomPipesModule }     from './../custom-pipes.module';


import { GesmagComponent } from './gesmag.component';
import { GesmagInfosComponent } from './gesmag-infos/gesmag-infos.component';
import { GesmagUsersComponent } from './gesmag-users/gesmag-users.component';




const routes: Routes = [
  { path: 'gesmag', component: GesmagComponent }
];

@NgModule({
  declarations: [
    GesmagComponent,
    GesmagInfosComponent,
    GesmagUsersComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [GesmagComponent]
})
export class GesmagModule { }
