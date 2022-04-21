import { createIndex } from "../../lib/redis";

const handler = async (req: any, res: any) => {
  await createIndex();
  res.status(200).send("OK");
};

export default handler;
