import AppRouter from "./components/globalUI/AppRouter";
import { UserAuthState } from "./components/context/UserAuthContext";

function App() {
  return (
    <>
      <UserAuthState>
        <AppRouter/>
      </UserAuthState>
    </>
  );
}

export default App;
