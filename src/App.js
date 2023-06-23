import { Fragment, useState } from "react";

import Header from "./BaseComponents/Header";

import NarrowNav from "./BaseComponents/NarrowNav";
import Design from "./Pages/Design";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import StoreController from "./Store";
import Config from "./Pages/Config";
import ModalContainer from "./Modal";
import { HotKeyHandler } from "./HotKeyHandler";



let { store, persistor } = StoreController();
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Provider store={store}>
        <HotKeyHandler />
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <div className="h-full flex">
            <ModalContainer />
            {/* Narrow sidebar */}
            {/* <NarrowNav /> */}
            {/* Content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* <Header /> */}

              <div className="flex flex-col h-full">
                <div className="flex-1 flex">
                  <Routes>
                    <Route path="/design" element={<Design />} />
                  </Routes>
                </div>

       
              </div>

              {/* Main content */}

              {/* End MainContent  */}
            </div>
          </div>
        </Router>

        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
