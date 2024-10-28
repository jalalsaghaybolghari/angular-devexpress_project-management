import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { ModalInput } from '@shared/shared.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnDestroy {
  @Input() modalInput!: ModalInput;
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  onHidingModal() {
    this.modalContainer?.clear();
  }

  onLoadRefComponent() {
    if (this.modalInput.component) {
      this.componentRef = this.modalContainer.createComponent(this.modalInput.component);

      if (this.modalInput.data) {
        Object.assign(this.componentRef.instance, this.modalInput.data);
      }
    }
  }  
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
