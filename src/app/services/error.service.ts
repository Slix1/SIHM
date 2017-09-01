import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  private errorMessage: string;

  public getErrorMessage(error: any): String {
    console.error(error)
    return this.errorMessage = 'Une erreur s\'est produite: '+ error.status +' '+ error.statusText;
        
  }

}