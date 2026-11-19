import type { IconType } from "react-icons";
import {
  LuLaptop, LuServer, LuBrainCircuit, LuScanFace, LuLayoutDashboard, LuCalendarDays, LuCode,
} from "react-icons/lu";

const map: Record<string, IconType> = {
  LuLaptop, LuServer, LuBrainCircuit, LuScanFace, LuLayoutDashboard, LuCalendarDays,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? LuCode;
  return <C className={className} aria-hidden />;
}
