'use client';
import { Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function BookmarkedButton({
	item,
	onToggleBookmark,
	onRemove,
	toast
}: {
	item: any;
	onToggleBookmark?: (id: string) => void;
	onRemove?: (id: string) => void;
	toast?: () => void
}) {
	return (
		<Button
			variant='outline'
			onClick={() => {
				onToggleBookmark?.(item.id);
				onRemove?.(item.id);
				toast?.()
			}}
			className='hover:bg-gray-100 transition-colors'
			title={item.bookmarked ? 'Bỏ bookmark' : 'Thêm bookmark'}
		>
			{item.bookmarked ? (
				<Bookmark className='fill-yellow-400 text-yellow-500' />
			) : (
				<Bookmark className='text-gray-400' />
			)}
		</Button>
	);
}
