import { prisma } from '../lib/prisma';

export const createBookmark = async (data: Bookmark) => {
  const bookmark = await prisma.bookmark.create({
    data,
  });
  return bookmark;
};

export const getBookmarks = async () => {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
  });
  return bookmarks;
};

export const getBookmarksByUserId = async (userId: string) => {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      userId,
      public: true,
    },
  });
  return bookmarks;
};

export const getPublicBookmarks = async () => {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      public: true,
    },
  });
  return bookmarks;
};

export const getBookmarkById = async (id: string) => {
  const bookmark = await prisma.bookmark.findUnique({
    where: { id },
  });
  return bookmark;
};

export const deleteBookmark = async (id: string) => {
  const bookmark = await prisma.bookmark.delete({
    where: { id },
  });
  return bookmark;
};

export const updateBookmark = async (id: string, data: Bookmark) => {
  const bookmark = await prisma.bookmark.update({
    where: { id },
    data,
  });
  return bookmark;
};
