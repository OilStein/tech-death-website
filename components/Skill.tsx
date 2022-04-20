import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from '../components/Rating'

interface Props {
  logo: string;
  name: string;
  level: number;
  link: string;
  description: string;
}

const Skill: React.FC<Props> = ({ logo, name, level, link, description }) => {
  const [open, setOpen] = useState(false);

  const handle = () => {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className="flex">
      <Image
        src={`/public/assets/logos/${logo}`}
        width={25}
        height={25}
        alt={name}
      />
      <div>
        <h3>{name}</h3>
        <Rating level={level}/>
      </div>
      {open ? (
        <div>
          <p>{description}{link}</p>
        </div>
      ) : (
        <></>
      )}
      <div>
        <button onClick={handle}>open</button>
      </div>
    </div>
  );
};

export default Skill;
