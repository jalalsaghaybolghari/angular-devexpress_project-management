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
  isVisable: boolean;
  title: string;
  component: 'addMember' | 'memberlist' | null;
  maxWidth: number;

  constructor() {
    this.isVisable = false;
    this.title = '';
    this.component = null;
    this.maxWidth = 400;
  }
}
