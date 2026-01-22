'use client';
import { usePathname } from 'next/navigation';
import {
	ArrowRightLeftIcon,
	CalendarClockIcon,
	ChartNoAxesCombinedIcon,
	ChartPieIcon,
	ChartSplineIcon,
	ClipboardListIcon,
	Clock9Icon,
	CrownIcon,
	HashIcon,
	SettingsIcon,
	SquareActivityIcon,
	Undo2Icon,
	UsersIcon,
	Library,
	BookOpenIcon,
	Languages
} from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from '@/components/ui/sidebar';

import Logo from '@/components/Logo';
import Link from 'next/link';

type menuSidebarItem = {
	groupTitle: string;
	groupContent: Array<{ icon: React.ReactElement; title: string; url: string }>;
};

const menusSidebar: menuSidebarItem[] = [
	{
		groupTitle: 'Learning',
		groupContent: [
			{
				icon: <Library />,
				title: 'List of Vocabulary',
				url: '/vocabulary-list',
			},
			{
				icon: <BookOpenIcon />,
				title: 'List of Grammar',
				url: '/grammar-list',
			},
			{
				icon: <Languages />,
				title: 'List of Kanji',
				url: '/kanji-list',
			},
		],
	},
	{
		groupTitle: 'Practice',
		groupContent: [
			{
				icon: <ChartSplineIcon />,
				title: 'Content Performance',
				url: '/add-vocabulary',
			},
			{
				icon: <UsersIcon />,
				title: 'Audience Insight',
				url: '/add-grammar',
			},
			{
				icon: <ChartPieIcon />,
				title: 'Engagement Metrics',
				url: '/add-kanji',
			},
			{
				icon: <HashIcon />,
				title: 'Hashtag Performance',
				url: '/add-question',
			},
			{
				icon: <ArrowRightLeftIcon />,
				title: 'Competitor Analysis',
				url: '#',
			},
			{
				icon: <ArrowRightLeftIcon />,
				title: 'Competitor Analysis',
				url: '#',
			},
			{
				icon: <Clock9Icon />,
				title: 'Campaign Tracking',
				url: '#',
			},
			{
				icon: <ClipboardListIcon />,
				title: 'Sentiment Tracking',
				url: '#',
			},
			{
				icon: <CrownIcon />,
				title: 'Influencer',
				url: '#',
			},
		],
	},
	{
		groupTitle: 'Supporting Features',
		groupContent: [
			{
				icon: <SquareActivityIcon />,
				title: 'Real Time Monitoring',
				url: '#',
			},
			{
				icon: <CalendarClockIcon />,
				title: 'Schedule Post & Calendar',
				url: '#',
			},
			{
				icon: <Undo2Icon />,
				title: 'Report & Export',
				url: '#',
			},
			{
				icon: <SettingsIcon />,
				title: 'Settings & Integrations',
				url: '#',
			},
			{
				icon: <UsersIcon />,
				title: 'User Management',
				url: '/user',
			},
		],
	},
];

export default function DashBoardSideboardProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	console.log(pathName);

	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<Link href='/'>
										<Logo />
									</Link>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton
										asChild
										isActive={pathName === '/dashboard' ? true : false}
									>
										<Link href='/dashboard'>
											<ChartNoAxesCombinedIcon />
											<span>Dashboard</span>
										</Link>
									</SidebarMenuButton>
									<SidebarMenuBadge className='bg-primary/10 rounded-full'>
										5
									</SidebarMenuBadge>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>

					{menusSidebar.map((menu, idx) => (
						<SidebarGroup key={idx}>
							<SidebarGroupLabel>{menu.groupTitle}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{menu.groupContent.map((content, i) => (
										<SidebarMenuItem key={i}>
											<SidebarMenuButton
												asChild
												isActive={pathName === content.url ? true : false}
											>
												<Link href={content.url}>
													{content.icon}
													<span>{content.title}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
				</SidebarContent>
			</Sidebar>
			{children}
		</SidebarProvider>
	);
}
