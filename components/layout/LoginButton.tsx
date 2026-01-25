import Link from 'next/link';
import ProfileDropdown from '@/app/(private)/_components/dropdown-profile';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/lib/auth-context';

export default function LoginButton() {
    const { user } = useAuth();

    if (!user) {
        return (

            <Button className='rounded-lg max-md:hidden' asChild>
                <Link href='/login'>Login</Link>
            </Button>
        );
    }

    return (
        <ProfileDropdown
            trigger={
                <Button variant='ghost' size='icon' className='size-9.5'>
                    <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </Button>
            }
        />
    )
}