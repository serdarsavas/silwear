import Image from 'next/image';
import Link from 'next/link';
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
                  SilverShield
                </span>
                <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Om vårt företag
                </span>
              </h1>
              <p className='mt-8 prose-lg text-gray-500 leading-8'>
                Vi startade Silvershield med idén att skapa en produkt som
                skyddar, är bekväm och hållbar. Vårt bidrag till marknaden är
                att vi tillhandahåller en högkvalitativ produkt för våra kunder
                som också är miljövänlig. Våra masker innehåller silver vars
                egenskaper framgångsrikt har testats i laboratorier mot
                bakterier och virus.
              </p>
            </div>
            <div className='mt-6 prose prose-lg text-gray-500 mx-auto'>
              <h2 className='font-semibold'>
                Skyddar, bekväm, hållbar och ekonomisk
              </h2>
              <p>
                De tre pelarna i Silvershield är att den skyddar, är bekväm och
                hållbar.
              </p>
              <p>
                Vårt fokus med Silvershield-maskerna är <strong> skydd</strong>.
                Våra masker har genomgått tester utförda av EU-ackrediterade
                laboratorier. Dessa tester ligger till grund för maskens
                CE-certifiering som intygar att det är en medicinsk ansiktsmask
                som effektivt skyddar mot virus och bakterier.
              </p>
              <p>
                <strong>Komfort</strong> är den andra av våra pelare, eftersom
                vi vill att våra kunder ska ha en kvalitetsprodukt som skyddar
                men också känns bekväm.
              </p>
              <p>
                Den tredje pelaren är <strong>hållbarhet</strong>. Våra masker
                kan återanvändas och tvättas upp till 60 gånger. Det är viktigt
                att överväga att engångsmasker endast kan bäras en (1) gång och
                dess avfall bidrar till en belastning på miljön. Återanvändbara
                masker är också ekonomiskt för konsumenten på lång sikt.
              </p>

              <figure>
                <Image
                  className='w-full rounded-lg'
                  src='/images/hero-image.jpg'
                  alt='Bild på fabrik'
                  width={1310}
                  height={873}
                />
                <figcaption>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, quia!
                </figcaption>
              </figure>
              <h2>Varför innehåller maskerna silver?</h2>
              <p>
                Historiskt sett har silver i stor utsträckning använts för sina
                antibakteriella egenskaper. Sedan romartiden har silver använts
                för sin antimikrobiella, antibakteriella verkan.Forskare har i
                studier påvisat att silver skyddar mot en rad bakterier, svampar
                och dessutom har det i ett antal av dessa föreslagits att silver
                kan verka mot ett antal virus.
              </p>
              <p>
                Denna uråldriga kunskap har vi tagit fasta på och testat i en
                modern kontext. Genom rigorösa tester av EU-ackrediterade
                laboratorier har vår mask visat sig vara effektiv mot virus och
                bakterier.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-prose mx-auto py-16 px-6 sm:py-24 lg:px-8 flex items-baseline justify-between gap-8'>
          <span className='text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
            Vill du veta mer?
            <Link href='kontakt'>
              <a className='text-blue-700 block'> Kontakta oss gärna.</a>
            </Link>
          </span>
          <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
            <Link href='kontakt'>
              <a className='px-6 py-3 border border-transparent text-base font-medium rounded-md border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800'>
                Kontakt
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      <Cookie />
    </>
  );
}
