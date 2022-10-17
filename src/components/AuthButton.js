import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import './AuthButton.css'

const SignInButton = () => (
  <button className="ms-auto btn btn-dark float-end" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark float-end" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

export default AuthButton;