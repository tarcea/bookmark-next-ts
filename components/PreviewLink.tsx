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
  console.log(data);
  const imgLoader = () => {
    return data?.image || placeholder;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsPublic(!isPublic);
  };

  const cancelPreview = () => {
    setData(null);
    setUrl('');
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}

      <input
        type='text'
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        placeholder='paste here the web address'
        className='w-52'
      />
      {data ? (
        data.message ? (
          <button onClick={handleSubmit} className='ml-5'>
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
              className='ml-5'
            />
            <button onClick={cancelPreview} className='ml-5'>
              cancel
            </button>
            <button onClick={saveBookmark} className='ml-5'>
              bookmark
            </button>
          </>
        )
      ) : (
        <button onClick={handleSubmit} className='ml-5'>
          preview
        </button>
      )}
      {/* </form> */}
      {data &&
        (data.message ? (
          <div>{data.message}</div>
        ) : (
          <div>
            <div className='w-1/2'>
              <Image
                loader={imgLoader}
                src='/1.jpg'
                alt='image'
                width={200}
                height={200}
                layout='responsive'
              />
            </div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
    </div>
  );
};

export default PreviewLink;
