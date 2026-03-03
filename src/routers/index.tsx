import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/layout";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="create-event" element={<h1>Create</h1>} />
          <Route path="details-event/:id" element={<h1>Details</h1>} />
          <Route path="*" element={<h1>Não encontrado</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
