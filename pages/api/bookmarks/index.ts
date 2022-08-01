import { NextApiRequest, NextApiResponse } from 'next';
import { createBookmark, getBookmarks } from '../../../db/dbActions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { description, image, title, url, userId } = req.body;
  // const { userId } = req.query as Query;

  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  try {
    switch (method) {
      case 'POST': {
        const bookmark = await createBookmark(req.body);
        res.status(200).json(bookmark);
        break;
      }
      case 'GET': {
        const bookmarks = await getBookmarks();
        res.status(200).json(bookmarks);
        break;
      }
      default: {
        res.status(400).json({ message: 'method not allowed' });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
