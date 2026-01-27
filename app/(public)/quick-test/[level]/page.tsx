import { Level } from '@/lib/types';
import PageHeader from '../../_components/page-header';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import LevelBadge from '../../_components/level-badge';

// Tổng hợp các câu hỏi tùy chọn theo cấp độ JLPT?
// Kiểu 1 đề thi JLPT thường có nhiều loại câu hỏi, thì random ra cỡ 10 câu

type QuizType = {
    vocabulary: string; // Trả lời các câu hỏi từ vựng trong đề thi jlpt
    grammar: string; // Trả lời các câu hỏi ngữ pháp trong đề thi jlpt
    kanji: string; // trả lời các câu hỏi kanji
    reading: string; // trả lời các bài đọc
    listening: string; // trả lời các bài nghe
}

export default async function QuickTestListPage({
    params,
}: {
    params: Promise<{ level: Level }>;
}) {
    const { level } = await params;

    return (
        <>
            <PageHeader title={`Các bài kiểm tra cấp ${level}`} description='Tổng hợp các bài kiểm tra theo level. Thêm 1 bộ đếm thời gian. để coi thởi gian làm mất bao lâu' />

            <Link href={`/quick-test/n5/${1}`}>
                <Card className={`group h-full`}>
                    <CardHeader>
                        <LevelBadge level={Level.N5} />
                        <CardTitle className="text-xl mb-1">Cấp độ {Level.N5}</CardTitle>
                        <CardDescription>Luyện tập với cấp độ {Level.N5}</CardDescription>
                        <CardAction>
                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Tiến độ</span>
                                {/* <Badge variant="secondary" className={level.textColor}>
								{level.learnedWords}/{level.totalWords} từ
							</Badge> */}
                            </div>
                            {/* <Progress value={progress} className="h-2" /> */}
                            {/* <div className="text-right text-xs text-slate-500">
							hoàn thành
						</div> */}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </>
    );
}