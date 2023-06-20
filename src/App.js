import Labs from "./labs"
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import AuthContext from "./tuiter/user/auth-context";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContext>
          <div className="container">
              <Routes>
                <Route index        element={<Labs/>}/>
                <Route path="/labs/*"   element={<Labs/>}/>
                <Route path="/hello"    element={<HelloWorld/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
            </div>
        </AuthContext>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
