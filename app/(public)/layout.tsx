import PageBreadcrumb from '@/components/layout/breadcrumb';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className="max-w-7xl min-h-screen mx-auto">
				<PageBreadcrumb />
				{children}
			</div>
			<Footer />
		</>
	);
}
