import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-fofinfos',
  templateUrl: './fof-infos.component.html',
  styleUrls: ['./fof-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class FofinfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private fofInfosUrl: string;
  public fofInfosData: Object = {};


  public getFofInfosData(): Object {

    this.ApiService.getData(this.fofInfosUrl)
      .then(fofInfosData => this.fofInfosData = {...fofInfosData})
      .catch(error => this.fofInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['fofInfos'] = false);

    return this.fofInfosData;
  }

  ngOnInit(): void {

    this.fofInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('fofInfos');

    this.getFofInfosData()
  }

}
