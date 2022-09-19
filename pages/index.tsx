import type { GetServerSideProps } from 'next';
import { useState } from 'react';
import { getBookmarks } from '../apiActions/apiActions';
import Filter from '../components/Filter';
import PreviewLink from '../components/PreviewLink';
import Search from '../components/Search';
import { useAuth } from '../context/AuthContext';

const Home = ({ bookmarks }: BookmarksProps) => {
  const { user, token } = useAuth();

  const [filterOption, setFilterOption] = useState('all bookmarks');
  console.log(user, token);
  const publicbookmarks = (bookmarks: Bookmark[]) => {
    return bookmarks.filter((bookmark) => bookmark.public);
  };

  const myPublicbookmarks = (bookmarks: Bookmark[]) => {
    return publicbookmarks(bookmarks).filter(
      (bookmark) => bookmark.userId === user.uid
    );
  };

  const privatebookmarks = (bookmarks: Bookmark[]) => {
    return bookmarks.filter((bookmark) => !bookmark.public);
  };

  const myPrivatebookmarks = (bookmarks: Bookmark[]) => {
    return privatebookmarks(bookmarks).filter(
      (bookmark) => bookmark?.userId === user?.uid
    );
  };

  const userbookmarks = (bookmarks: Bookmark[]) => {
    return [...publicbookmarks(bookmarks), ...myPrivatebookmarks(bookmarks)];
  };

  const mybookmarks = (bookmarks: Bookmark[]) => {
    return [...myPublicbookmarks(bookmarks), ...myPrivatebookmarks(bookmarks)];
  };

  const selectbookmarksToShow = (bookmarks: Bookmark[]) => {
    let option: Bookmark[] = [];
    switch (filterOption) {
      case 'all bookmarks':
        option = bookmarks;
        break;
      case 'my bookmarks':
        option = mybookmarks(bookmarks).sort((a, b) =>
          b.createdAt > a.createdAt ? 1 : -1
        );
        break;
      case 'my public bookmarks':
        option = myPublicbookmarks(bookmarks);
        break;
      case 'my private bookmarks':
        option = myPrivatebookmarks(bookmarks);
        break;
      default:
    }
    return option;
  };

  return (
    <div className='text-center'>
      <div className=''>
        {user && <PreviewLink />}
        {user && (
          <Filter
            filterOption={filterOption}
            setFilterOption={setFilterOption}
          />
        )}
        <Search bookmarks={selectbookmarksToShow(bookmarks)} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Autorization', 'ssskkkkk');
  const bookmarks = await getBookmarks();
  return {
    props: { bookmarks },
    // revalidate: 1,
  };
};

export default Home;
