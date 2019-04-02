import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import {ServicesService }from '../app/services/services.service'

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AmountPerEmiratesChartComponent } from './components/amount-per-emirates-chart/amount-per-emirates-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { NationalityComponent } from './components/nationality/nationality.component';
import { AppComponent } from './app.component';

// AddHeaderInterceptor
import {AddHeaderInterceptor} from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AmountPerEmiratesChartComponent,
    NationalityComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
      // configure the imports
      HttpClientModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
