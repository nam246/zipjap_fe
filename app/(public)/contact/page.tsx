import type { ComponentType } from 'react';
import {
	Clock8Icon,
	MapPinIcon,
	BriefcaseBusinessIcon,
	PhoneIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import PageHeader from '../_components/page-header';

type ContactInfo = {
	title: string;
	icon: ComponentType;
	description: string;
}[];

const contactInfo = [
	{
		title: 'Thời gian ',
		icon: Clock8Icon,
		description: 'Monday-Friday\n8:00 am to 5:00 pm',
	},
	{
		title: 'Email',
		icon: MapPinIcon,
		description: '24410250@ms.uit.edu.vn\ntrungvuhoang2005@gmail.com',
	},
	{
		title: 'Github',
		icon: BriefcaseBusinessIcon,
		description: 'https://github.com/nam246\n96812, USA',
	},
	{
		title: 'Số điện thoại',
		icon: PhoneIcon,
		description: '+84 984 04 12 42\n+1-316-477-0169',
	},
];

export default function ContactPage() {
	return (
		<div className='py-12 grid items-center gap-12 lg:grid-cols-2'>
			<img
				src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-1.png'
				alt='Contact illustration'
				className='size-full rounded-md object-cover max-lg:max-h-70'
			/>

			<div>
				<h3 className='mb-6 text-2xl font-semibold'>Thông tin liên hệ!</h3>
				<p className='text-muted-foreground mb-10 text-lg font-medium'>
					shadcn/studio gives you the blocks and components you need to create a
					truly professional website, landing page or admin panel for your SaaS and
					gives the blocks.
				</p>

				{/* Contact Info Grid */}
				<div className='grid gap-6 sm:grid-cols-2'>
					{contactInfo.map((info, index) => (
						<Card className='border-none shadow-none' key={index}>
							<CardContent className='flex flex-col items-center gap-4 text-center'>
								<Avatar className='size-9 border'>
									<AvatarFallback className='bg-transparent [&>svg]:size-5'>
										<info.icon />
									</AvatarFallback>
								</Avatar>
								<div className='space-y-3'>
									<h4 className='text-lg font-semibold'>{info.title}</h4>
									<div className='text-muted-foreground text-base font-medium'>
										{info.description.split('\n').map((line, idx) => (
											<p key={idx}>{line}</p>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
