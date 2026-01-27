'use client'

import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Flame, BookOpen, TrendingUp, Target, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Dữ liệu mẫu - sau này bạn có thể lấy từ API hoặc database
const levels = [
    {
        id: 'n5',
        name: 'N5',
        title: 'Sơ cấp',
        description: 'Từ vựng và ngữ pháp cơ bản',
        totalWords: 800,
        learnedWords: 245,
        color: 'bg-green-500',
        textColor: 'text-green-600',
        borderColor: 'border-green-200',
    },
    {
        id: 'n4',
        name: 'N4',
        title: 'Tiền trung cấp',
        description: 'Mở rộng vốn từ vựng',
        totalWords: 1500,
        learnedWords: 120,
        color: 'bg-blue-500',
        textColor: 'text-blue-600',
        borderColor: 'border-blue-200',
    },
    {
        id: 'n3',
        name: 'N3',
        title: 'Trung cấp',
        description: 'Giao tiếp hàng ngày',
        totalWords: 3000,
        learnedWords: 50,
        color: 'bg-yellow-500',
        textColor: 'text-yellow-600',
        borderColor: 'border-yellow-200',
    },
    {
        id: 'n2',
        name: 'N2',
        title: 'Trung cao cấp',
        description: 'Đọc hiểu chuyên sâu',
        totalWords: 6000,
        learnedWords: 0,
        color: 'bg-orange-500',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
    },
    {
        id: 'n1',
        name: 'N1',
        title: 'Cao cấp',
        description: 'Thành thạo tiếng Nhật',
        totalWords: 10000,
        learnedWords: 0,
        color: 'bg-red-500',
        textColor: 'text-red-600',
        borderColor: 'border-red-200',
    },
]

const stats = {
    totalLearned: 415,
    streak: 7,
    studyTime: 24,
    accuracy: 87,
}

import PageHeader from "../_components/page-header";
export default function FlashcardsListPage() {
    return (
        <div>
            <PageHeader title="Flashcards Tiếng Nhật" description="Học từ vựng và ngữ pháp hiệu quả với phương pháp flashcards. Chọn cấp độ của bạn." />

            {/* Main Content - Level Selection */}
            <div className="mb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {levels.map((level) => {
                        const progress = (level.learnedWords / level.totalWords) * 100

                        return (
                            <Link href={`/flashcards/${level.id}`} key={level.id}>
                                <Card className={`group h-full`}>
                                    <CardHeader>
                                        <Badge variant="secondary" className={level.textColor}>
                                            {level.name}
                                        </Badge>
                                        <CardTitle className="text-xl mb-1">{level.title}</CardTitle>
                                        <CardDescription>{level.description}</CardDescription>
                                        <CardAction>
                                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                                        </CardAction>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 dark:text-slate-400">Tiến độ</span>
                                                <Badge variant="secondary" className={level.textColor}>
                                                    {level.learnedWords}/{level.totalWords} từ
                                                </Badge>
                                            </div>
                                            <Progress value={progress} className="h-2" />
                                            <div className="text-right text-xs text-slate-500">
                                                {progress.toFixed(1)}% hoàn thành
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}