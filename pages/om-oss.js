import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';

export default function Contact() {
  return (
    <>
      <Head>
        <title>SilverShield</title>
      </Head>
      <Header />
      <main>
        <div className='relative py-16 bg-white overflow-hidden'>
          <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
            <div
              className='relative h-full text-lg max-w-prose mx-auto'
              aria-hidden='true'
            >
              <svg
                className='absolute top-12 left-full transform translate-x-32'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
              >
                <defs>
                  <pattern
                    id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width='404'
                  height='384'
                  fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
                />
              </svg>
              <svg
                className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
              >
                <defs>
                  <pattern
                    id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width='404'
                  height='384'
                  fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                />
              </svg>
              <svg
                className='absolute bottom-12 left-full transform translate-x-32'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
              >
                <defs>
                  <pattern
                    id='d3eb07ae-5182-43e6-857d-35c643af9034'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width='404'
                  height='384'
                  fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
                />
              </svg>
            </div>
          </div>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='text-lg max-w-prose mx-auto'>
              <h1>
                <span className='block text-base text-center text-blue-700 font-semibold tracking-wide uppercase'>
                  SilverShield Masks
                </span>
                <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  OUR STORY
                </span>
              </h1>
              <p className='mt-8 text-xl text-gray-500 leading-8'>
                We founded Silvershield with the idea to create products that
                are comfortable, bacteria filtration efficient and sustainable.
                Our mission is to provide a high-quality product that is good
                for our customer but also is environmentally friendly. Our masks
                are designed with silver thread which properties have been
                tested in a laboratory against bacteria successfully.
              </p>
            </div>
            <div className='mt-6 prose prose-lg text-gray-500 mx-auto'>
              <h2 className='text-xlfont-semibold'>
                Comfort, Bacteria Filtration, and Sustainability
              </h2>
              <p>
                The three pillars of Silvershield are comfort, protection and
                sustainability. One of our focuses with Silvershield masks is
                <strong> comfort</strong>, because we want our customers to wear
                a quality product that protects but also feels great.
              </p>

              <p>
                <strong>Bacteria</strong> Filtration is the second of our
                pillars. The Silver thread in our mask offers a natural
                antibacterial effect. Our cloth masks ”Silvershield” have gone
                through tests performed by{' '}
                <strong>NANObiz R&D Laboratory and Ekoteks laboratory</strong>.
                The conclusion of the assessment of antiviral and antibacterial
                properties in Silvershield masks was 99.99% effective.
              </p>
              <p>
                Last, <strong>sustainability</strong>. Our masks are reusable
                and washable up to 60 times. It is important to consider
                disposable masks can be worn one (1) time only and this
                unfortunately represents a potential environmental hazard.
              </p>
              <figure>
                <img
                  className='w-full rounded-lg'
                  src='/images/hero-image.jpg'
                  alt=''
                  width='1310'
                  height='873'
                />
                <figcaption>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <h2>Why Silver</h2>
              <p>
                Historically, Silver has widely been used for its antibacterial
                properties. Since Roman times silver has been used for its
                antimicrobial, antibacterial action. Some researchers have
                demonstrated silver properties against a range of bacterias,
                fungi and in addition a number of studies have suggested the
                action of silver against a number of viruses.
              </p>

              <p>
                The Silver thread on the mask has been tested and proven to be
                effective against bacteria, certain viruses and is known for its
                antimicrobial properties. The bactericida of silver is well
                documented.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Cookie />
    </>
  );
}
