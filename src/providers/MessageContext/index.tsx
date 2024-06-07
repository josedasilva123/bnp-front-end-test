import { IToastMessage, TToastMessageCreateData } from "@/types/toast-message";
import React, { createContext, useState } from "react";
import { IMessageContext } from "./_interface";
import { v4 as uuidv4 } from "uuid";

export const MessageContext = createContext({} as IMessageContext);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [toastMessageList, setToastMessageList] = useState<Array<IToastMessage>>([]);

   function toastMessage(message: TToastMessageCreateData) {
      const newMessage: IToastMessage = {
         id: uuidv4(),
         ...message,
      };

      setToastMessageList((messageList) => [...messageList, newMessage]);
   }

   function removeToast(messageId: string) {
      setToastMessageList((messageList) =>
         messageList.filter((message) => message.id !== messageId)
      );
   }

   return (
      <MessageContext.Provider value={{ toastMessageList, toastMessage, removeToast }}>
         {children}
      </MessageContext.Provider>
   );
};
