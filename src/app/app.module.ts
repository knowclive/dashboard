import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {ContentService} from './shared/services/content.service';
import {AppRoutingModule} from './app-routing.module';
import {FullpageDirective} from './shared/directives/fullpage.directive';
import {PopoverModule} from 'ng2-popover';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {DashboardContentComponent} from './components/dashboard-content/dashboard-content.component';
import {MyprogressComponent} from './components/myprogress/myprogress.component';
import {AdminresultsComponent} from './components/adminresults/adminresults.component';
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import { ResultscarouselComponent } from './components/resultscarousel/resultscarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    HeaderComponent,
    HeroComponent,
    DashboardContentComponent,
    MyprogressComponent,
    AdminresultsComponent,
    ResultscarouselComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PopoverModule,
    NgxCarouselModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
