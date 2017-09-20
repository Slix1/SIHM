import { Component } from '@angular/core';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';


@Component({
  selector: 'app-edt-suivi',
  templateUrl: './edt-suivi.component.html',
  styleUrls: ['./edt-suivi.component.css'],
  providers: [SwitchGlyphiconsService]
})
export class EdtSuiviComponent {

  constructor(private SwitchGlyphiconsService: SwitchGlyphiconsService) { }

  

  

  load(): void {
    
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    if (this.SwitchGlyphiconsService.currentGlyphicon !== this.SwitchGlyphiconsService.minus) {
      this.load();
    }
    this.SwitchGlyphiconsService.switchGlyphicon();
  }


}