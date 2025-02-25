import { useEffect } from "react";
import Routes from "./shared/Routes";
import useUserStore from "./zustand/userStorage";
import { useState } from "react";

function App() {
  const { checkAuth } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 ">
        ...loading
      </div>
    );
  }
  return <Routes />;
}

export default App;
