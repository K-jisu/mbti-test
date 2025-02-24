import { useEffect } from "react";
import Routes from "./shared/Routes";
import useUserStore from "./zustand/userStorage";

function App() {
  const { checkAuth } = useUserStore();
  useEffect(() => {
    checkAuth();
  }, []);
  return <Routes />;
}

export default App;
