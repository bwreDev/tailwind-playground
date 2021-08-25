import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Locations', href: '/locations' },
];
const offices = [
	{
		id: 1,
		store: 'Blast 825° Brewery | Orcutt',
		address: ['241 S Broadway St', 'Orcutt, CA 93455'],
		phone: '(805) 934-3777',
	},
	{
		id: 2,
		store: 'Blast 825° Brewery | AG',
		address: ['1462 E Grand Ave', 'Arroyo Grande, CA 93420'],
		phone: '(805) 474-8525',
	},
	{
		id: 3,
		store: 'Blast 825° Brewery | Pismo',
		address: ['2131 Price St', 'Pismo Beach, CA 93449'],
		phone: '(805) 295-5151',
	},
	{
		id: 4,
		store: `Me N Ed's | Nipomo`,
		address: ['110 S Mary Ave', 'Nipomo, CA 93444'],
		phone: '(805) 929-2915',
	},
	{
		id: 5,
		store: `Me N Ed's | Santa Maria`,
		address: ['560 E Betteravia', 'Santa Maria, CA 93454'],
		phone: '(805) 556-3631',
	},
	{
		id: 6,
		store: `Me N Ed's | Pismo`,
		address: ['750 Price St', 'Pismo, CA 93449'],
		phone: '(805) 556-3631',
	},
];

