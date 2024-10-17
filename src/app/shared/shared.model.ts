export class ToastMessage {
    message: string;
    messageType: 'success' | 'error' | 'info';
    timeOut: number | null;
    constructor() {
        this.message = "";
        this.messageType = 'error'
        this.timeOut = null;       
    }
}
