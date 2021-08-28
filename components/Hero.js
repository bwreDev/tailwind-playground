import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Locations', href: '/locations' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Hero() {
	return (
		<div className='relative bg-warm-gray-600 overflow-hidden'>
			<div
				className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
				aria-hidden='true'>
				<div className='relative h-full max-w-7xl mx-auto'>
					<svg
						className='absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
						width={404}
						height={784}
						fill='none'
						viewBox='0 0 404 784'>
						<defs>
							<pattern
								id='f210dbf6-a58d-4871-961e-36d5016a0f49'
								x={0}
								y={0}
								width={60}
								height={60}
								patternUnits='userSpaceOnUse'>
								<path
									className='text-warm-gray-800'
									fill='currentColor'
									d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
						/>
					</svg>
					<svg
						className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
						width={404}
						height={784}
						fill='none'
						viewBox='0 0 404 784'>
						<defs>
							<pattern
								id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
								x={0}
								y={0}
								width={60}
								height={60}
								patternUnits='userSpaceOnUse'>
								<path
									className='text-warm-gray-800'
									fill='currentColor'
									d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
						/>
					</svg>
				</div>
			</div>

			<div className='relative pt-6 pb-16 sm:pb-24'>
				<Popover>
					<div className='max-w-7xl mx-auto px-4 sm:px-6'>
						<nav
							className='relative flex items-center justify-between sm:h-10 md:justify-center'
							aria-label='Global'>
							<div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
								<div className='flex items-center justify-between w-full md:w-auto'>
									<a href='/'>
										<span className='sr-only'>CCRG</span>
										<img
											className='h-20 mt-5 w-auto sm:h-24'
											src='ccrg.svg'
											alt='CCRG Logo'
										/>
									</a>
									<div className='-mr-2 flex items-center md:hidden'>
										<Popover.Button className='bg-warm-gray-300 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-500 hover:text-warm-gray-700 hover:bg-warm-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800'>
											<span className='sr-only'>Open main menu</span>
											<MenuIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='hidden md:flex md:space-x-10'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className='font-medium text-warm-gray-200 hover:text-red-800'>
										{item.name}
									</a>
								))}
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter='duration-150 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'>
						<Popover.Panel
							focus
							className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
							<div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
								<div className='px-5 pt-4 flex items-center justify-between'>
									<div>
										<img
											className='h-20 w-auto'
											src='ccrg.svg'
											alt='CCRG Logo'
										/>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800'>
											<span className='sr-only'>Close menu</span>
											<XIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
								<div className='px-2 pt-2 pb-3'>
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-warm-gray-900 hover:bg-gray-50'>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
					<div className='text-center'>
						<h1 className='text-4xl tracking-tight font-extrabold text-warm-gray-900 sm:text-5xl md:text-6xl'>
							<span className='block xl:inline'>Central Coast</span>{' '}
							<span className='block text-red-800 xl:inline'>
								Restaurant Group
							</span>
						</h1>
						<p className='mt-3 max-w-md mx-auto text-base text-warm-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
							Harnessing 50+ years of heritage and the highest quality local
							ingredients, we are commited to bringing you the best possible
							dining experience at one of our growing list of impressive
							concepts.
						</p>
						<div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
							<div className='rounded-md shadow'>
								<a
									href='/locations'
									className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10'>
									Visit Our Locations
								</a>
							</div>
							<div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
								<a
									href='/contact'
									className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-800 bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10'>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
