import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './conponents/Home/Home';
import Register from './conponents/Register/Register';
import Login from './conponents/login/Login';
import PrivateRoutes from './routes/PrivateRoutes';
import Orders from './conponents/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Main></Main>,
      children : [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path :'/orders',
          element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element : <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
