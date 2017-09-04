import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';


@Component({
  selector: 'app-docinjecteurs',
  templateUrl: './doc-injecteurs.component.html',
  styleUrls: ['./doc-injecteurs.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class DocinjecteursComponent {


  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }


  private documentumInjecteursUrl: string = 'assets/json/mocks/sshConnection/documentum.json';
  public documentumInjecteursData: object = {};


  public getEdtDiskData(): Object {

    this.ApiService.getData(this.documentumInjecteursUrl)
      .then(documentumInjecteursData => this.documentumInjecteursData = {...documentumInjecteursData})
      .catch(error => this.documentumInjecteursData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.documentumInjecteursData;
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtDiskData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }
}
