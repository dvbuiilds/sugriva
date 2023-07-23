import AppRouter from "./components/globalUI/AppRouter";
import { UserAuthState } from "./components/context/UserAuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <UserAuthState>
                    <AppRouter/>
                </UserAuthState>
            </Provider>
        </>
    );
}

export default App;
