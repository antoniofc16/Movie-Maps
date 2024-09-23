import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
    isLoading = new Subject<boolean>();

    constructor(private _spinnerService: NgxSpinnerService) { }


    show() {
        this._spinnerService.show();
    }

    hide() {
        this._spinnerService.hide();    
    }
}
