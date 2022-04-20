import Skull from '../public/assets/svg/skull.svg'

interface Props {
  level: number
}

const Rating: React.FC<Props> = ({level}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_skull, i) => {
        <label key={i}>
          <Skull width={15} height={15} fill={i+1 <= level ? "yellow" : "white" }/>
        </label>
      })}
    </div>
  )
}

export default Rating