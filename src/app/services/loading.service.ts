import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

  
  public loading: object = {};

  public loadingTrue(env): void {

    this.loading[env] = true;
  }

}
