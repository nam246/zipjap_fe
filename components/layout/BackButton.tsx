'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const router = useRouter()

const handleGoBack = () => {
  router.back();
};

export default function BackButton() {
    return (
        <Button variant='outline' onClick={handleGoBack}>
            <ArrowLeft className='w-4 h-4' />
            Quay lại
        </Button>
    )
}