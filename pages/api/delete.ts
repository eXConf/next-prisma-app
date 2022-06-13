import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.body;

    if (!id) {
      res.json({ error: 'You should specify user ID' });
      return;
    }
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}
