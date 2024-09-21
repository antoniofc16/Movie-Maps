import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/molecules/navbar/navbar.component';
import { SidebarComponent } from '../../components/molecules/sidebar/sidebar.component';
import { FooterComponent } from '../../components/molecules/footer/footer.component';
import { LoaderComponent } from '../../components/atoms/loader/loader.component';

declare var $: any;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
	standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent, LoaderComponent, CommonModule, RouterOutlet]
})
export class MainLayoutComponent implements OnInit {

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

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
