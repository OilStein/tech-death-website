import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

const connect = async () => {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
};

class Skill extends Entity {}

let schema = new Schema(Skill, {
  name: { type: "string" },
  logo: { type: "string" },
  level: { type: "number" },
  link: { type: "string" },
  description: { type: "string" },
},
{
  dataStructure: 'JSON'
});

interface Props {
  data: {
    name: string,
    logo: string,
    level: number,
    link: string,
    description: number
  }
}

export const createSkill = async (data: any) => {
  await connect()
  // @ts-ignore
  const repository = client.fetchRepository(schema)
  const skill = repository.createEntity(data);
  const id = await repository.save(skill);
  return id;

}

export const createIndex = async () => {
  await connect();

  // @ts-ignore
  const repository = new Repository(schema, client);
  await repository.createIndex()
}
 
export const getAllSkills = async () => {
  await connect()

  // @ts-ignore
  const repository = new Repository(schema, client)

  const skills = await repository.search().return.all()

  return skills
}