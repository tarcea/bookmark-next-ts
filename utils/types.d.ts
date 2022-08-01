interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

type Bookmark = {
  id?: string;
  public?: boolean;
  description: string;
  image: string;
  title: string;
  url: string;
  userId: string;
  createdAt?: date;
  updatedAt?: date;
};

type Query = {
  [key: string]: string;
};

type Props = {
  [key: string]: string;
};

type BookmarkProps = {
  bookmark: Bookmark;
};

type BookmarksProps = {
  bookmarks: Bookmark[];
};
