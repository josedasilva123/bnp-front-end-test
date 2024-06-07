import { MessageContext } from "@/providers/MessageContext";
import { useContext } from "react";

export const useMessage = () => useContext(MessageContext);