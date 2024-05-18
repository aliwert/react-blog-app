import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <AppRouter />
          <Footer />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
