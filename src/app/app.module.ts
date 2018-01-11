import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CodeblockModule } from './codeblock/codeblock.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CodeblockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
