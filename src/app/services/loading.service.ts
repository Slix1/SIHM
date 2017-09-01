import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

  
  public loading: boolean;

  public loadingTrue(): void {

    this.loading = true;
  }

}
