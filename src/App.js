import { Provider } from "react-redux";
import AppRouter from "./components/globalUI/AppRouter";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </>
  );
}

export default App;
