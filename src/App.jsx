import AuthProvider from "./context/AuthProvider";
import Routes from "./shared/Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
