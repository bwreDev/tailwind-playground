import Head from 'next/head';
import Hero from '../components/Hero';
import RestaurantList from '../components/RestaurantList';
import CallToAction from '../components/CallToAction';

export default function Home() {
	return (
		<>
			<Hero />
			<RestaurantList />
			<CallToAction />
		</>
	);
}