export default function Contact() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Sending Email');

		let data = {
			firstName,
			lastName,
			email,
			phone,
			subject,
			message,
		};

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => {
			console.log('Res recieved', res);
			if (res.status === 200) {
				setSubmitted(true);
				setFirstName('');
				setLastName('');
				setEmail('');
				setPhone('');
				setSubject('');
				setMessage('');
			}
		});
	};

	return (
		<div className='min-h-screen bg-white'>
			<Popover as='header' className='relative'>
				<div className='bg-warm-gray-50'>
					<nav
						className='relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8'
						aria-label='Global'>
						<div className='flex items-center flex-1'>
							<div className='flex items-center justify-between w-full lg:w-auto'>
								<a href='/'>
									<span className='sr-only'>CCRG</span>
									<img
										className='h-10 w-auto sm:h-12'
										src='./blast825.svg'
										alt='CCRG Logo'
									/>
								</a>
								<div className='-mr-2 flex items-center lg:hidden'>
									<Popover.Button className='bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-red-800'>
										<span className='sr-only'>Open main menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='hidden space-x-10 lg:flex lg:ml-10'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className='text-base font-medium text-warm-gray-500 hover:text-warm-gray-900'>
										{item.name}
									</a>
								))}
							</div>
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
						className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden'>
						<div className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
							<div className='px-5 pt-4 flex items-center justify-between'>
								<div>
									<img className='h-8 w-auto' src='./blast825.svg' alt='' />
								</div>
								<div className='-mr-2'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800'>
										<span className='sr-only'>Close menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='pt-5 pb-6'>
								<div className='px-2 space-y-1'>
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50'>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>

			<main className='overflow-hidden'>
				{/* Header */}
				<div className='bg-warm-gray-50'>
					<div className='py-24 lg:py-32'>
						<div className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
							<h1 className='text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
								Get in touch
							</h1>
							<p className='mt-6 text-xl text-warm-gray-600 max-w-3xl'>
								We value feedback from our guests and look forward to speaking
								directly with you!
							</p>
						</div>
					</div>
				</div>

				{/* Contact section */}
				<section
					className='relative bg-white'
					aria-labelledby='contact-heading'>
					<div
						className='absolute w-full h-1/2 bg-warm-gray-50'
						aria-hidden='true'
					/>
					{/* Decorative dot pattern */}
					<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<svg
							className='absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
							width={404}
							height={384}
							fill='none'
							viewBox='0 0 404 384'
							aria-hidden='true'>
							<defs>
								<pattern
									id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits='userSpaceOnUse'>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className='text-warm-gray-200'
										fill='currentColor'
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
							/>
						</svg>
					</div>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='relative bg-white shadow-xl'>
							<h2 id='contact-heading' className='sr-only'>
								Contact us
							</h2>

							<div className='grid grid-cols-1 lg:grid-cols-3'>
								{/* Contact information */}
								<div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-red-600 to-red-800 sm:px-10 xl:p-12'>
									{/* Decorative angle backgrounds */}
									<div
										className='absolute inset-0 pointer-events-none sm:hidden'
										aria-hidden='true'>
										<svg
											className='absolute inset-0 w-full h-full'
											width={343}
											height={388}
											viewBox='0 0 343 388'
											fill='none'
											preserveAspectRatio='xMidYMid slice'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
												fill='url(#linear1)'
												fillOpacity='.1'
											/>
											<defs>
												<linearGradient
													id='linear1'
													x1='254.553'
													y1='107.554'
													x2='961.66'
													y2='814.66'
													gradientUnits='userSpaceOnUse'>
													<stop stopColor='#fff' />
													<stop offset={1} stopColor='#fff' stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<div
										className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
										aria-hidden='true'>
										<svg
											className='absolute inset-0 w-full h-full'
											width={359}
											height={339}
											viewBox='0 0 359 339'
											fill='none'
											preserveAspectRatio='xMidYMid slice'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
												fill='url(#linear2)'
												fillOpacity='.1'
											/>
											<defs>
												<linearGradient
													id='linear2'
													x1='192.553'
													y1='28.553'
													x2='899.66'
													y2='735.66'
													gradientUnits='userSpaceOnUse'>
													<stop stopColor='#fff' />
													<stop offset={1} stopColor='#fff' stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<div
										className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
										aria-hidden='true'>
										<svg
											className='absolute inset-0 w-full h-full'
											width={160}
											height={678}
											viewBox='0 0 160 678'
											fill='none'
											preserveAspectRatio='xMidYMid slice'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
												fill='url(#linear3)'
												fillOpacity='.1'
											/>
											<defs>
												<linearGradient
													id='linear3'
													x1='192.553'
													y1='325.553'
													x2='899.66'
													y2='1032.66'
													gradientUnits='userSpaceOnUse'>
													<stop stopColor='#fff' />
													<stop offset={1} stopColor='#fff' stopOpacity={0} />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<h3 className='text-lg font-medium text-warm-gray-900'>
										Contact us the old fashioned way
									</h3>
									<dl className='mt-8 space-y-6'>
										<dt>
											<span className='sr-only'>Phone number</span>
										</dt>
										<dd className='flex text-base text-warm-gray-900'>
											<PhoneIcon
												className='flex-shrink-0 w-6 h-6 text-warm-gray-800'
												aria-hidden='true'
											/>
											<span className='ml-3'>+1 (555) 123-4567</span>
										</dd>
										<dt>
											<span className='sr-only'>Email</span>
										</dt>
										<dd className='flex text-base text-warm-gray-900'>
											<MailIcon
												className='flex-shrink-0 w-6 h-6 text-warm-gray-900'
												aria-hidden='true'
											/>
											<span className='ml-3'>support@workcation.com</span>
										</dd>
									</dl>
								</div>

								{/* Contact form */}
								<div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
									<h3 className='text-lg font-medium text-warm-gray-900'>
										Contact us via email
									</h3>
									<form
										action='#'
										method='POST'
										className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
										<div>
											<label
												htmlFor='first-name'
												className='block text-sm font-medium text-warm-gray-900'>
												First name
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='first-name'
													id='first-name'
													autoComplete='given-name'
													onChange={e => {
														setFirstName(e.target.value);
													}}
													value={firstName}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border-warm-gray-300 rounded-md'
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor='last-name'
												className='block text-sm font-medium text-warm-gray-900'>
												Last name
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='last-name'
													id='last-name'
													autoComplete='family-name'
													onChange={e => {
														setLastName(e.target.value);
													}}
													value={lastName}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border-warm-gray-300 rounded-md'
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor='email'
												className='block text-sm font-medium text-warm-gray-900'>
												Email
											</label>
											<div className='mt-1'>
												<input
													id='email'
													name='email'
													type='email'
													autoComplete='email'
													onChange={e => {
														setEmail(e.target.value);
													}}
													value={email}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border-warm-gray-300 rounded-md'
												/>
											</div>
										</div>
										<div>
											<div className='flex justify-between'>
												<label
													htmlFor='phone'
													className='block text-sm font-medium text-warm-gray-900'>
													Phone
												</label>
												<span
													id='phone-optional'
													className='text-sm text-warm-gray-500'>
													Optional
												</span>
											</div>
											<div className='mt-1'>
												<input
													type='text'
													name='phone'
													id='phone'
													autoComplete='tel'
													onChange={e => {
														setPhone(e.target.value);
													}}
													value={phone}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border-warm-gray-300 rounded-md'
													aria-describedby='phone-optional'
												/>
											</div>
										</div>
										<div className='sm:col-span-2'>
											<label
												htmlFor='subject'
												className='block text-sm font-medium text-warm-gray-900'>
												Subject
											</label>
											<div className='mt-1'>
												<input
													type='text'
													name='subject'
													id='subject'
													onChange={e => {
														setSubject(e.target.value);
													}}
													value={subject}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border-warm-gray-300 rounded-md'
												/>
											</div>
										</div>
										<div className='sm:col-span-2'>
											<div className='flex justify-between'>
												<label
													htmlFor='message'
													className='block text-sm font-medium text-warm-gray-900'>
													Message
												</label>
												<span
													id='message-max'
													className='text-sm text-warm-gray-500'>
													Max. 500 characters
												</span>
											</div>
											<div className='mt-1'>
												<textarea
													id='message'
													name='message'
													rows={4}
													onChange={e => {
														setMessage(e.target.value);
													}}
													value={message}
													className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-800 focus:border-red-800 border border-warm-gray-300 rounded-md'
													aria-describedby='message-max'
												/>
											</div>
										</div>
										<div className='sm:col-span-2 sm:flex sm:justify-end'>
											<button
												type='submit'
												onClick={e => {
													handleSubmit(e);
												}}
												className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 sm:w-auto'>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact grid */}
				<section aria-labelledby='offices-heading'>
					<div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
						<h2
							id='offices-heading'
							className='text-3xl font-extrabold text-warm-gray-900'>
							Our Stores
						</h2>
						<p className='mt-6 text-lg text-warm-gray-500 max-w-3xl'>
							If you would prefer to speak with one of our managers at a
							specific location, feel free to call or come in for a chat. We
							look forward to speaking with you!
						</p>
						<div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
							{offices.map(office => (
								<div key={office.id}>
									<h3 className='text-lg font-medium text-warm-gray-900'>
										{office.store}
									</h3>
									<p className='mt-2 text-base text-warm-gray-500'>
										{office.address.map(line => (
											<span key={line} className='block'>
												{line}
											</span>
										))}
									</p>
									<p className='mt-2 text-base text-warm-gray-500'>
										{office.phone}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className='bg-warm-gray-900' aria-labelledby='footer-heading'>
				<h2 id='footer-heading' className='sr-only'>
					Footer
				</h2>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
						<div className='space-y-8 xl:col-span-1'>
							<a href='/'>
								<span className='sr-only'>CCRG</span>
								<img
									className='h-10 w-auto sm:h-12'
									src='./blast825.svg'
									alt='CCRG Logo'
								/>
							</a>
							<p className='text-warm-gray-400 text-base'>
								Life's too short, have a blast!
							</p>
						</div>

						<div className='mt-12 border-t border-warm-gray-700 pt-8'>
							<p className='text-base text-warm-gray-400 xl:text-center'>
								&copy; 2021 Central Coast Restaurant Group. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
