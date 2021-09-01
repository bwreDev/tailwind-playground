export default function LogoCloud() {
  return (
    <div className='bg-gradient-to-r from-warm-gray-300 to-warm-gray-400 shadow-xl'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-1 flex justify-center'>
            <img
              className='h-12 md:h-16 lg:h-20'
              src='/images/blast825.svg'
              alt='Blast 825'
            />
          </div>
          <div className='col-span-1 flex justify-center'>
            <img
              className='h-12 md:h-16 lg:h-20'
              src='/images/menedslogo.svg'
              alt={`Me N Ed's`}
            />
          </div>
          <div className='col-span-2 flex justify-center'>
            <img
              className='h-12 md:h-16 lg:h-20'
              src=''
              alt={`Blast & Brew`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
