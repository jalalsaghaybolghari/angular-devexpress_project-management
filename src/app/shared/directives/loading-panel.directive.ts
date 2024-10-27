import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ElementRef,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';
import { DxLoadPanelComponent } from 'devextreme-angular';

@Directive({
  selector: '[appLoadingPanel]',
})
export class LoadingPanelDirective implements OnInit, OnChanges, OnDestroy {
  @Input('appLoadingPanel') loadingVisible: boolean = false;
  @Input() elementId: string = '';

  private loadPanelRef: ComponentRef<DxLoadPanelComponent> | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.createLoadPanel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['loadingVisible'] && this.loadPanelRef) {
      this.loadPanelRef.instance.visible = this.loadingVisible;
    }
  }

  ngOnDestroy() {
    if (this.loadPanelRef) {
      this.loadPanelRef.destroy();
    }
  }

  private createLoadPanel() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DxLoadPanelComponent);
    this.loadPanelRef = this.viewContainerRef.createComponent(factory);
    
    if (this.loadPanelRef.instance) {
      this.loadPanelRef.instance.shadingColor = 'rgba(0,0,0,0.4)';
      this.loadPanelRef.instance.position = { of: `#${this.elementId}` };
      this.loadPanelRef.instance.showIndicator = true;
      this.loadPanelRef.instance.showPane = true;
      this.loadPanelRef.instance.shading = true;
      this.loadPanelRef.instance.hideOnOutsideClick = false;
      this.loadPanelRef.instance.visible = this.loadingVisible;
      this.loadPanelRef.instance.indicatorSrc = "assets/images/Loading.gif";
    }

    // this.renderer.appendChild(this.el.nativeElement, this.loadPanelRef.location.nativeElement);
    this.viewContainerRef.insert(this.loadPanelRef.hostView);
  }
}