import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';
import { deleteBookmark } from '../apiActions/apiActions';
import { useAuth } from '../context/AuthContext';

const Bookmark = ({ bookmark }: BookmarkProps) => {
  const placeholder = process.env.NEXT_PUBLIC_PLACEHOLDER!;

  const router = useRouter();
  const { user } = useAuth();
  console.log(user);
  const imgLoader = () => {
    return bookmark.image || placeholder;
  };

  const handleDelete = async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await deleteBookmark(bookmark.id!);
    router.push('/');
  };

  return (
    <>
      <a href={bookmark.url} target='_blank' rel='noopener noreferrer'>
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
            <div className='border-b-2 text-xl'>{bookmark.title}</div>
            <p className='my-4'>{bookmark.description}</p>
            {user && user.uid === bookmark.userId && (
              <button
                className='text-white hover:text-black absolute -top-3 -left-3 hover:bg-white bg-black rounded-full w-8 h-8'
                onClick={handleDelete}
              >
                X
              </button>
            )}
          </div>
        </div>
      </a>
    </>
  );
};

export default Bookmark;
