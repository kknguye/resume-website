import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import 'boxicons/css/boxicons.min.css';

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
  ],
  { basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
