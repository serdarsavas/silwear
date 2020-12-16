export default function Team() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl text-blue-700 font-extrabold tracking-tight sm:text-4xl'>
              Meet our team
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
                  src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Whitney Francis</h3>
                    <p className='text-blue-700'>Copywriter</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                  src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Emily Selman</h3>
                    <p className='text-blue-700'>VP, User Experience</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                  src='https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3>Emma Dorsey</h3>
                    <p className='text-blue-700'>Senior Front-end Developer</p>
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
