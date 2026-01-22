import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protected routes that require authentication
const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Check if the route is protected
	const isProtectedRoute = protectedRoutes.some(route =>
		pathname.startsWith(route)
	);

	if (isProtectedRoute) {
		const token = request.cookies.get('access_token')?.value;

		// If no token, redirect to login
		if (!token) {
			return NextResponse.redirect(new URL('/login', request.url));
		}

		// If token exists, proceed
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
