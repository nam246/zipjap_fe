'use client';

import { Card } from '@/components/ui/card';
import { Clock, TrendingUp } from 'lucide-react';

interface StudyTimeCardProps {
	todayMinutes: number;
	weekMinutes: number;
	monthMinutes: number;
	weekTrend: number;
}

const StudyTimeCard = ({
	todayMinutes,
	weekMinutes,
	monthMinutes,
	weekTrend,
}: StudyTimeCardProps) => {
	const formatTime = (minutes: number) => {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		if (hours > 0) {
			return `${hours}h ${mins}m`;
		}
		return `${mins}m`;
	};

	return (
		<Card className='p-6'>
			<div className='mb-6'>
				<div className='flex items-center justify-between'>
					<h3 className='text-lg font-semibold'>
						Thời gian học tập
					</h3>
					<Clock className='size-5 text-blue-600' />
				</div>
				<p className='mt-1 text-sm'>
					Tổng thời gian học hôm nay
				</p>
			</div>

			<div className='grid grid-cols-3 gap-4'>
				<div className='rounded-lg bg-blue-50 p-4'>
					<p className='text-xs font-medium text-gray-600'>Hôm nay</p>
					<p className='mt-2 text-2xl font-bold text-blue-600'>
						{formatTime(todayMinutes)}
					</p>
				</div>
				<div className='rounded-lg bg-green-50 p-4'>
					<p className='text-xs font-medium text-gray-600'>Tuần này</p>
					<p className='mt-2 text-2xl font-bold text-green-600'>
						{formatTime(weekMinutes)}
					</p>
				</div>
				<div className='rounded-lg bg-purple-50 p-4'>
					<p className='text-xs font-medium text-gray-600'>Tháng này</p>
					<p className='mt-2 text-2xl font-bold text-purple-600'>
						{formatTime(monthMinutes)}
					</p>
				</div>
			</div>

			<div className='mt-4 flex items-center gap-2 rounded-lg bg-gray-50 p-3'>
				<TrendingUp className='size-4 text-green-600' />
				<p className='text-sm text-gray-700'>
					<span className='font-semibold text-green-600'>+{weekTrend}%</span> so
					với tuần trước
				</p>
			</div>
		</Card>
	);
};

export default StudyTimeCard;
