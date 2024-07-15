import { useContext } from "react";
import { LogContext } from "./context";

export default function useLogContext() {
  const context = useContext(LogContext);

  if (!context) {
    throw new Error("useLogContext must be used within a LogProvider");
  }

  return context;
}
