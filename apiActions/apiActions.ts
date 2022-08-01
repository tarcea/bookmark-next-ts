const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getBookmarks = async () => {
  try {
    const response = await fetch(`api/bookmarks`);
    const bookmarks = await response.json();

    return bookmarks;
  } catch (err) {
    console.log(err);
  }
};

export const createBookmark = async (bookmark: Bookmark) => {
  try {
    await fetch(`api/bookmarks`, {
      body: JSON.stringify(bookmark),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBookmark = async (id: string) => {
  try {
    await fetch(`api/bookmarks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
