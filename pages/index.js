import Meta from '../components/Meta';
import Hero from '../components/Hero';
import RestaurantList from '../components/RestaurantList';
import Contact from '../components/Contact';
import Quote from '../components/Quote';
import LogoCloud from '../components/LogoCloud';

export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <Quote />
      <RestaurantList />
      <LogoCloud />
      <Contact />
    </>
  );
}
