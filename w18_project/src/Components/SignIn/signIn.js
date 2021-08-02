
function SignInButton ({onClick, user}) {
    if (!user) {
    return (
    <div>
      <button onClick={onClick}> Sign in with Google</button>
    </div>
    )
  }
      return (
        <div>
          <button onClick={onClick}> Sign Out</button>
        </div>
        )
}
  export default SignInButton