const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getBookmarks = async () => {
  try {
    const response = await fetch(`${apiUrl}/bookmarks`);
    const bookmarks = await response.json();

    return bookmarks;
  } catch (err) {
    console.log(err);
  }
};

export const createBookmark = async (bookmark: Bookmark) => {
  try {
    await fetch(`${apiUrl}/bookmarks`, {
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
    await fetch(`${apiUrl}/bookmarks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
