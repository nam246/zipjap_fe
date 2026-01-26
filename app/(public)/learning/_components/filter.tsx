import { Input } from '@/components/ui/input';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
} from '@radix-ui/react-dropdown-menu';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
export default function FilterBar() {
	return (
		// Example layout structure
		// nếu user đã có level thì selected là level của user
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
			<Select defaultValue="apple">
				<SelectTrigger className="w-44 border-none bg-indigo-600/25 text-indigo-600 shadow-none dark:text-white">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup className="[&_div:focus]:bg-indigo-600 [&_div:focus]:text-white">
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
