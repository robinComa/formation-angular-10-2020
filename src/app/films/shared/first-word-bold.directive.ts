import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstWordBold]'
})
export class FirstWordBoldDirective {

  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.style.fontWeight = 'bold';
  }

}
