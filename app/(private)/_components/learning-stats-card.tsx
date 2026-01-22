'use client';

import { Card } from '@/components/ui/card';
import { BookOpenIcon, CheckCircle2, Clock, Target } from 'lucide-react';

interface LearningStatsCardProps {
	icon: React.ReactNode;
	label: string;
	value: number | string;
	subtext?: string;
	trend?: 'up' | 'down' | 'neutral';
}

const LearningStatsCard = ({
	icon,
	label,
	value,
	subtext,
	trend = 'neutral',
}: LearningStatsCardProps) => {
	const trendColor =
		trend === 'up'
			? 'text-green-600'
			: trend === 'down'
				? 'text-red-600'
				: 'text-blue-600';

	return (
		<Card className='flex flex-col gap-4 p-6'>
			<div className='flex items-center justify-between'>
				<div className='flex h-12 w-12 items-center justify-center rounded-lg dark:bg-blue-100'>
					<div className={`${trendColor}`}>{icon}</div>
				</div>
				<span className={`text-sm font-semibold ${trendColor}`}>
					{trend === 'up' && '↑'}{' '}
					{trend === 'down' && '↓'}
				</span>
			</div>
			<div className='space-y-1'>
				<p className='text-sm font-medium'>{label}</p>
				<p className='text-2xl font-bold'>{value}</p>
				{subtext && <p className='text-xs'>{subtext}</p>}
			</div>
		</Card>
	);
};

export default LearningStatsCard;
