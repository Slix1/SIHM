import { Component, OnInit } from '@angular/core';
import { FofInfosService } from './fof-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-fofinfos',
  templateUrl: './fof-infos.component.html',
  styleUrls: ['./fof-infos.component.css'],
  providers: [FofInfosService, LoadingService, ErrorService]
})
export class FofinfosComponent implements OnInit {

  constructor(private FofInfosService: FofInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public FofInfosData: Object = {};


  public getFofInfosData(): Object {

    this.FofInfosService.getFofInfos()
      .then(FofInfosData => this.FofInfosData = Object.assign({}, FofInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.FofInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.FofInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getFofInfosData()
  }

}
