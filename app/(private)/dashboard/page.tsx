import { BookOpenIcon, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

import { Card } from '@/components/ui/card';

import LearningStatsCard from '@/app/(private)/_components/learning-stats-card';
import ProgressOverviewCard from '@/app/(private)/_components/progress-overview-card';
import RecentLessonsCard from '@/app/(private)/_components/recent-lessons-card';
import WeeklyActivityChart from '@/app/(private)/_components/weekly-activity-chart';
import StudyTimeCard from '@/app/(private)/_components/study-time-card';

// Learning statistics data
const learningStatsData = [
	{
		icon: <BookOpenIcon className='size-5' />,
		label: 'Bài học hoàn thành',
		value: '24',
		subtext: '+3 bài tuần này',
		trend: 'up' as const,
	},
	{
		icon: <CheckCircle2 className='size-5' />,
		label: 'Từ vựng đã học',
		value: '285',
		subtext: '+45 từ tuần này',
		trend: 'up' as const,
	},
	{
		icon: <TrendingUp className='size-5' />,
		label: 'Ngữ pháp',
		value: '18',
		subtext: '+2 mẫu tuần này',
		trend: 'neutral' as const,
	},
];

// Progress by level
const progressLevels = [
	{
		level: 'N5 (Sơ cấp)',
		total: 10,
		completed: 8,
		color: 'bg-blue-500',
	},
	{
		level: 'N4 (Sơ trung cấp)',
		total: 10,
		completed: 6,
		color: 'bg-green-500',
	},
	{
		level: 'N3 (Trung cấp)',
		total: 8,
		completed: 3,
		color: 'bg-yellow-500',
	},
	{
		level: 'N2 (Trung cao cấp)',
		total: 6,
		completed: 0,
		color: 'bg-orange-500',
	},
];

// Recent lessons
const recentLessonsData = [
	{
		id: '1',
		title: 'Động từ trong tiếng Nhật',
		level: 'N5',
		lastStudied: '2 giờ trước',
		status: 'in-progress' as const,
		progress: 65,
	},
	{
		id: '2',
		title: 'Hiện tại và quá khứ',
		level: 'N5',
		lastStudied: 'Hôm qua',
		status: 'completed' as const,
		progress: 100,
	},
	{
		id: '3',
		title: 'Tính từ và trạng từ',
		level: 'N5',
		lastStudied: '3 ngày trước',
		status: 'in-progress' as const,
		progress: 45,
	},
	{
		id: '4',
		title: 'Câu hỏi và câu trả lời',
		level: 'N4',
		lastStudied: 'Chưa học',
		status: 'not-started' as const,
		progress: 0,
	},
];

// Weekly activity data
const weeklyActivityData = [
	{ day: 'T2', lessons: 3, vocabulary: 15, grammar: 2 },
	{ day: 'T3', lessons: 2, vocabulary: 12, grammar: 3 },
	{ day: 'T4', lessons: 4, vocabulary: 18, grammar: 4 },
	{ day: 'T5', lessons: 3, vocabulary: 14, grammar: 2 },
	{ day: 'T6', lessons: 5, vocabulary: 20, grammar: 5 },
	{ day: 'T7', lessons: 2, vocabulary: 10, grammar: 1 },
	{ day: 'CN', lessons: 1, vocabulary: 8, grammar: 0 },
];

const DashboardShell = () => {
	return (
		<div className='grid gap-6'>
			{/* Page Title */}
			<div>
				<h1 className='text-3xl font-bold'>Bảng điều khiển</h1>
				<p className='mt-2'>
					Theo dõi tiến độ học tập và thống kê của bạn
				</p>
			</div>

			{/* Learning Statistics Cards */}
			<div className='grid gap-6 sm:grid-cols-1 md:grid-cols-3'>
				{learningStatsData.map((stat, index) => (
					<LearningStatsCard
						key={index}
						icon={stat.icon}
						label={stat.label}
						value={stat.value}
						subtext={stat.subtext}
						trend={stat.trend}
					/>
				))}
			</div>

			{/* Progress Overview and Study Time */}
			<div className='grid gap-6 lg:grid-cols-2'>
				<ProgressOverviewCard levels={progressLevels} />
				<StudyTimeCard
					todayMinutes={145}
					weekMinutes={890}
					monthMinutes={3245}
					weekTrend={12}
				/>
			</div>

			{/* Weekly Activity Chart */}
			<WeeklyActivityChart data={weeklyActivityData} />

			{/* Recent Lessons */}
			<RecentLessonsCard lessons={recentLessonsData} />
		</div>
	);
};

export default DashboardShell;
