import { useAuth } from "../context/authContext";

const Home = (props) => {
  const { user, logout, isLoading } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">Welcome {user?.email}</h1>
        <button
          onClick={handleLogout}
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
