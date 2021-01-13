export default function Footer({ bgColor, color }) {
  return (
    <footer className={`mt-10 sm:mt-0 bg-${bgColor}`}>
      <div className='flex justify-around space-x-6 py-12'>
        <div className=''>
          <p className={`text-center text-base text-${color}`}>
            &copy; 2020 <span className='text-blue-600'>SilverShield</span>
          </p>
        </div>
        <div>
          <p className={`text-${color}`}>
            Kontakt: <span className='text-blue-600'>info@silvershield.se</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
