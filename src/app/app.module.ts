import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { TongComponent } from './tong/tong.component';
import { TinhtongComponent } from './tinhtong/tinhtong.component';
import { NhapabComponent } from './nhapab/nhapab.component';
import { BaiTuLam1Component } from './bai-tu-lam1/bai-tu-lam1.component';
import { BaiTuLam2Component } from './bai-tu-lam2/bai-tu-lam2.component';
import { BaiTuLam6Component } from './bai-tu-lam6/bai-tu-lam6.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai7Component } from './bai7/bai7.component';
import { Bai5Component } from './bai5/bai5.component';
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TestComponent,
    TongComponent,
    TinhtongComponent,
    NhapabComponent,
    BaiTuLam1Component,
    BaiTuLam2Component,
    BaiTuLam6Component,
    Bai3Component,
    Bai7Component,
    Bai5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
