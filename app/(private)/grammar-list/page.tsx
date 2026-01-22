'use client';

import { useState, useEffect } from 'react';
import GrammarListDisplay from '../_components/grammar-list-display';
import { GrammarItem } from '../_components/grammar-card';
import { BookOpenIcon } from 'lucide-react';

// Mock data - bookmarked grammar items
const MOCK_BOOKMARKED_GRAMMAR: GrammarItem[] = [
	{
		id: '1',
		pattern: '〜です',
		structure: '[Noun] です',
		meaning: 'Là, cái',
		explanation: 'Mẫu câu cơ bản để nói ai đó/cái gì đó là gì. Được dùng sau danh từ để khẳng định.',
		level: 'N5',
		examples: [
			{
				japanese: '私は田中です。',
				vietnamese: 'Tôi là Tanaka.',
			},
			{
				japanese: 'これは本です。',
				vietnamese: 'Cái này là sách.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
	},
	{
		id: '2',
		pattern: '〜ます',
		structure: '[Verb stem] ます',
		meaning: 'Dạng lịch sự của động từ',
		explanation: 'Dạng lịch sự của động từ ở thì hiện tại/tương lai. Được dùng trong đối thoại trang trọng.',
		level: 'N5',
		examples: [
			{
				japanese: '私は毎日勉強します。',
				vietnamese: 'Tôi học tập mỗi ngày.',
			},
			{
				japanese: '明日映画を見ます。',
				vietnamese: 'Ngày mai tôi xem phim.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
	},
	{
		id: '3',
		pattern: '〜ました',
		structure: '[Verb stem] ました',
		meaning: 'Quá khứ lịch sự',
		explanation: 'Dạng quá khứ lịch sự của động từ.',
		level: 'N5',
		examples: [
			{
				japanese: '昨日映画を見ました。',
				vietnamese: 'Hôm qua tôi xem phim.',
			},
			{
				japanese: '朝ご飯を食べました。',
				vietnamese: 'Tôi đã ăn sáng.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
	},
	{
		id: '4',
		pattern: '〜ていません',
		structure: '[Verb-te form] いません',
		meaning: 'Phủ định dạng đang tiến hành',
		explanation: 'Dùng để phủ định hành động đang tiến hành.',
		level: 'N4',
		examples: [
			{
				japanese: '今、勉強していません。',
				vietnamese: 'Bây giờ tôi không đang học.',
			},
			{
				japanese: 'まだ食べていません。',
				vietnamese: 'Tôi chưa ăn.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
	},
	{
		id: '5',
		pattern: '〜べき',
		structure: '[Verb stem] べき',
		meaning: 'Nên, phải (lời khuyên)',
		explanation: 'Chỉ điều gì đó nên làm hoặc phải làm.',
		level: 'N3',
		examples: [
			{
				japanese: 'もっと勉強するべきです。',
				vietnamese: 'Bạn nên học nhiều hơn.',
			},
			{
				japanese: 'すぐに行くべきです。',
				vietnamese: 'Bạn phải đi ngay.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
	},
	{
		id: '6',
		pattern: '〜だけ',
		structure: '[Noun/Verb] だけ',
		meaning: 'Chỉ, mỗi',
		explanation: 'Chỉ một cái gì đó hoặc một lượng cụ thể, không có cái gì khác.',
		level: 'N4',
		examples: [
			{
				japanese: 'コーヒーだけください。',
				vietnamese: 'Cho tôi chỉ cà phê.',
			},
			{
				japanese: 'これだけあれば十分です。',
				vietnamese: 'Cái này là đủ.',
			},
		],
		bookmarked: true,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
	},
];

export default function GrammarListPage() {
	const [bookmarkedGrammar, setBookmarkedGrammar] = useState<GrammarItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate API call
		const timer = setTimeout(() => {
			setBookmarkedGrammar(MOCK_BOOKMARKED_GRAMMAR);
			setLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const handleBookmarkChange = (id: string, bookmarked: boolean) => {
		setBookmarkedGrammar((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, bookmarked } : item
			)
		);
	};

	return (
		<div>
			<div className='mb-8'>
				<div className='flex items-center gap-3 mb-2'>
					<BookOpenIcon className='size-8 text-blue-600' />
					<h1 className='text-3xl font-bold text-gray-900'>Ngữ pháp đã bookmark</h1>
				</div>
				<p className='text-gray-600'>
					Quản lý và ôn tập những mẫu ngữ pháp bạn đã đánh dấu
				</p>
			</div>

			<GrammarListDisplay
				items={bookmarkedGrammar}
				loading={loading}
				emptyMessage='Chưa có ngữ pháp nào được bookmark. Hãy bookmark những mẫu câu bạn muốn ôn tập!'
				onBookmarkChange={handleBookmarkChange}
			/>
		</div>
	);
}
