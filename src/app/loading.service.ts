import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

  public loadingEnv: boolean;
  public loading: boolean;

  public loadingTrue(): void {

    this.loadingEnv = true;
    this.loading = true;
  }

}
