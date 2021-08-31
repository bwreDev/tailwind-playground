import Head from 'next/head';
import Hero from '../components/Hero';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
	return (
		<>
			<Hero />
			<RestaurantList />
		</>
	);
}
