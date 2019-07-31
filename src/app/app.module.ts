import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { BaiTap1ContentComponent } from './baitap1/bai-tap1-content/bai-tap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2WhatWeDoComponent } from './baitap2/baitap2-what-we-do/baitap2-what-we-do.component';
import { Baitap2ContactComponent } from './baitap2/baitap2-contact/baitap2-contact.component';
import { Baitap2ListCardComponent } from './baitap2/baitap2-list-card/baitap2-list-card.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { ItemCardComponent } from './baitap2/baitap2-list-card/item-card/item-card.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { Baitap3Module } from './baitap3/baitap3.module';
import { Baitap4Component } from './baitap4/baitap4.component';
import { Baitap4HeaderComponent } from './baitap4/baitap4-header/baitap4-header.component';
import { Baitap4FooterComponent } from './baitap4/baitap4-footer/baitap4-footer.component';
import { Baptap4ContentComponent } from './baitap4/baptap4-content/baptap4-content.component';
import { Baitap4SmartphoneComponent } from './baitap4/baitap4-smartphone/baitap4-smartphone.component';
import { Baitap4LaptopComponent } from './baitap4/baitap4-laptop/baitap4-laptop.component';
import { SmartphoneItemComponent } from './baitap4/baitap4-smartphone/smartphone-item/smartphone-item.component';
import { LaptopItemComponent } from './baitap4/baitap4-laptop/laptop-item/laptop-item.component';


@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    BaiTap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WhatWeDoComponent,
    Baitap2ContactComponent,
    Baitap2ListCardComponent,
    Baitap2FooterComponent,

    ItemCardComponent,

    Baitap4Component,

    Baitap4HeaderComponent,

    Baitap4FooterComponent,

    Baptap4ContentComponent,

    Baitap4SmartphoneComponent,

    Baitap4LaptopComponent,

    SmartphoneItemComponent,

    LaptopItemComponent,

  ],
  imports: [
    BrowserModule, Baitap3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
