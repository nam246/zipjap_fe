'use client'

import Link from 'next/link';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemFooter,
	ItemHeader,
	ItemTitle,
} from '@/components/ui/item';
import { ChevronRight } from 'lucide-react';
import { Grammar } from '@/lib/types';
import { toast } from 'sonner';
import { ItemLevelBadge } from './item-level-badge';
import { BookmarkedButton } from './bookmarked-button';

export function GrammarCard({ grammar }: { grammar: Grammar }) {
	return (
		<Item variant='outline'>
			<ItemHeader>
				<ItemLevelBadge level={grammar.level} />
				<ItemActions>
					<BookmarkedButton
						item={grammar}
						toast={() =>
							toast('Item have been Bookmarked', {
								description: 'Sunday, December 03, 2023 at 9:00 AM',
								action: {
									label: 'Undo',
									onClick: () => console.log('Undo'),
								},
							})
						}
					/>
				</ItemActions>
			</ItemHeader>
			<ItemContent key={grammar.id}>
				<ItemTitle className='font-bold text-lg text-slate-900'>
					{grammar.pattern}
				</ItemTitle>
				<ItemDescription>→ {grammar.meaning}</ItemDescription>

				<div className='flex-1 min-w-0'>
					{grammar.structure && (
						<div className='mt-1 text-sm text-slate-600 font-mono bg-white px-2 py-1 rounded border border-primary inline-block'>
							{grammar.structure}
						</div>
					)}
					{grammar.explaination && (
						<p className='text-sm text-slate-500 mt-1'>{grammar.explaination}</p>
					)}
				</div>
			</ItemContent>
			<ItemFooter>
				<Link
					className='hover:text-blue-500 hover:translate-x-1 transition-all'
					href={`grammar/${grammar.id}`}
				>
					Xem chi tiết <ChevronRight className='inline' />
				</Link>
			</ItemFooter>
		</Item>
	);
}
