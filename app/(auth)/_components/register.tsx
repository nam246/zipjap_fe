import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import Logo from '@/components/Logo';
import RegisterForm from '@/app/(auth)/_components/register-form';

const Register = () => {
	return (
		<div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
			<div className='absolute'>{/* <AuthBackgroundShape /> */}</div>

			<Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
				<CardHeader className='gap-6'>
					<Logo className='gap-3' />

					<div>
						<CardTitle className='mb-1.5 text-2xl'>Đăng ký tài khoản Renshyuu</CardTitle>
						<CardDescription className='text-base'>
							Tạo tài khoản để bắt đầu học ngay.
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent>
					{/* Register Form */}
					<div className='space-y-4'>
						<RegisterForm />

						<p className='text-muted-foreground text-center'>
							Đã có tài khoản?{' '}
							<a href='/login' className='text-card-foreground hover:underline'>
								Đăng nhập ngay!
							</a>
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Register;
