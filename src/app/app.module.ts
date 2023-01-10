import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ProductComponent } from './modules/product/product.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './share/components/header/header.component';
import { SidebarComponent } from './share/components/sidebar/sidebar.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
