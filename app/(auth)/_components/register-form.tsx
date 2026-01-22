'use client';

import { useState } from 'react';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterForm = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

	return (
		<form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
			{/* Full Name */}
			<div className='space-y-1'>
				<Label htmlFor='fullName' className='leading-5'>
					Họ và tên*
				</Label>
				<Input type='text' id='fullName' placeholder='Nhập họ và tên của bạn' />
			</div>

			{/* Email */}
			<div className='space-y-1'>
				<Label htmlFor='email' className='leading-5'>
					Email*
				</Label>
				<Input type='email' id='email' placeholder='Nhập email của bạn' />
			</div>

			{/* Username */}
			<div className='space-y-1'>
				<Label htmlFor='username' className='leading-5'>
					Tên đăng nhập*
				</Label>
				<Input type='text' id='username' placeholder='Nhập tên đăng nhập' />
			</div>

			{/* Password */}
			<div className='w-full space-y-1'>
				<Label htmlFor='password' className='leading-5'>
					Mật khẩu*
				</Label>
				<div className='relative'>
					<Input
						id='password'
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder='••••••••••••••••'
						className='pr-9'
					/>
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setIsPasswordVisible((prevState) => !prevState)}
						className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
					>
						{isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
						<span className='sr-only'>
							{isPasswordVisible ? 'Hide password' : 'Show password'}
						</span>
					</Button>
				</div>
			</div>

			{/* Confirm Password */}
			<div className='w-full space-y-1'>
				<Label htmlFor='confirmPassword' className='leading-5'>
					Xác nhận mật khẩu*
				</Label>
				<div className='relative'>
					<Input
						id='confirmPassword'
						type={isConfirmPasswordVisible ? 'text' : 'password'}
						placeholder='••••••••••••••••'
						className='pr-9'
					/>
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setIsConfirmPasswordVisible((prevState) => !prevState)}
						className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
					>
						{isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
						<span className='sr-only'>
							{isConfirmPasswordVisible ? 'Hide password' : 'Show password'}
						</span>
					</Button>
				</div>
			</div>

			{/* Terms and Conditions */}
			<div className='flex items-start gap-3'>
				<Checkbox id='terms' className='size-6 mt-1' />
				<Label htmlFor='terms' className='text-muted-foreground leading-5'>
					Tôi đồng ý với <a href='#' className='hover:underline'>Điều khoản dịch vụ</a> và{' '}
					<a href='#' className='hover:underline'>Chính sách bảo mật</a>
				</Label>
			</div>

			<Button className='w-full' type='submit'>
				Đăng ký
			</Button>
		</form>
	);
};

export default RegisterForm;
