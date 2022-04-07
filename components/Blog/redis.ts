import { Client, Entity, Schema, Repository} from 'redis-om'

const client  = new Client()

const connect = async () => {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class BlogPost extends Entity {}

let schema = new Schema(
  BlogPost,
  {
    owner: {type: 'string'},
    time: {type: 'string'},
    title: {type: 'string'},
    stars: {type: 'number'},
    image: {type: 'string'},
    description: {type: 'string'},
    genres: {type: 'string[]'}
  },
  {
    dataStructure: 'JSON',
  }
)

export const createBlogPost = async (data: Object) => {
  await connect()
  // @ts-ignore
  const repository =  new Repository()

  const blogPost = repository.createEntity(data)

  const id = await repository.save(blogPost)
  return id
}