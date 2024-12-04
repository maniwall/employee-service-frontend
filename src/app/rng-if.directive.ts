import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRngIf]'
})
export class RngIfDirective {

  constructor(private html: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input() set appRngIf(cond: boolean) {
    if(!cond) {
      this.container.createEmbeddedView(this.html);
    }
  }
}
