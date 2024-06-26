
import { Provider } from 'react-redux';
import Body from './components/Body';
import "./App.css";
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
const App = () => {
  
  return (
   
  <Provider store={store}>
  <div>
    
      <Head/>
      <RouterProvider router={appRouter}></RouterProvider>
     </div>
    </Provider>
  )
}

export default App