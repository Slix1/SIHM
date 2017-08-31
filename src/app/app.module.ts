import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HttpModule }           from '@angular/http';

// Mock API
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemDataService }     from './in-mem-data.service';



// Services

// Modules
import { HomeModule } from './home/home.module';
import { EdtModule } from './edt/edt.module';
import { FofModule } from './fof/fof.module';
import { WebediModule } from './webedi/webedi.module';
import { GespaModule } from './gespa/gespa.module';
import { VisualfluxModule } from './visualflux/visualflux.module';
import { GefModule } from './gef/gef.module';
import { GesmagModule } from './gesmag/gesmag.module';
import { OndemandModule } from './ondemand/ondemand.module';
import { DocumentumModule } from './documentum/documentum.module';

// Components
import { AppComponent } from './app.component';


// Routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'edt', loadChildren: './edt/edt.module#EdtModule' },
  { path: 'fof', loadChildren: './fof/fof.module#FofModule' },
  { path: 'webedi', loadChildren: './webedi/webedi.module#WebediModule' },
  { path: 'gespa', loadChildren: './gespa/gespa.module#GespaModule' },
  { path: 'visualflux', loadChildren: './visualflux/visualflux.module#VisualfluxModule' },
  { path: 'gef', loadChildren: './gef/gef.module#GefModule' },
  { path: 'gesmag', loadChildren: './gesmag/gesmag.module#GesmagModule' },
  { path: 'ondemand', loadChildren: './ondemand/ondemand.module#OndemandModule' },
  { path: 'documentum', loadChildren: './documentum/documentum.module#DocumentumModule' }
];


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HomeModule,
    EdtModule,
    FofModule,
    GefModule,
    WebediModule,
    GespaModule,
    VisualfluxModule,
    GesmagModule,
    OndemandModule,
    DocumentumModule,
    RouterModule.forRoot(routes),
    // InMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }