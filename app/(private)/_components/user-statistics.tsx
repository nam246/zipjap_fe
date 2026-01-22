'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, BookOpen, Target, Clock } from 'lucide-react';

interface UserStatisticsProps {
	lessonsCompleted: number;
	vocabularyLearned: number;
	grammarPatterns: number;
	totalStudyHours: number;
	currentLevel: string;
	streak: number;
}

const UserStatistics = ({
	lessonsCompleted,
	vocabularyLearned,
	grammarPatterns,
	totalStudyHours,
	currentLevel,
	streak,
}: UserStatisticsProps) => {
	return (
		<div className='space-y-6'>
			{/* Main Stats Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* Lessons Completed */}
				<Card className='p-6'>
					<div className='flex items-start justify-between mb-3'>
						<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
							<BookOpen className='w-6 h-6 text-blue-600' />
						</div>
						<TrendingUp className='w-4 h-4 text-green-600' />
					</div>
					<p className='text-sm text-gray-600'>Bài học hoàn thành</p>
					<p className='text-3xl font-bold text-gray-900 mt-1'>{lessonsCompleted}</p>
					<p className='text-xs text-gray-500 mt-2'>+2 bài tuần này</p>
				</Card>

				{/* Vocabulary Learned */}
				<Card className='p-6'>
					<div className='flex items-start justify-between mb-3'>
						<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-100'>
							<Target className='w-6 h-6 text-green-600' />
						</div>
						<TrendingUp className='w-4 h-4 text-green-600' />
					</div>
					<p className='text-sm text-gray-600'>Từ vựng đã học</p>
					<p className='text-3xl font-bold text-gray-900 mt-1'>{vocabularyLearned}</p>
					<p className='text-xs text-gray-500 mt-2'>+15 từ tuần này</p>
				</Card>

				{/* Grammar Patterns */}
				<Card className='p-6'>
					<div className='flex items-start justify-between mb-3'>
						<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
							<BookOpen className='w-6 h-6 text-purple-600' />
						</div>
						<TrendingUp className='w-4 h-4 text-green-600' />
					</div>
					<p className='text-sm text-gray-600'>Mẫu ngữ pháp</p>
					<p className='text-3xl font-bold text-gray-900 mt-1'>{grammarPatterns}</p>
					<p className='text-xs text-gray-500 mt-2'>+3 mẫu tuần này</p>
				</Card>

				{/* Study Hours */}
				<Card className='p-6'>
					<div className='flex items-start justify-between mb-3'>
						<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100'>
							<Clock className='w-6 h-6 text-orange-600' />
						</div>
						<TrendingUp className='w-4 h-4 text-green-600' />
					</div>
					<p className='text-sm text-gray-600'>Tổng thời gian học</p>
					<p className='text-3xl font-bold text-gray-900 mt-1'>{totalStudyHours}h</p>
					<p className='text-xs text-gray-500 mt-2'>
						{Math.round((totalStudyHours * 60) / 7)} phút/ngày trung bình
					</p>
				</Card>
			</div>

			{/* Level and Streak Info */}
			<Card className='p-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Current Level */}
					<div>
						<p className='text-sm text-gray-600 mb-2'>Trình độ hiện tại</p>
						<div className='flex items-center gap-4'>
							<div className='relative w-24 h-24'>
								<svg className='w-24 h-24 transform -rotate-90'>
									<circle
										cx='48'
										cy='48'
										r='44'
										fill='none'
										stroke='#e5e7eb'
										strokeWidth='8'
									/>
									<circle
										cx='48'
										cy='48'
										r='44'
										fill='none'
										stroke='#3b82f6'
										strokeWidth='8'
										strokeDasharray={`${(currentLevel.charCodeAt(1) - 48) * 27.6} 276`}
									/>
								</svg>
								<div className='absolute inset-0 flex items-center justify-center'>
									<span className='text-2xl font-bold text-blue-600'>
										{currentLevel}
									</span>
								</div>
							</div>
							<div>
								<p className='text-3xl font-bold text-gray-900'>{currentLevel}</p>
								<p className='text-sm text-gray-600 mt-1'>
									Tiếp tục học để lên cấp
								</p>
								<div className='w-40 h-2 bg-gray-200 rounded-full mt-3'>
									<div
										className='h-full bg-blue-600 rounded-full'
										style={{
											width: `${(currentLevel.charCodeAt(1) - 48) * 10}%`,
										}}
									/>
								</div>
								<p className='text-xs text-gray-500 mt-1'>75% đến N4</p>
							</div>
						</div>
					</div>

					{/* Learning Streak */}
					<div>
						<p className='text-sm text-gray-600 mb-2'>Streak học tập</p>
						<div className='flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg'>
							<p className='text-4xl font-bold text-red-600'>{streak}</p>
							<p className='text-sm text-gray-600 mt-1'>Ngày liên tiếp</p>
							<p className='text-xs text-gray-500 mt-2'>
								🔥 Hãy tiếp tục duy trì!
							</p>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default UserStatistics;
