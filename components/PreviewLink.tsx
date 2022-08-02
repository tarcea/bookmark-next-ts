import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { createBookmark } from '../apiActions/apiActions';
import { useAuth } from '../context/AuthContext';

const PreviewLink = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const placeholder = process.env.NEXT_PUBLIC_PLACEHOLDER!;
  const { user } = useAuth();
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [data, setData] = useState<any>(null);
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch(`${apiUrl}/preview?url=${url}`, {
      method: 'GET',
    });
    const result = await response.json();
    setData(result);
  };

  const saveBookmark = async (e: SyntheticEvent) => {
    e.stopPropagation();
    const { description, title, image, url } = data;
    const bookmark = {
      description,
      image,
      title,
      url,
      userId: user.uid,
    };
    await createBookmark({ ...bookmark, public: isPublic });
    setData(null);
    setIsPublic(false);
    setUrl('');
    router.push('/');
  };

  const imgLoader = () => {
    return data?.image || placeholder;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // e.stopPropagation();
    setIsPublic(!isPublic);
  };

  const cancelPreview = () => {
    setData(null);
    setUrl('');
  };

  return (
    <div className='p-2.5'>
      {/* <form onSubmit={handleSubmit}> */}

      <input
        type='text'
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        placeholder='paste here the web address'
        className='w-52 text-xs md:text-lg md:w-80 border p-1 my-5'
      />
      {data ? (
        data.message ? (
          <button
            onClick={handleSubmit}
            className='border border-l-0 p-1 text-xs md:text-lg'
          >
            preview
          </button>
        ) : (
          <>
            <label>public</label>
            <input
              type='checkbox'
              name='public'
              checked={isPublic}
              onChange={onInputChange}
              className='ml-2'
            />
            <button onClick={cancelPreview} className='ml-2'>
              cancel
            </button>
            <button onClick={saveBookmark} className='ml-2'>
              bookmark
            </button>
          </>
        )
      ) : (
        <button
          onClick={handleSubmit}
          className='border border-l-0 p-1 text-xs md:text-lg'
        >
          preview
        </button>
      )}
      {/* </form> */}
      {data &&
        (data.message ? (
          <div>{data.message}</div>
        ) : (
          <div className='w-full justify-center items-center bg-white shadow-lg rounded-lg flex flex-col hover:shadow-md h-full relative'>
            <Image
              loader={imgLoader}
              src='/1.jpg'
              alt='image'
              width={300}
              height={300}
              className='w-full p-4 justify-start flex flex-col'
              loading='lazy'
            />

            <div className='w-full p-4 justify-start flex flex-col'>
              <div className='border-b-2 text-xl'>{data.title}</div>
              <p className='my-4'>{data.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PreviewLink;
