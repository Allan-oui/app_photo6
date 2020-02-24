import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppPhoto6SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AppPhoto6SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AppPhoto6HomeModule {}
