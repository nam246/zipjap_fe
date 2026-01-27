import { Badge } from "@/components/ui/badge";
import { Level } from "@/lib/types";

export default function LevelBadge({ level }: { level: Level }) {
    const levelColorMap: Record<Level, string> = {
        [Level.N5]: "bg-blue-100 text-blue-800",
        [Level.N4]: "bg-green-100 text-green-800",
        [Level.N3]: "bg-yellow-100 text-yellow-800",
        [Level.N2]: "bg-orange-100 text-orange-800",
        [Level.N1]: "bg-red-100 text-red-800",
    };
    return (
        <Badge className={`inline-block px-2 py-1 rounded text-xs font-semibold ${levelColorMap[level]}`}>
            {level}
        </Badge>
    )
}