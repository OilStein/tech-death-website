import { createBlog } from "../../lib/redis";

const handler = async (req: any, res: any) => {
  const id = await createBlog(req.body);

  res.status(200).json({ id });
};

export default handler;
