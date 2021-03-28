import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Cookie from '../components/Cookie'

export default function Contact() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='SilverShield - Läs mer om oss och vårt antivirala och antibakteriella munskydd.'
        />
        <meta
          name='keywords'
          content='munskydd, virus, ansiktsmask, bekväm, silver, medicinskt munskydd, tygmask, hållbar'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>SilverShield - Om Vårt Företag</title>
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
                Vi utvecklade Silvershield med idén om att lansera en produkt
                som skyddar, är bekväm och hållbar - en kombination av
                egenskaper vi anser fram tills nu saknats på marknaden.
              </p>
              <p className='mt-8 prose-lg text-gray-500 leading-8'>
                SilverShield är en högkvalitativ produkt som också är
                miljövänlig. Våra munskydd innehåller silver vars egenskaper
                framgångsrikt har testats i EU-ackrediterade laboratorier mot
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
                Vårt fokus med Silvershield är <strong> skydd</strong>. Våra
                munskydd har genomgått tester utförda av EU-ackrediterade
                laboratorier. Dessa tester ligger till grund för munskyddets
                CE-certifiering som intygar att det är ett medicinsk munskydd
                som effektivt skyddar mot virus och bakterier.
              </p>
              <p>
                <strong>Bekvämlighet</strong> är den andra av våra pelare,
                eftersom vi vill att våra kunder ska ha en kvalitetsprodukt som
                skyddar men också känns bekväm.
              </p>
              <p>
                Den tredje pelaren är <strong>hållbarhet</strong>. Våra munskydd
                kan återanvändas och tvättas upp till 50 gånger. Det är viktigt
                att överväga att engångsmunskydd endast kan bäras en (1) gång
                och dess avfall bidrar till en belastning på miljön.
                Återanvändbara munskydd är också ekonomiskt för konsumenten på
                lång sikt.
              </p>

              <h2>Varför innehåller munskydden silver?</h2>
              <p>
                Historiskt sett har silver i stor utsträckning använts för sina
                antibakteriella egenskaper. Sedan romartiden har silver använts
                för sin antimikrobiella, antibakteriella verkan. Forskare har i
                studier påvisat att silver skyddar mot en rad bakterier, svampar
                och dessutom har det i ett antal av dessa föreslagits att silver
                kan verka mot ett antal virus.
              </p>
              <p>
                Denna uråldriga kunskap har vi tagit fasta på och testat i en
                modern kontext. Genom rigorösa tester av EU-ackrediterade
                laboratorier har SilverShield visat sig vara effektiv mot virus
                och bakterier.
              </p>
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />

      <Cookie />
    </>
  )
}
