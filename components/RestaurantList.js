const stores = [
  {
    id: 1,
    name: 'Blast 825° Brewery | Orcutt',
    address: ['241 S Broadway St', 'Orcutt, CA 93455'],
    phone: '(805) 934-3777',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm1e4SmMU7IARwpH9CBSL5ZU&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 2,
    name: 'Blast 825° Brewery | AG',
    address: ['1462 E Grand Ave', 'Arroyo Grande, CA 93420'],
    phone: '(805) 474-8525',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4biGU7he7IARynWfCcOWl5Y&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 3,
    name: 'Blast & Brew | Pismo',
    address: ['2131 Price St', 'Pismo Beach, CA 93449'],
    phone: '(805) 295-5151',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNaXvd-xY7IARnHRmJhakoJo&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 4,
    name: `Me N Ed's Pizzaria & Craft House | Nipomo`,
    address: ['110 S Mary Ave', 'Nipomo, CA 93444'],
    phone: '(805) 929-2915',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd1RUqmBo7IARChQ9fpUP1AI&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 5,
    name: `Me N Ed's Pizzaria & Craft House | Santa Maria`,
    address: ['560 E Betteravia', 'Santa Maria, CA 93454'],
    phone: '(805) 556-3631',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi0zwl69s7IARuBeCFwwctOg&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 6,
    name: `Me N Ed's Pizzaria & Craft House | Pismo`,
    address: ['750 Price St', 'Pismo, CA 93449'],
    phone: '(805) 556-3631',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMTH0Hd1Y7IARYdRb1ZiN918&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 7,
    name: `Blast & Brew | Paso Robles`,
    address: ['803 13th St', 'Paso Robles, CA 93466'],
    phone: '(805) 227-7132',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnfzkQl3F7IARcHRJ4nhZIRI&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
  {
    id: 8,
    name: `Blast 825° Taproom | SLO`,
    address: ['733 Higuera St', 'San Louis Obispo, CA 93401'],
    phone: '(805) 783-1111',
    map: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7_gg-ALx7IARAHpn-m-sKQQ&key=AIzaSyDzisYaiQwM172xzWnz0qt1NtQvf23MTfc',
  },
];

export default function RestaurantList() {
  return (
    <div className='relative bg-gradient-to-b from-warm-gray-600 via-warm-gray-700 to-warm-gray-800 py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <p className='mt-2 text-5xl font-birmingham font-black drop-shadow-2xl text-red-700 tracking-tight sm:text-7xl'>
          Come Visit Us
        </p>
        <p className='mt-5 max-w-prose mx-auto text-xl text-warm-gray-200'>
          Each of our Central Coast locations are dedicated to
          providing excellent food and fantastic customer service.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
            {stores.map((store) => (
              <div key={store.id} className='pt-6'>
                <div className='flow-root bg-gray-100 rounded-lg pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-red-800 rounded-md shadow-lg'>
                        <iframe
                          frameBorder='0'
                          loading='lazy'
                          src={store.map}
                        ></iframe>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {store.name}
                    </h3>
                    <p className='mt-2 text-base text-warm-gray-500'>
                      {store.address.map((line) => (
                        <span key={line} className='block'>
                          {line}
                        </span>
                      ))}
                    </p>
                    <p className='mt-5 text-base text-gray-500'>
                      {store.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
