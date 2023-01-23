import { useAuth } from "../context/authContext";

const Home = props => {
    const { user, logout, isLoading } = useAuth()
    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error(error)
        }
    }
    if(isLoading) return <h1>loading...</h1>
    return (
        <div>
            <h1>Welcome {user?.email}</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Home;