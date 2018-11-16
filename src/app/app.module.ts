import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WacapApplicationModule } from './Wacap Application/wacap-application.module';



@NgModule({
  declarations: [
    AppComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, WacapApplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
