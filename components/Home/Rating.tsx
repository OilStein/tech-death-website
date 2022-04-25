import Skull from "../../public/assets/svg/skull.svg";

interface Props {
  level: number;
}

const Rating: React.FC<Props> = ({ level }) => {
  return (
    <div className="flex justify-center gap-2">
      {[...Array(5)].map((_skull, i) => {
        const value = i + 1;
        return (
          <div key={i}>
            <Skull
              width={24}
              height={24}
              fill={value <= level ? "yellow" : "white"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
