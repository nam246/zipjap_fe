import Link from "next/link";
import { Level } from "@/lib/types";
import type { LucideIcon } from "lucide-react";
import { BookOpen, BookMarked, Languages, GraduationCap } from "lucide-react";

type navItem = {
  href: string;
  label: string;
  labelEn: string;
  icon: LucideIcon;
  description: string;
};

function NavItem({
  item,
  isActive,
  level,
}: {
  item: navItem;
  isActive: boolean;
  level: Level;
}) {
  const Icon = item.icon;
  const levelInfo = getLevelInfo(level);

  return (
    <Link
      href={`/learning/${level}/${item.href}`}
      className={`
        group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300
        ${
          isActive
            ? `bg-gradient-to-r ${levelInfo.bgClass} text-white shadow-lg scale-105`
            : "bg-white hover:bg-slate-50 text-slate-700 hover:shadow-md border-2 border-slate-200 hover:border-slate-300"
        }
      `}
    >
      <div
        className={`
        p-3 rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-white/20"
            : `bg-${levelInfo.color}-50 group-hover:bg-${levelInfo.color}-100`
        }
      `}
      >
        <Icon
          className={`w-6 h-6 ${
            isActive ? "text-white" : `text-${levelInfo.color}-600`
          }`}
        />
      </div>

      <div className="flex-1">
        <div className="font-bold text-lg">{item.label}</div>
        <div
          className={`text-sm ${isActive ? "text-white/80" : "text-slate-500"}`}
        >
          {item.labelEn}
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-l-full" />
      )}
    </Link>
  );
}

export default function Sidebar({
  navItems,
  activeTab,
  levelInfo,
}: {
  navItems: navItem[];
  activeTab: any;
  levelInfo: any;
}) {
  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-32 space-y-3">
        <div className="mb-4">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">
            Nội dung học
          </h2>
        </div>
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            isActive={activeTab === item.href}
            level={JLPTLevel}
          />
        ))}

        {/* Progress Card */}
        <div className="mt-6 p-4 bg-white rounded-xl border-2 border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            Tiến độ học tập
          </h3>
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="font-medium text-slate-900">0%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${levelInfo.bgClass} transition-all duration-500`}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white shadow-lg">
          <div className="text-sm opacity-90 mb-1">Tổng thời gian học</div>
          <div className="text-3xl font-bold">0h</div>
          <div className="text-sm opacity-90 mt-2">Tuần này</div>
        </div>
      </div>
    </aside>
  );
}
