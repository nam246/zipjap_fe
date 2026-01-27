import Link from 'next/link';
import { Level } from '@/lib/types';
import { route } from '@/lib/constant';

import { ChevronRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PageHeader from '../_components/page-header';
import LevelBadge from '../_components/level-badge';

export default function QuickTestListPage() {

    return (
        <>
            <PageHeader title='Chọn level làm bài thi' description='Danh sách bài thi' />
            <div className='grid grid-cols-3 gap-4'>
                <Link href={`/quick-test/n5`}>
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
                <Link href={`/quick-test/n4`}>
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
            </div>
        </>
    )
}