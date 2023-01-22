import { useAuth } from "../context/authContext";

const Home = props => {
    const {user} = useAuth()
    console.log("🚀 ~ file: Home.jsx:5 ~ Home ~ user", user)
    return (
        <h1>Home</h1>
    )
}

export default Home;