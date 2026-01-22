import { BookOpen } from 'lucide-react';
import BackButton from '@/components/layout/BackButton';

export default function DetailsHeader({ title }: { title: string }) {
	return (
		<div className='rounded-lg bg-primary shadow-sm p-4'>
			<div className='flex items-center gap-4'>
				<BackButton />
				<div className='flex items-center gap-2'>
					<BookOpen className='w-5 h-5' />
					<span className='font-medium'>{title}</span>
				</div>
			</div>
		</div>
	);
}
