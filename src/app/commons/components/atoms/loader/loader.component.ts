import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoaderService } from '../../../../core/services/commons/api/loader.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'mm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxSpinnerComponent],
  providers: [LoaderService, NgxSpinnerService]
})
export class LoaderComponent implements OnDestroy{
  subscription: Subscription | null = null;
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.subscription = this.loaderService.isLoading.subscribe(value => {
        this.isLoading = value;
      });
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
