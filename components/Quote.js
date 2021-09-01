export default function Quote() {
  return (
    <section className='py-12 bg-gradient-to-r from-warm-gray-300 to-warm-gray-400 shadow-xl overflow-hidden md:py-20 lg:py-24'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative'>
          <blockquote className='mt-10'>
            <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
              <p>
                &ldquo;Harnessing 50+ years of heritage and the
                highest quality local ingredients, we are commited to
                bringing you the best possible dining experience at
                one of our growing list of impressive concepts.&rdquo;
              </p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='mx-auto h-10 w-10 rounded-full'
                    src='/images/EditedHeadShot.jpeg'
                    alt='Colton'
                  />
                </div>
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-base font-medium text-gray-900'>
                    Colton Bonner
                  </div>
                  <svg
                    className='hidden md:block mx-1 h-5 w-5 text-red-800'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M11 0h3L9 20H6l5-20z' />
                  </svg>
                  <div className='text-base font-medium text-gray-500'>
                    Manager, Blast 825° Brewery | Orcutt
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
          <blockquote className='mt-10'>
            <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
              <p>&ldquo;Life's too short. Have a blast!&rdquo;</p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='mx-auto h-10 w-10 rounded-full'
                    src='/images/blast825.svg'
                    alt='Blast 825'
                  />
                </div>
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-base font-medium text-gray-900'>
                    Blast 825° Brewery
                  </div>
                  <svg
                    className='hidden md:block mx-1 h-5 w-5 text-red-800'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M11 0h3L9 20H6l5-20z' />
                  </svg>
                  <div className='text-base font-medium text-gray-500'>
                    Slogan
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
