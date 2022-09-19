import { NextApiRequest, NextApiResponse } from 'next';
import { getPublicBookmarks } from '../../../../db/dbActions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  try {
    switch (method) {
      case 'GET': {
        const bookmarks = await getPublicBookmarks();
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
