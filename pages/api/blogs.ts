import { createBlogPost } from "../../components/Blog/redis"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = await createBlogPost(req.body)

  res.status(200).json({id})

}

export default handler