import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';


import { OndemandComponent } from './ondemand.component';
import { OndemandInfosComponent } from './ondemand-infos/ondemand-infos.component';
import { OndemandUsersComponent } from './ondemand-users/ondemand-users.component';
import { OndemandVersionsComponent } from './ondemand-versions/ondemand-versions.component';




const routes: Routes = [
  { path: 'ondemand', component: OndemandComponent }
];

@NgModule({
  declarations: [
    OndemandComponent,
    OndemandInfosComponent,
    OndemandUsersComponent,
    OndemandVersionsComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [OndemandComponent]
})
export class OndemandModule { }
