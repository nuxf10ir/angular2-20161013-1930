import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {
	@Input() appSelected;
  private element:HTMLSelectElement;
  constructor(elementRef:ElementRef) {
	  this.element = elementRef.nativeElement;
	console.log ( this.element); 
     //[].forEach.call(this.element, (this.element)=>{console.log(this.element)} );
		//console.log(Array.apply(null, elementRef.nativeElement.childNodes));
	  //this.element.children[1].text= 'test';
  }

  ngOnInit(){	console.log ( this.appSelected); }

}
