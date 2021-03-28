import Header from '../components/Header'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

export default function FAQ() {
  return (
    <>
      <Header />
      <div class='bg-gray-50'>
        <div class='w-5/6 mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8'>
          <h2 class='text-3xl font-extrabold text-blue-700 sm:text-4xl'>
            Vanliga frågor
          </h2>
          <div class='mt-6'>
            <dl class='space-y-8 divide-y divide-gray-200'>
              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Hur tvättar jag SilverShield?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Det viktiga är att du inte använder tvättmedel eller andra
                    alkaliska produkter. Du tvättar för hand i minst 60 grader.
                    Det är viktigt att tvätta munskyddet varsamt så att
                    silvertrådarna inte skadas.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Hur många gånger kan SilverShield användas?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Munskyddets egenskaper har testats efter 50 tvättar och
                    uppvisat bibehållet skydd mot bakterier och virus.
                    Munskyddets effektivitet påverkas givetvis också av andra
                    faktorer såsom hur munskyddet hanteras och tvättas.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Vilka färger finns SilverShield i?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    För närvarande finns vit och svart.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Är munskyddet CE-certifierat?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Ja munskyddet är CE-certifierat. Testerna som ligger till
                    grund för certifieringen styrker att munskyddet ger ett
                    starkt skydd mot virus och bakterier.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Är SilverShield ett medicinskt munskydd?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Munskydd kan delas in i typ I och II om de har testats i
                    enlighet med standarden EN 14683. Vårt munskydd är av Typ
                    II, vilket har en högre filtreringsförmåga.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Skyddar Silvershield mot virus?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    I de tester som vårt munskydd genomgått har det påvisats
                    starkt skydd mot olika virus i stammen BoHV-1 (Herpesvirus),
                    och antas även skydda mot närliggande virusstammar.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Hur länge kan jag ha på mig SilverShield?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Till skillnad från andra engångsmunskydd som endast skyddar
                    i ett par timmar kan du använda SilverShield flera timmar i
                    sträck utan minskat skydd.
                  </p>
                </dd>
              </div>

              <div class='pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt class='text-base font-medium text-gray-900 md:col-span-5'>
                  Varför innehåller munskydden silver?
                </dt>
                <dd class='mt-2 md:mt-0 md:col-span-7'>
                  <p class='text-base text-gray-500'>
                    Historiskt sett har silver i stor utsträckning använts för
                    sina antibakteriella egenskaper. SilverShield har i tester
                    utförda av EU-ackrediterade laboratorier visat sig ha både
                    antibakteriella och antivirala egenskaper.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  )
}
