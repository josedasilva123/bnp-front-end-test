import { IToastMessage, TToastMessageCreateData } from "@/types/toast-message";

export interface IMessageContext{
    toastMessageList: IToastMessage[];
    toastMessage: (message: TToastMessageCreateData) => void;
    removeToast: (messageId: string) => void;
}