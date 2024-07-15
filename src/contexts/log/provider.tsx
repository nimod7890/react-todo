import { PropsWithChildren, useState } from "react";
import { LogContext } from "src/contexts/log/context";
import { Log } from "src/models/log";

export default function LogProvider({ children }: PropsWithChildren) {
  const [logs, setLogs] = useState<Log[]>([]);

  const addLog = (entry: Log) => setLogs((prev) => [entry, ...prev]);

  return <LogContext.Provider value={{ logs, addLog }}>{children}</LogContext.Provider>;
}
