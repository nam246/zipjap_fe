'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function PrivateBreadcrumb() {

    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <Breadcrumb className='hidden sm:block'>
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const href = '/' + segments.slice(0, index + 1).join('/');
                    const isLast = index === segments.length - 1;
                    return (
                        <>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Free</BreadcrumbPage>
                </BreadcrumbItem>
                        </>
                    )
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}