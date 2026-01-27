'use client';

import {
	BookOpen,
	Trophy,
	Sparkles,
	Target,
	Zap,
	Users,
	Award,
	ChevronRight,
	Play,
} from 'lucide-react';

import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/hero';
import Features from '@/components/layout/features';
import FAQ from '@/components/layout/faq';
import Link from 'next/link';

const features = [
	{
		icon: Zap,
		title: 'Học từ vựng, kanji với flashcards',
		description: 'Phương pháp học tối ưu giúp bạn tiến bộ từng ngày',
		color: 'from-yellow-500 to-orange-500',
		link: '/flashcards'
	},
	{
		icon: Target,
		title: 'Luyện tập đọc và nghe',
		description: 'Ngoài các bài đọc trong giáo trình, luyện tập các bài đọc và nghe từ nguồn sưu tập',
		color: 'from-blue-500 to-indigo-500',
		link: '/read-and-learn'
	},
	{
		icon: Trophy,
		title: 'Quick Test',
		description: 'Kiểm tra nhanh phù hợp với trình độ và mục tiêu của bạn',
		color: 'from-purple-500 to-pink-500',
		link: '/quick-test'
	},
	{
		icon: Users,
		title: 'Luyện thi JLPT',
		description: 'Làm bài kiểm tra với format chính thức từ JLPT',
		color: 'from-green-500 to-teal-500',
		link: '/mock-test'
	},
];

const levels: {
	title: string;
	description: string;
	lessons: number;
	students: number;
	link: string;
}[] = [
		{
			title: 'N5 - Sơ cấp',
			description: 'Nền tảng Hiragana, Katakana và từ vựng cơ bản',
			lessons: 120,
			students: 15000,
			link: '/learning/n5/grammar'
		},
		{
			title: 'N4 - Trung cấp',
			description: 'Ngữ pháp tiếng Nhật cơ bản và hội thoại hàng ngày',
			lessons: 180,
			students: 10000,
			link: '/learning/n4/grammar'
		},
		{
			title: 'N3 - Trung cao cấp',
			description: 'Giao tiếp thành thạo trong các tình huống thực tế',
			lessons: 240,
			students: 6000,
			link: '/learning/n3/grammar'
		},
	];

// Homepage Component
export default function Homepage() {
	return (
		<>
			<Header />
			<div className='min-h-screen'>
				{/* Hero Section */}
				{/* <HeroSection /> */}
				<Hero />

				{/* Features Section */}
				<FeaturesSection features={features} />
				<Features />

				{/* Levels Section */}
				<LevelSection levels={levels} />

				<FAQ />
			</div>
			<Footer />
		</>
	);
}

function FeaturesSection({ features }: { features: any }) {
	return (
		<section className='max-w-7xl mx-auto py-20'>
			<div className='text-center mb-16'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4'>
					Học tập theo giáo trình
				</h2>
				<p className='text-xl max-w-2xl mx-auto'>
					Các giáo trình chính được sử dụng giáo dục tiếng Nhật tại Việt Nam
				</p>
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{features.map((feature: any, index: number) => {
					const Icon = feature.icon;
					return (
						<Card
							key={index}
							className='group rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'
						>
							<CardHeader>
								<CardTitle>
									<div
										className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
									>
										<Icon className='w-7 h-7' />
									</div>
									<h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
								</CardTitle>
								<CardDescription>
									<p className=''>{feature.description}</p>
								</CardDescription>
							</CardHeader>
						</Card>
					);
				})}
			</div>
		</section>
	);
}

function LevelSection({ levels }: {
	levels: {
		title: string;
		description: string;
		lessons: number;
		students: number;
		link: string;
	}[]
}) {
	return (
		<section className='py-20 bg-gradient-to-b from-primary to-slate-50'>
			<div className='text-center mb-16'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4'>Các cập độ theo JLPT</h2>
				<p className='text-xl max-w-2xl mx-auto'>
					Chọn cấp độ phù hợp và bắt đầu hành trình của bạn
				</p>
			</div>

			<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
				{levels.map((level: any, index: number) => (
					<Card key={index} className='group'>
						<CardHeader>
							<CardTitle>{level.title}</CardTitle>
							<CardDescription>{level.description}</CardDescription>
							<CardAction>
								<Award className='w-12 h-12 group-hover:scale-110 transition-transform' />
							</CardAction>
						</CardHeader>
						<CardContent>
							<div className='space-y-2 mb-6'>
								<div className='flex items-center gap-2 text-sm text-slate-600'>
									<BookOpen className='w-4 h-4' />
									<span>{level.lessons} bài học</span>
								</div>
								<div className='flex items-center gap-2 text-sm text-slate-600'>
									<Users className='w-4 h-4' />
									<span>{level.students.toLocaleString()} học viên</span>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button className='w-full'>
								<Link href={level.link}>Bắt đầu học</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
