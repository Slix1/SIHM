import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-fofinfos',
  templateUrl: './fof-infos.component.html',
  styleUrls: ['./fof-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class FofinfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  private fofInfosUrl: string = 'assets/json/mocks/jsonFileConnection/fof.json';
  public FofInfosData: Object = {};


  public getFofInfosData(): Object {

    this.ApiService.getData(this.fofInfosUrl)
      .then(FofInfosData => this.FofInfosData = {...FofInfosData})
      .catch(error => this.FofInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.FofInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getFofInfosData()
  }

}
