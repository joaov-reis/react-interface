import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/layout";
import Home from "../pages/home";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="create-event" element={<h1>Create</h1>} />
          <Route path="details-event/:id" element={<h1>Details</h1>} />
          <Route path="*" element={<h1>Não encontrado</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}