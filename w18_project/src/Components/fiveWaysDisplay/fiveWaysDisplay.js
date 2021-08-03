import { fiveWaysArray } from "./fiveWaysText"

function FiveWaysDisplay () {
 return (
  <div>
    {fiveWaysArray.map((way) => (
        <p>{way.text}</p>))}
  </div>
 )
}

export default FiveWaysDisplay
