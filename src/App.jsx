import {} from "react";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Settings from "./components/Settings/Settings";
import Web from "./components/Web/Web";
import Mobile from "./components/Mobile/Mobile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Men from "./components/Men/Men";
import AllProducts from "./components/AllProducts/AllProducts";
import Jewelery from "./components/Jewelery/Jewelery";
import Electronics from "./components/Electronics/Electronics";
import Women from "./components/Women/Women";

function App() {
  const routs = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
          children: [
            { path: "", element: <AllProducts /> },
            { path: "men", element: <Men /> },
            { path: "jewelery", element: <Jewelery /> },
            { path: "electronics", element: <Electronics /> },
            { path: "women", element: <Women /> },
          ],
        },
        {
          path: "about",
          element: (
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          ),
        },
        {
          path: "product-details/:id",
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "contact",
          element: (
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },

        {
          path: "settings",
          element: (
            <ProtectedRoutes>
              <Settings />
            </ProtectedRoutes>
          ),
          children: [
            { path: "", element: <Web /> },
            { path: "mobile", element: <Mobile /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
    </>
  );

  /*   let [count, setCount] = useState(10);
  let [userName, setUserName] = useState("iti");


    useEffect(() => {
      
    }, []);


    useLayoutEffect(()=>{
      
    })



  useEffect(() => {
    //component did mounted
    console.log("component did mount");
  }, []);




  useEffect(() => {
    //component did mounted
    console.log("count changed");
  }, [count]);


  useEffect(() => {
    //component did mounted
    console.log("name changed");
  }, [userName]);

  function changigng() {
    setCount(Math.random() * 100);
  }

  function changeName() {
    setUserName("kasem");
  }

  return (
    <>
          <div className="container">
        <h1 className="text-white">{userName}</h1>
        <h1 className="text-white">{count}</h1>
        <button className="btn btn-primary m-2" onClick={changigng}>
          change count
        </button>
        <button className="btn btn-primary m-2" onClick={changeName}>
          change name
        </button>
      </div>
      <ProductItem></ProductItem> 
    </>
  );
   */
}

export default App;
