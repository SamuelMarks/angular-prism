import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeblockComponent } from './codeblock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodeblockComponent],
  exports: [CodeblockComponent]
})
export class CodeblockModule {
}
