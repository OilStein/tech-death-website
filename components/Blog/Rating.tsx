import { useState } from 'react'
import Skull from '../../svg/skull.svg'

const Rating = () => {
    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

    return (
      <div className="flex mx-6 px-6">
        {[...Array(5)].map((_skull, i) => {
          const rvalue = i + 1
          return (
            <label key={i} className="">
              <input 
                type="radio" 
                name="rating" 
                className="hidden" 
                value={rvalue} 
                onClick={() => setRating(rvalue)} 

              />
              <Skull 
                width="25" 
                height="25" 
                fill={rvalue <= (hover || rating ) ? "yellow" : "white"}       
                onMouseEnter={() => setHover(rvalue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          )
        })}
      </div>
    )
}

export default Rating