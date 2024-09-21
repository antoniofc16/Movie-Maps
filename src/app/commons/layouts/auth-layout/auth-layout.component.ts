import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/molecules/navbar/navbar.component';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/molecules/footer/footer.component';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
	standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterOutlet]
})
export class AuthLayoutComponent implements OnInit {

  constructor(public location: Location, private router: Router) { }

  ngOnInit() {
  }

  isMaps(path: any){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }

}
