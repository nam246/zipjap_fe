'use client';

import { Card } from '@/components/ui/card';

interface ProgressLevel {
	level: string;
	total: number;
	completed: number;
	color: string;
}

interface ProgressOverviewCardProps {
	levels: ProgressLevel[];
	title?: string;
}

const ProgressOverviewCard = ({
	levels,
	title = 'Tiến độ học tập theo trình độ',
}: ProgressOverviewCardProps) => {
	return (
		<Card className='p-6'>
			<div className='mb-6'>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='mt-1 text-sm'>
					Theo dõi tiến độ của bạn ở mỗi trình độ
				</p>
			</div>

			<div className='space-y-4'>
				{levels.map((level, index) => (
					<div key={index} className='space-y-2'>
						<div className='flex items-center justify-between'>
							<span className='text-sm font-medium'>
								{level.level}
							</span>
							<span className='text-sm font-semibold'>
								{level.completed}/{level.total}
							</span>
						</div>
						<div className='h-2 w-full overflow-hidden rounded-full'>
							<div
								className={`h-full ${level.color}`}
								style={{
									width: `${(level.completed / level.total) * 100}%`,
									transition: 'width 0.3s ease-in-out',
								}}
							/>
						</div>
						<p className='text-xs'>
							{Math.round((level.completed / level.total) * 100)}% hoàn thành
						</p>
					</div>
				))}
			</div>
		</Card>
	);
};

export default ProgressOverviewCard;
