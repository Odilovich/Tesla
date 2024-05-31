import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import {ModelS, Model3, ModelX, ModelY, SolarRoof, SolarPanels} from "./pages"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>

      <Route index element={<ModelS/>} />
      <Route path="/model3" element={<Model3/>} />
      <Route path="/modelX" element={<ModelX/>} />
      <Route path="/modelY" element={<ModelY/>} />
      <Route path="/solar-roof" element={<SolarRoof/>} />
      <Route path="/solar-panels" element={<SolarPanels/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
