import { useAuth } from '../context/AuthContext';
import Bookmark from './Bookmark';

const BookmarkList = ({ bookmarks }: BookmarksProps) => {
  const { user } = useAuth();
  return (
    <div className='container my-4 mx-auto px-0 md:px-0'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {bookmarks &&
          bookmarks.map((bookmark) => {
            if ((user && user.uid === bookmark.userId) || bookmark.public)
              return (
                <div
                  key={bookmark.id}
                  className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3'
                >
                  <Bookmark bookmark={bookmark} />
                </div>
              );
          })}
      </div>
    </div>
  );
};

export default BookmarkList;
