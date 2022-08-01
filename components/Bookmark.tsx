import Image from 'next/image';
import { useRouter } from 'next/router';
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

  const handleDelete = async () => {
    await deleteBookmark(bookmark.id!);
    router.push('/');
  };

  return (
    <div className='overflow-hidden rounded-lg shadow-lg h-full hover:shadow-md relative'>
      <Image
        loader={imgLoader}
        src='/1.jpg'
        alt='image'
        width={50}
        height={50}
        layout='responsive'
      />

      <div className='flex items-center justify-between leading-tight p-2 md:p-4 ml-2'>
        <h1 className='text-lg'>{bookmark.title}</h1>
      </div>

      <div className='flex items-center justify-between leading-none p-2 md:p-4'>
        <p className='ml-2 text-sm'>{bookmark.description}</p>
        {user && user.uid === bookmark.userId && (
          <button
            className='text-white hover:text-black absolute top-0 left-0 hover:bg-white bg-black rounded-full w-14 h-14'
            onClick={handleDelete}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
