import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Store from './pages/Store'
import Terms from './pages/Terms.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
// import Terms from './pages/Terms.jsx'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Homepage />,
  //     // errorElement: <ErrorPage />,
  //     children: [
  //       // {
  //       //   path: "/about",
  //       //   element: <About />,
  //       // },
  //       // {
  //       //   path: "/products",
  //       //   element: <Products />,
  //       // },
  //       {
  //         path: "/",
  //         element: <Homepage />,
  //       },
  //       {
  //         path: "/products",
  //         element: <Products />,
  //       },
  //     ]
  //   },

  // ]);

  return (
    <>
      {/* <RouterProvider router={router} >
      <Outlet />
  
      </RouterProvider> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/1" element={<ProductDetails />} />
          <Route path="/products/2" element={<ProductDetails />} />
          <Route path="/products/3" element={<ProductDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/termsandconditions" element={<TermsAndConditions/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/refundpolicy" element={<RefundPolicy/>} />
          {/* <Route path="/terms" element={<Terms/>} /> */}
          {/* <Route path="/Blog1" element={<BlogDetail/>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;