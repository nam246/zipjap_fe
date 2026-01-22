import Link from 'next/link';

import { Kanji } from '@/lib/types';

import { ChevronRight } from 'lucide-react';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemFooter,
	ItemHeader,
	ItemTitle,
} from '@/components/ui/item';

import { ItemLevelBadge } from './item-level-badge';
import { BookmarkedButton } from './bookmarked-button';
import { AudioButton } from './audio-button';

export function KanjiCard({ kanji }: { kanji: Kanji }) {
	return (
		<Item variant='outline'>
			<ItemHeader>
				<ItemLevelBadge level={kanji.level} />
				<ItemActions>
					<BookmarkedButton item={kanji} />
				</ItemActions>
			</ItemHeader>
			<ItemContent>
				<ItemTitle className='font-bold text-xl'>
					{kanji.character}
					<AudioButton word={kanji.character} />
				</ItemTitle>

				<ItemDescription>
					{/* Nên thêm cách đọc bằng hiragana katakana */}
					{kanji.kunyomi}
				</ItemDescription>

				<div>{kanji.meaning}</div>
			</ItemContent>
			<ItemFooter>
				<Link
					className='text-slate-400 hover:text-blue-500 hover:translate-x-1 transition-all flex items-center'
					href={`kanji/${kanji.id}`}
				>
					Xem chi tiết <ChevronRight />
				</Link>
			</ItemFooter>
		</Item>
	);
}
