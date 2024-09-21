import { CUSTOM_ELEMENTS_SCHEMA, EnvironmentInjector, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./pages/app-routing.routing";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from "./core/interceptors/loader.interceptor";
import { LoaderService } from "./core/services/commons/api/loader.service";

@NgModule({
	declarations: [AppComponent],
	imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true
      },
      LoaderService
    ],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
