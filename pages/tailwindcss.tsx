import Image from 'next/image';

const Tailwindcss = () => {
  const placeholder = process.env.NEXT_PUBLIC_PLACEHOLDER!;
  const imgLoader = () => {
    return placeholder;
  };
  return (
    <>
      <div className='max-w-sm bg-white rounded-lg shadow-md border border-gray-200 hover:drop-shadow-md'>
        <a href='#'>
          <Image
            loader={imgLoader}
            src='/1.jpg'
            alt='image'
            width={200}
            height={200}
            className=''
            layout='responsive'
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      ----------------------------
      <a
        href='#'
        className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <Image
          loader={imgLoader}
          src='/1.jpg'
          alt='image'
          width={400}
          height={300}
          className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
        />

        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
      ---------------------------
      <div className='container mx-auto md:w-1/4'>
        <div
          className='flex bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start'
          style={{ cursor: 'auto' }}
        >
          <div className='relative w-32 h-32 flex-shrink-0'>
            <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
              <Image
                loader={imgLoader}
                src='/1.jpg'
                alt='image'
                width={200}
                height={200}
                className='absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50'
                loading='lazy'
                // layout='responsive'
              />
            </div>
          </div>

          <div className='p-4'>
            <p className='text-sm line-clamp-1'>
              GitHub: Where the world builds software · GitHub
            </p>

            <p className='text-sm text-gray-500 mt-1 line-clamp-2'>
              GitHub is where over 83 million developers shape the future of
              software, together. Contribute to the open source community,
              manage your Git repositories, review code like a pro, track bugs
              and features, power your CI/CD and DevOps workflows, and secure
              code before you commit it.
            </p>

            <span className='flex items-center justify-start text-gray-500'>
              <button>delete</button>
            </span>
          </div>
        </div>
      </div>
      --------------------
      <div className='w-full sm:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col hover:shadow-md'>
        <Image
          loader={imgLoader}
          src='/1.jpg'
          alt='image'
          width={2000}
          height={2000}
          className='w-full p-4 justify-start flex flex-col'
          loading='lazy'
        />

        <div className='w-full p-4 justify-start flex flex-col'>
          <div className='border-b-2 text-xl'>
            GitHub: Where the world builds software · GitHub
          </div>
          <p className='my-4'>
            GitHub is where over 83 million developers shape the future of
            software, together. Contribute to the open source community, manage
            your Git repositories, review code like a pro, track bugs and
            features, power your CI/CD and DevOps workflows, and secure code
            before you commit it.
          </p>
          {/* <button
            value='button'
            className='my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500'
          >
            delete
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Tailwindcss;
