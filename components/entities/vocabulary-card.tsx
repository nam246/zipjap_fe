import Link from 'next/link';

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
import { Vocabulary } from '@/lib/types';
import { ItemWordTypeBadge } from './item-wordtype-badge';
import { BookmarkedButton } from './bookmarked-button';
import { AudioButton } from './audio-button';

export const VocabularyCard = ({ vocabulary }: { vocabulary: Vocabulary }) => {
	return (
		<Item variant='outline'>
			<ItemHeader>
				<div className='flex gap-2'>
					<ItemLevelBadge level={vocabulary.level} />
					<ItemWordTypeBadge wordType={vocabulary.wordType} />
				</div>
				<ItemActions>
					<BookmarkedButton item={vocabulary} />
				</ItemActions>
			</ItemHeader>
			<ItemContent>
				<ItemTitle className='font-bold text-xl'>
					{vocabulary.word}
					<AudioButton word={vocabulary.word} />
				</ItemTitle>

				<ItemDescription>
					{/* Nên thêm cách đọc bằng hiragana katakana */}
					{vocabulary.romaji}
				</ItemDescription>

				<div>Ý nghĩa: {vocabulary.meaning}</div>
			</ItemContent>
			<ItemFooter>
				<Link
					className='text-slate-400 hover:text-blue-500 hover:translate-x-1 transition-all flex items-center'
					href={`vocabulary/${vocabulary.id}`}
				>
					Xem chi tiết <ChevronRight />
				</Link>
			</ItemFooter>
		</Item>
	);
};
