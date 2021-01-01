import Image from 'next/image';

export default function Team() {
  return (
    <div className='bg-gray-50 space-y-8 divide-y divide-gray-200 border-t-2 border-gray-200'>
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl text-blue-700 font-extrabold tracking-tight sm:text-4xl pb-4'>
              Teamet bakom Silwear
            </h2>
            <p className='text-xl text-gray-500'>
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p>
          </div>
          <ul className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl'>
            <li>
              <div className='space-y-6'>
                <img
                  className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                  src='/images/serdar.jpeg'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Serdar Savas</h3>
                    <p className='text-blue-700'>Inköp och logistik</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                  src='images/jeppa.jpeg'
                  alt='Jesper'
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Jesper Nilsson</h3>
                    <p className='text-blue-700'>CEO</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                  src='images/ivan1.jpg'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Ivan Nazar</h3>
                    <p className='text-blue-700'>
                      Läkare och medicinsk rådgivare
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
