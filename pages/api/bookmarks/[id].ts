import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteBookmark,
  getBookmarkById,
  updateBookmark,
} from '../../../db/dbActions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as Query;
  const { description, image, title, url, userId } = req.body;
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  try {
    switch (method) {
      case 'GET': {
        const bookmark = await getBookmarkById(id);
        !bookmark
          ? res.status(400).json({ message: 'no bookmark found' })
          : res.status(200).json(bookmark);
        break;
      }
      case 'PUT': {
        const bookmark = await updateBookmark(id, req.body);
        !bookmark
          ? res.status(400).json({ message: 'no bookmark found' })
          : res.status(200).json(bookmark);
        break;
      }
      case 'DELETE': {
        const bookmark = await deleteBookmark(id);
        !bookmark
          ? res.status(400).json({ message: 'no bookmark found' })
          : res.status(200).json(bookmark);
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
