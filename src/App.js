import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
   return (
      <div class="container py-3">
         <Header />
         <HashRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path="login" element={<Login />} />
            </Routes>
         </HashRouter>
      </div>
   );
}

export default App;
