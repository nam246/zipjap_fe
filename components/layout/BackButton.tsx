'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ text }: { text?: string }) {
	const router = useRouter();
	const handleGoBack = () => {
		router.back();
	};

	return (
		<Button variant='outline' onClick={handleGoBack}>
			<ArrowLeft className='w-4 h-4' />
			{text ? text : 'Quay lại'}
		</Button>
	);
}
