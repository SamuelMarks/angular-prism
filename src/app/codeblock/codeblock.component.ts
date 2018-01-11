import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'prism-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.css']
})
export class CodeblockComponent implements OnInit, AfterViewInit {
  @Input() lang: string;
  @Input() reduce_indent?: number;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    console.info('Prism.languages =', Prism.languages);
  }

  ngAfterViewInit() {
    let tc: string = new DOMParser()
      .parseFromString(this.elementRef.nativeElement.innerHTML, 'text/html')
      .documentElement.innerText;

    if (this.reduce_indent) {
      tc = tc.split('\n')
        .map(s =>
          s.search(/\S/) >= this.reduce_indent ?
            s.substr(this.reduce_indent) : s
        )
        .join('\n');
    }

    this.elementRef.nativeElement.innerHTML = `<pre><code>${Prism.highlight(tc, Prism.languages[this.lang])}</code></pre>`;
  }
}
