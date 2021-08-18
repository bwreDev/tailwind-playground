import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	ChartPieIcon,
	MenuIcon,
	XIcon,
	FireIcon,
} from '@heroicons/react/outline';

const solutions = [
	{
		name: 'Blast 825° Brewery | Orcutt',
		description: `Life's too short, have a blast!`,
		href: '/locations/blast-orcutt',
		icon: FireIcon,
	},
	{
		name: `Me N Ed's Pizzaria & Crafthouse | Nipomo`,
		description: 'Two fun guys, one great pizza!',
		href: '/locations/mne-nipomo',
		icon: ChartPieIcon,
	},
	{
		name: `Me N Ed's Pizzaria & Crafthouse | Pismo`,
		description: 'Two fun guys, one great pizza!',
		href: '/locations/mne-pismo',
		icon: ChartPieIcon,
	},
	{
		name: 'Blast 825° Brewery | Pismo',
		description: `Life's too short, have a blast!`,
		href: '/locations/blast-pismo',
		icon: FireIcon,
	},
	{
		name: `Me N Ed's Pizzaria & Crafthouse | Santa Maria`,
		description: 'Two fun guys, one great pizza!',
		href: '/locations/mne-santa-maria',
		icon: ChartPieIcon,
	},
	{
		name: 'Blast 825° Brewery | Arroyo Grande',
		description: `Life's too short, have a blast!`,
		href: '/locations/blast-arroyo-grande',
		icon: FireIcon,
	},
];
const resources = [
	{
		name: 'Help Center',
		description:
			'Get all of your questions answered in our forums or contact support.',
		href: '#',
	},
	{
		name: 'Guides',
		description:
			'Learn how to maximize our platform to get the most out of it.',
		href: '#',
	},
	{
		name: 'Events',
		description:
			'See what meet-ups and other events we might be planning near you.',
		href: '#',
	},
	{
		name: 'Security',
		description: 'Understand how we take your privacy seriously.',
		href: '#',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	return (
		<Popover className='relative bg-white'>
			<div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
				<div className='flex justify-start lg:w-0 lg:flex-1'>
					<a href='/'>
						<span className='sr-only'>Workflow</span>
						<img
							className='h-8 w-auto sm:h-10'
							src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
							alt=''
						/>
					</a>
				</div>
				<div className='-mr-2 -my-2 md:hidden'>
					<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
						<span className='sr-only'>Open menu</span>
						<MenuIcon className='h-6 w-6' aria-hidden='true' />
					</Popover.Button>
				</div>
				<Popover.Group as='nav' className='hidden md:flex space-x-10'>
					<a
						href='/'
						className='text-base font-medium text-gray-500 hover:text-gray-900'>
						Home
					</a>
					<a
						href='/locations'
						className='text-base font-medium text-gray-500 hover:text-gray-900'>
						Locations
					</a>
					<a
						href='/about'
						className='text-base font-medium text-gray-500 hover:text-gray-900'>
						About
					</a>
					<a
						href='/contact'
						className='text-base font-medium text-gray-500 hover:text-gray-900'>
						Contact
					</a>
				</Popover.Group>
			</div>

			<Transition
				as={Fragment}
				enter='duration-200 ease-out'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='duration-100 ease-in'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'>
				<Popover.Panel
					focus
					className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
					<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
						<div className='pt-5 pb-6 px-5'>
							<div className='flex items-center justify-between'>
								<div>
									<img
										className='h-8 w-auto'
										src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
										alt='Workflow'
									/>
								</div>
								<div className='-mr-2'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
										<span className='sr-only'>Close menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='mt-6'>
								<nav className='grid grid-cols-1 gap-7'>
									{solutions.map(item => (
										<a
											key={item.name}
											href={item.href}
											className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
											<div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white'>
												<item.icon className='h-6 w-6' aria-hidden='true' />
											</div>
											<div className='ml-4 text-base font-medium text-gray-900'>
												{item.name}
											</div>
										</a>
									))}
								</nav>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
