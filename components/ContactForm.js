export default function ContactForm() {
  return (
    <form class='pt-8 space-y-8 divide-y divide-gray-200 w-3/5 mx-auto'>
      <div>
        <div class='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
          <div class='sm:col-span-3'>
            <label
              for='first_name'
              class='block text-sm font-medium text-gray-700'
            >
              Förnamn
            </label>
            <div class='mt-1'>
              <input
                type='text'
                name='first_name'
                id='first_name'
                autocomplete='given-name'
                class='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div class='sm:col-span-3'>
            <label
              for='last_name'
              class='block text-sm font-medium text-gray-700'
            >
              Efternamn
            </label>
            <div class='mt-1'>
              <input
                type='text'
                name='last_name'
                id='last_name'
                autocomplete='family-name'
                class='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div class='sm:col-span-4'>
            <label for='email' class='block text-sm font-medium text-gray-700'>
              Epostadress
            </label>
            <div class='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                autocomplete='email'
                class='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>
        </div>

        <div class='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
          <div class='sm:col-span-6'>
            <label for='about' class='block text-sm font-medium text-gray-700'>
              Meddelande
            </label>
            <div class='mt-1'>
              <textarea
                id='about'
                name='about'
                rows='3'
                class='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
              ></textarea>
            </div>
            <p class='mt-2 text-sm text-gray-500'>
              Här kan du skriva några rader om du har några frågor
            </p>
          </div>
        </div>
      </div>

      <div class='pt-5'>
        <div class='flex justify-start'>
          <button
            type='submit'
            class='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Skicka
          </button>
        </div>
      </div>
    </form>
  );
}
