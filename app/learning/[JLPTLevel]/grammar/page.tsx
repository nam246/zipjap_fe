import Link from "next/link";
import { Lesson, Level } from "@/lib/types";
import { lessons } from "@/lib/mockData";
import {
  BookOpen,
  GraduationCap,
  ChevronRight,
  BookMarked,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
	<Link href={`grammar/${lesson.id}`} className="block">
		<Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer">
		<CardHeader className="pb-3">
			<div className="flex items-start justify-between">
			<div className="flex-1">
				<div className="flex items-center gap-3 mb-2">
				<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg">
					{lesson.lessonNumber}
				</div>
				<div>
					<CardTitle className="text-xl font-bold text-slate-900">
					Bài {lesson.lessonNumber}
					</CardTitle>
					<p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
					<BookMarked className="w-4 h-4" />
					{lesson.source}
					</p>
				</div>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Badge className={`${getLevelColor(lesson.level)} border`}>
				{lesson.level}
				</Badge>
				<ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
			</div>
			</div>
		</CardHeader>

		<CardContent className="pt-0">
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
		</CardContent>
		</Card>
	</Link>
  );
}

// Component chính
export default function LearningGrammarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {lessons.length}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Tổng số bài học
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  {lessons.reduce((sum, l) => sum + l.grammar.length, 0)}
                </div>
                <div className="text-sm text-slate-600 mt-1">Mẫu ngữ pháp</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">N5</div>
                <div className="text-sm text-slate-600 mt-1">
                  Trình độ hiện tại
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Danh sách bài học */}
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}
