import {Injectable} from '@angular/core';


@Injectable()
export class SwitchUsersGlyphiconsService {

public down: string = 'glyphicon glyphicon-menu-down black';
 public up: string = 'glyphicon glyphicon-menu-up black';

 public currentUsersGlyphicon: string = this.down;

  switchUsersGlyphicon(): void {
      
        if(this.currentUsersGlyphicon === this.down){
            this.currentUsersGlyphicon = this.up;
        } else {
            this.currentUsersGlyphicon = this.down;
        }
    }

}