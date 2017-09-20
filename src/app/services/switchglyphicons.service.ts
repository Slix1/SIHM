import {Injectable} from '@angular/core';


@Injectable()
export class SwitchGlyphiconsService {

 private plus: string = 'glyphicon glyphicon-plus black';
 public minus: string = 'glyphicon glyphicon-minus black';

 public currentGlyphicon: string = this.plus;

  switchGlyphicon(): void {
        if(this.currentGlyphicon === this.plus){
            this.currentGlyphicon = this.minus;
        } else {
            this.currentGlyphicon = this.plus;
        }
    }

}
