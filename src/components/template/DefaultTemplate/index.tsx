import { MessageProvider } from "@/providers/MessageContext"
import { Header } from "../Header"

export const DefaultTemplate: React.FC<{ children: React.ReactNode}> = ({children}) => {
    return(
        <MessageProvider>
            <Header />
            {children}
        </MessageProvider>
    )
}