import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/layout";
import Home from "../pages/home";
import CreateEvent from "../pages/create-event";
import DetailsEvent from "../pages/details-event";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="create-event" element={<CreateEvent/>} />
          <Route path="details-event/:id" element={<DetailsEvent/>} />
          <Route path="*" element={<h1>Não encontrado</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}