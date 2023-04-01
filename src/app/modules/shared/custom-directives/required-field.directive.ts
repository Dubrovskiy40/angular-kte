import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appRequiredField]',
  standalone: true,

})
export class RequiredFieldDirective implements OnInit {

  constructor(
    private readonly elementRef: ElementRef,
  ) {
  }

  public ngOnInit() {
    const el = this.elementRef.nativeElement as HTMLElement;
    el.insertAdjacentHTML('beforeend', '<span>*</span>');
    el.style.color = 'red';
  }
}
