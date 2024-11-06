import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SearchVideoPage } from './pages/search.jsx';
import { VideoPage } from './pages/video.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchVideoPage/>
  },
  {
    path:'/:id',
    element:<VideoPage/>
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>,
  <RouterProvider router={router} />
)