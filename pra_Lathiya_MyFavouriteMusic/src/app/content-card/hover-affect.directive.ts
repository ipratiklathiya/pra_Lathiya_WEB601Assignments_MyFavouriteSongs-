import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[Hover-Affect]'
})
export class HoverAffectDirective {
  @Input() isFirstCard: boolean;
  @Input() isLastCard: boolean;

  private originalBorder: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.originalBorder = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.isFirstCard || this.isLastCard) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    }
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isFirstCard || this.isLastCard) {
      this.renderer.setStyle(this.el.nativeElement, 'border', this.originalBorder);
    }
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
  }
}
