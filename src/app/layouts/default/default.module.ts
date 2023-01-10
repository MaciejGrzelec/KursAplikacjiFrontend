
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [
    DefaultComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ShareModule
  ]
})
export class DefaultModule { }
