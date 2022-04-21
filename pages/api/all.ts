import { getAllSkills } from "../../lib/redis";

const handler = async (req: any, res: any) => {
  const skills = await getAllSkills()

  res.status(200).json({ skills });
};

export default handler;
