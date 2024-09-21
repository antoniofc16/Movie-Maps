import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha-2';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'mm-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.scss'],
  standalone: true,
  imports: [RecaptchaModule]
})
export class RecaptchaComponent implements OnInit, AfterViewInit {
  sitekey = environment.siteKeyCaptcha;
  @Output() resolvedCaptcha = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var recaptcha = document.getElementById('ngrecaptcha-0');
    setTimeout(() => {
      recaptcha?.getElementsByTagName('div')[0].style.setProperty('margin','auto');
    }, 100);
  }

  resolved(captchaResponse: string | null) {
    this.resolvedCaptcha.emit(captchaResponse);
  }

}
