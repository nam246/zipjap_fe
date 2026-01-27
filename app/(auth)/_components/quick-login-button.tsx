'use client';

import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth-context';

export default function QuickLoginButton() {
	const router = useRouter();
	const { login, isLoading } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login('testuser1', 'password123');
			router.refresh();
			router.push('/dashboard');
		} catch (error) {
			console.error('Login failed:', error);
			// Ideally show error message to user
			alert('Login failed. Please check your credentials.');
		}
	};
	return (
		<div className='mb-6 flex flex-wrap gap-4 sm:gap-6'>
			<Button variant='outline' className='grow' onClick={handleSubmit}>
				Đăng nhập với quyền User
			</Button>
			<Button variant='outline' className='grow'>
				Đăng nhập với quyền Admin
			</Button>
		</div>
	);
}
