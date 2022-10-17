import { useAuthState } from "../utilities/firebase";

const Banner = ({ title }) => {
    const [user] = useAuthState();
    return (
        <div>
            <h1 style={{padding: 3}}>{title}</h1>
            {user ? <h5>Welcome, {user.displayName}</h5> : <h5>hi, guest</h5>}
        </div>
         )
}

export default Banner;