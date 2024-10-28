export class ToastMessage {
  message: string;
  messageType: 'success' | 'error' | 'info';
  timeOut: number | null;
  constructor() {
    this.message = '';
    this.messageType = 'error';
    this.timeOut = null;
  }
}

export class ModalInput {
  title: string;
  maxWidth: number;
  isVisible: boolean;
  component: any; // Can be used for dynamic component types
  data?: any; // Optional data to pass to the component
    constructor() {
    this.isVisible = false;
    this.title = '';
    this.component = null;
    this.maxWidth = 400;
  }
}
