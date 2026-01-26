import Link from 'next/link';
import { Level } from '@/lib/types';
import { route } from '@/lib/constant';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PageHeader from '../_components/page-header';

export default function MockTestListPage() {
	return (
		<>
			<PageHeader title='Danh sách bài thi' description='Danh sách bài thi' />
			<div className='grid grid-cols-5 gap-4'>
				<MockTestCard title='Test N5' description='Test N5' level={Level.N5} />
				<MockTestCard title='Test N4' description='Test N4' level={Level.N4} />
				<MockTestCard title='Test N3' description='Test N3' level={Level.N3} />
				<MockTestCard title='Test N2' description='Test N2' level={Level.N2} />
				<MockTestCard title='Test N1' description='Test N1' level={Level.N1} />
			</div>
		</>
	);
}

function MockTestCard({
	title,
	description,
	level,
}: {
	title: string;
	description: string;
	level: Level;
}) {
	return (
		<Card className='mx-auto w-full max-w-sm'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Thời gian thi: 60 phút</p>
				<p>Số lượng câu hỏi: 50 câu</p>
			</CardContent>
			<CardFooter>
				<Button variant='outline' size='sm' className='w-full'>
					<Link href={`${route.mockTest}/${level}`}>Xem chi tiết</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
