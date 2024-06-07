import { IToastMessage } from "@/types/toast-message";
import React, { createContext, useState } from "react";

export const MessageContext = createContext({});

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [toastMessageList, setToastMessageList] = useState<IToastMessage[]>([]);

   function toastMessage(message: IToastMessage) {
      setToastMessageList((messageList) => [...messageList, message]);
   }

   function removeToast(messageId: string) {
      setToastMessageList((messageList) =>
         messageList.filter((message) => message.id === messageId)
      );
   }

   return <MessageContext.Provider value={{ toastMessageList, toastMessage, removeToast }}>{children}</MessageContext.Provider>;
};
