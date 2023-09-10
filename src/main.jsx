import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from "react-animated-cursor"

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LLBGPT from './components/LLBGPT.jsx';
import DocDrafter from './components/DocDrafter.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/LLBGPT",
    element: <LLBGPT />
  },
  {
    path: "/DocDrafter",
    element: <DocDrafter />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={50}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={1.5}
      outerScale={2.25}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: 'exclusion',
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
