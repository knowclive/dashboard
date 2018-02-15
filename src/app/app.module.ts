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
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PopoverModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
