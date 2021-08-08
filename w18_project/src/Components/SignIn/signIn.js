
import logIn from "../../images/logIn.png"

function SignInButton ({onClick, user, name}) {
    if (!user) {
    return (
    <div>
      <submit  className="sign-in-button" onClick={onClick}> <img className="sign-in-button" src={logIn} alt="log-out"/> Sign in with Google</submit>
    </div>
    )
  }
      return (
        <div>
          <submit className="sign-in-button" onClick={onClick}> <img className="sign-in-button" src={logIn} alt="log-in"/>{name}</submit>
        </div>
        )
}
  export default SignInButton