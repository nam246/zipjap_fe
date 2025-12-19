"use client";

import Link from "next/link";
import { Lesson, Level } from "@/lib/types";
import { lessons } from "@/lib/mockData";
import {
  BookOpen,
  GraduationCap,
  ChevronRight,
  BookMarked,
  Bookmark,
} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

const getLevelColor = (level: Level) => {
  switch (level) {
    case Level.N5:
      return "bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20";
    case Level.N4:
      return "bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500/20";
    case Level.N3:
      return "bg-purple-500/10 text-purple-700 border-purple-200 hover:bg-purple-500/20";
    case Level.N2:
      return "bg-orange-500/10 text-orange-700 border-orange-200 hover:bg-orange-500/20";
    case Level.N1:
      return "bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500/20";
    default:
      return "bg-gray-500/10 text-gray-700 border-gray-200 hover:bg-gray-500/20";
  }
};

// Component cho từng lesson
function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <Item className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <ItemHeader className="flex items-start justify-between">
        <ItemTitle>
          <BookMarked />
          <h1 className="text-xl font-bold text-slate-900">
            Bài {lesson.lessonNumber}
          </h1>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
            {lesson.source}
          </p>
        </ItemTitle>
        <ItemDescription>
          
        </ItemDescription>
        <ItemActions className="flex items-center gap-2">
          <Badge className={`${getLevelColor(lesson.level)} border`}>
            {lesson.level}
          </Badge>

          <Button
            variant="outline"
            onClick={() =>
              toast("Item have been Bookmarked", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            <Bookmark className="text-slate-400 hover:text-blue-500 transition-all" />
          </Button>
          <Link href={`grammar/${lesson.id}`}>
            <ChevronRight className="text-slate-400 hover:text-blue-500 hover:translate-x-1 transition-all" />
          </Link>
        </ItemActions>
      </ItemHeader>

      <ItemContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium">
              {lesson.grammar.length} mẫu ngữ pháp
            </span>
          </div>

          {/* Danh sách các pattern ngữ pháp */}
          <div className="grid grid-cols-1 gap-2">
            {lesson.grammar.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-lg text-slate-900">
                      {item.pattern}
                    </span>
                    <span className="text-sm text-slate-600">
                      → {item.meaning}
                    </span>
                  </div>
                  {item.structure && (
                    <div className="mt-1 text-sm text-slate-600 font-mono bg-white px-2 py-1 rounded border border-slate-200 inline-block">
                      {item.structure}
                    </div>
                  )}
                  {item.explaination && (
                    <p className="text-sm text-slate-500 mt-1">
                      {item.explaination}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ItemContent>
    </Item>
  );
}

// Component chính
export default function LearningGrammarPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Ngữ pháp tiếng Nhật
              </h1>
              <p className="text-slate-600 mt-1">
                Học các mẫu ngữ pháp từ cơ bản đến nâng cao
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  {lessons.length}
                </div>
              </CardTitle>
              <CardDescription>
                <div className="text-sm text-slate-600 mt-1">
                  Tổng số bài học
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>
                <div className="text-3xl font-bold text-emerald-600">
                  {lessons.reduce((sum, l) => sum + l.grammar.length, 0)}
                </div>
              </CardTitle>
              <CardDescription>
                <div className="text-sm text-slate-600 mt-1">Mẫu ngữ pháp</div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>
                <div className="text-3xl font-bold text-purple-600">N5</div>
              </CardTitle>
              <CardDescription>
                <div className="text-sm text-slate-600 mt-1">
                  Trình độ hiện tại
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Danh sách bài học */}
        <ItemGroup className="space-y-4">
          {lessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
