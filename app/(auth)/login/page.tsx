import QuickLoginButton from '../_components/quick-login-button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import Logo from '@/components/Logo';
import LoginForm from '@/app/(auth)/_components/login-form';

const LoginPage = () => {
	return (
		<div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
			<div className='absolute'>{/* <AuthBackgroundShape /> */}</div>

			<Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
				<CardHeader className='gap-6'>
					<Logo className='gap-3' />

					<div>
						<CardTitle className='mb-1.5 text-2xl'>Đăng nhập với Renshyuu</CardTitle>
						<CardDescription className='text-base'>
							Để sử dụng tính năng mở rộng.
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent>
					{/* <p className="text-muted-foreground mb-6">
            Login with{" "}
            <a href="#" className="text-card-foreground hover:underline">
              Magic Link
            </a>
          </p> */}

					{/* Quick Login Buttons */}
					<QuickLoginButton />

					{/* Login Form */}
					<div className='space-y-4'>
						<LoginForm />

						<p className='text-muted-foreground text-center'>
							Nếu chưa có tài khoản?{' '}
							<a href='/register' className='text-card-foreground hover:underline'>
								Đăng ký ngay!
							</a>
						</p>

						{/* <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <p>or</p>
              <Separator className="flex-1" />
            </div>

            <Button variant="ghost" className="w-full" asChild>
              <a href="#">Sign in with google</a>
            </Button> */}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginPage;
