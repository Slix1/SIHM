import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';


import { EdtComponent } from './edt.component';
import { EdtinfosComponent } from './edt-infos/edt-infos.component';
import { EdtbdocComponent } from './edt-bdoc/edt-bdoc.component';
import { EdtdiskComponent } from './edt-disk/edt-disk.component';
import { EdtPackageComponent } from './edt-package/edt-package.component';
import { EdtSqlComponent } from './edt-sql/edt-sql.component';
import { EdtSuiviComponent } from './edt-suivi/edt-suivi.component';
import { EdtDaemonsComponent } from './edt-daemons/edt-daemons.component';



const routes: Routes = [
  { path: 'edt', component: EdtComponent }
];


@NgModule({
  declarations: [
    EdtComponent,
    EdtinfosComponent,
    EdtbdocComponent,
    EdtdiskComponent,
    EdtPackageComponent,
    EdtSqlComponent,
    EdtDaemonsComponent,
    EdtSuiviComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [EdtComponent]
})
export class EdtModule { }
