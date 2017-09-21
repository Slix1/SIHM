import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';

import { WebediComponent } from './webedi.component';
import { WebediInfosComponent } from './webedi-infos/webedi-infos.component';
import { WebediVersionsComponent } from './webedi-versions/webedi-versions.component';
import { WebediUsersComponent } from './webedi-users/webedi-users.component';


const routes: Routes = [
  { path: 'webedi', component: WebediComponent }
];

@NgModule({
  declarations: [
    WebediComponent,
    WebediInfosComponent,
    WebediVersionsComponent,
    WebediUsersComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [WebediComponent]
})
export class WebediModule { }
