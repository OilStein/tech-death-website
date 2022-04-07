



const Rating = () => {
    return (
      <div className="flex">
        {[...Array(5)].map((skull, i) => {
          const value = i + 1
          return (
            <label key={i}>
              <input type="radio" name="rating" className="hidden"/>
            </label>
          )
        })}
      </div>
    )
}

export default Rating