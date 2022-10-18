const Banner = ({ title, profile }) => {
    return (
        <div>
            <h1 style={{padding: 3}}>{title}</h1>
            {profile.user ? <h5>Welcome, {profile.user.displayName}</h5> : <h5>Welcome, guest</h5>}
        </div>
         )
}

export default Banner;