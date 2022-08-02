const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full bg-red-800 h-8 md:h-10 text-right text-orange-50 text-xs p-2'>
      Gheorghe Tarcea {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
