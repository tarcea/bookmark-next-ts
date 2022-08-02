import { ChangeEvent, useState } from 'react';
import BookmarkList from './BookmarkList';

const Search = ({ bookmarks }: BookmarksProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const editSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const dSearch = () => {
    return bookmarks.filter((bookmark) =>
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={editSearchTerm}
        placeholder='Search'
        className='w-80 text-xs md:text-lg md:w-80 border p-1'
      />

      <BookmarkList bookmarks={dSearch()} />
    </div>
  );
};

export default Search;
