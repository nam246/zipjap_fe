import { Input } from '@/components/ui/input';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
} from '@radix-ui/react-dropdown-menu';
import { Badge } from '@/components/ui/badge';
export default function FilterBar() {
	return (
		// Example layout structure
		<div className='flex items-center justify-between p-4'>
			<Input placeholder='Filter tasks...' className='max-w-sm' />
			<div className='flex items-center gap-2'>
				<DropdownMenu>
					<DropdownMenuTrigger>Status</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuCheckboxItem>Open</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem>Closed</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Badge variant='secondary'>Active Filter</Badge>
			</div>
		</div>
	);
}
