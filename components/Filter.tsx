import { ChangeEvent } from 'react';

const Filter = ({ filterOption, setFilterOption }: any) => {
  const handleFilterChange = (e: any) => {
    setFilterOption(e.target.value);
  };

  return (
    <div>
      <form>
        <select
          name='filter'
          id='filter'
          value={filterOption}
          onChange={handleFilterChange}
        >
          <option value='all bookmarks'>all bookmarks</option>
          <option value='my bookmarks'>my bookmarks</option>
          <option value='my public bookmarks'>my public bookmarks</option>
          <option value='my private bookmarks'>my private bookmarks</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
