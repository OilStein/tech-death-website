import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

const connect = async () => {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
};

class Blog extends Entity {}

let schema = new Schema(Blog, {
  title: { type: "string" },
  text: { type: "string" },
},
{
  dataStructure: 'JSON'
});

interface Props {
  data: {
    title: string,
    text: string
  }
}

export const createBlog = async (data: any) => {
  console.log(typeof data);
  await connect()
  // @ts-ignore
  const repository = client.fetchRepository(schema)
  const blog = repository.createEntity(data);
  const id = await repository.save(blog);
  return id;

}

export const createIndex = async () => {
  await connect();

  // @ts-ignore
  const repository = new Repository(schema, client);
  await repository.createIndex()
}
 
export const getAllBlogs = async () => {
  await connect()

  // @ts-ignore
  const repository = new Repository(schema, client)

  const blogs = await repository.search().return.all()

  return blogs
}