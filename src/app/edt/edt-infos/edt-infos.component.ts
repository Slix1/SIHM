import { Component, OnInit } from '@angular/core';
import { EdtInfosService } from './edt-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';


import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-edtinfos',
  templateUrl: './edt-infos.component.html',
  styleUrls: ['./edt-infos.component.css'],
  providers: [EdtInfosService, LoadingService, ErrorService]
})



export class EdtinfosComponent {

  constructor(private EdtInfosService: EdtInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public EdtInfosData: Object = {};


  public getEdtInfosData(): Object {

    this.EdtInfosService.getEdtInfos()
      .then(EdtInfosData => this.EdtInfosData = Object.assign({}, EdtInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.EdtInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
      
    return this.EdtInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getEdtInfosData()
  }

}
