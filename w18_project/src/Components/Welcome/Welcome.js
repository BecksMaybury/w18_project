import { fiveWaysArray } from "../FiveWaysDisplay/fiveWaysText"

function Welcome () {

    return(

        <div >
        <p className="text-display">{fiveWaysArray[6].text}</p>
        <p className="sign-in-reminder">Sign in to be able to log your progress!</p>
  </div>
    )


}

export default Welcome