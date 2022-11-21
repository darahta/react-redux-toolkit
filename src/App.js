import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import useApi from "./hooks/useApi";
import Home from "./pages/home";
import Login from "./pages/login";
import { setAppData } from "./redux/appDataSlice";
import { setCategory } from "./redux/categorySlice";

function App() {
   const appDataState = useSelector((state) => state.appData);
   const authState = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const api = useApi();

   useEffect(() => {
      api.get("public/categories/listMainCategories")
         .then((response) => {
            dispatch(setCategory(response.data.data));
         })
         .catch((err) => {});
   }, []);

   if (authState.token && !appDataState) {
      api.get("user/appData")
         .then((response) => {
            dispatch(setAppData(response.data.data.user));
         })
         .catch((error) => {
            console.log("err", error);
         });
   }

   return (
      <div class="container py-3">
         <Header />
         <HashRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="category/:slug" element={<Login />} />
            </Routes>
         </HashRouter>
         <Footer />
      </div>
   );
}

export default App;
