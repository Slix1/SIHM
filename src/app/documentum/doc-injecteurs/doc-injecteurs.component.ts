import { Component } from '@angular/core';
import { DocumentumInjecteursService } from './doc-injecteurs.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';


@Component({
  selector: 'app-docinjecteurs',
  templateUrl: './doc-injecteurs.component.html',
  styleUrls: ['./doc-injecteurs.component.css'],
  providers: [DocumentumInjecteursService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class DocinjecteursComponent {


  constructor(public DocumentumInjecteursService: DocumentumInjecteursService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {

  }

  documentumInjecteursData: object = {};


  public getEdtDiskData(): Object {

    this.DocumentumInjecteursService.getDocumentumInjecteursInfos()
      .then(documentumInjecteursData => this.documentumInjecteursData = Object.assign({}, documentumInjecteursData))
      .then(() => this.LoadingService.loading = false)
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
