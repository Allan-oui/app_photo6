import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AppPhoto6SharedModule } from 'app/shared/shared.module';
import { AppPhoto6CoreModule } from 'app/core/core.module';
import { AppPhoto6AppRoutingModule } from './app-routing.module';
import { AppPhoto6HomeModule } from './home/home.module';
import { AppPhoto6EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppPhoto6SharedModule,
    AppPhoto6CoreModule,
    AppPhoto6HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppPhoto6EntityModule,
    AppPhoto6AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AppPhoto6AppModule {}
