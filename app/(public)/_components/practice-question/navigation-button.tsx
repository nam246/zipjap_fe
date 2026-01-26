import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NavigationButton({
	currentPage,
	totalPages,
	goToPage,
	handleSubmit,
}: {
	currentPage: number;
	totalPages: number;
	goToPage: (currentPage: number) => void;
	handleSubmit: () => void;
}) {
	return (
		<div className='flex items-center justify-between gap-4'>
			{/* Navigation */}
			<Button
				onClick={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
				className='flex items-center gap-2 px-6 py-3 rounded-lg border-2  disabled:opacity-50 disabled:cursor-not-allowed transition'
			>
				<ChevronLeft className='w-5 h-5' />
				Previous
			</Button>

			{currentPage < totalPages ? (
				<Button
					onClick={() => goToPage(currentPage + 1)}
					className='flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 transition'
				>
					Next
					<ChevronRight className='w-5 h-5' />
				</Button>
			) : (
				<Button
					onClick={handleSubmit}
					className='px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition font-semibold'
				>
					Submit Quiz
				</Button>
			)}
		</div>
	);
}
