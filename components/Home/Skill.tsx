import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from "./Rating";

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
  };

  return (
    <div className="flex border-2">
      <div className="h-20 w-20 border-r-2 p-2">
        <Image
          src={`/assets/logos/${logo}`}
          width={100}
          height={100}
          alt={name.charAt(0)}
        />
      </div>
      <div className="mx-auto my-auto">
        <h3 className="">{name}</h3>
        <div>
          <Rating level={level} />
        </div>
      </div>
      {open ? (
        <div>
          <p>{description}</p>
        </div>
      ) : (
        <></>
      )}
      <div>
        <button onClick={handle}></button>
      </div>
    </div>
  );
};

export default Skill;
