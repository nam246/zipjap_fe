'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, BookOpen } from 'lucide-react';

interface RecentLesson {
	id: string;
	title: string;
	level: string;
	lastStudied: string;
	status: 'completed' | 'in-progress' | 'not-started';
	progress: number;
}

interface RecentLessonsCardProps {
	lessons: RecentLesson[];
	title?: string;
}

const RecentLessonsCard = ({
	lessons,
	title = 'Bài học gần đây',
}: RecentLessonsCardProps) => {
	const getStatusIcon = (status: string) => {
		switch (status) {
			case 'completed':
				return <CheckCircle2 className='size-4 text-green-600' />;
			case 'in-progress':
				return <Clock className='size-4 text-blue-600' />;
			default:
				return <BookOpen className='size-4 text-gray-400' />;
		}
	};

	const getStatusLabel = (status: string) => {
		switch (status) {
			case 'completed':
				return 'Hoàn thành';
			case 'in-progress':
				return 'Đang học';
			default:
				return 'Chưa bắt đầu';
		}
	};

	return (
		<Card className='p-6'>
			<div className='mb-6'>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='mt-1 text-sm'>
					Các bài học mới nhất của bạn
				</p>
			</div>

			<div className='space-y-3'>
				{lessons.map((lesson) => (
					<div
						key={lesson.id}
						className='flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors'
					>
						<div className='flex flex-1 items-center gap-3'>
							{getStatusIcon(lesson.status)}
							<div className='flex-1'>
								<p className='font-medium'>{lesson.title}</p>
								<div className='mt-1 flex items-center gap-2 text-xs text-gray-600'>
									<span className='rounded-full bg-gray-100 px-2 py-1'>
										{lesson.level}
									</span>
									<span>{lesson.lastStudied}</span>
								</div>
							</div>
						</div>
						<div className='text-right'>
							<p className='text-sm font-semibold'>
								{lesson.progress}%
							</p>
							<p className='text-xs text-gray-600'>
								{getStatusLabel(lesson.status)}
							</p>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default RecentLessonsCard;
