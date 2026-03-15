import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/layout";
import Home from "../pages/home";
import CreateTicket from "../pages/create-ticket";
import MyTickets from "../pages/my-tickets";
import ContactUs from "../pages/contact-us";
import MyTicketsDetails from "../pages/my-tickets-details";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="create-ticket" element={<CreateTicket/>} />
          <Route path="my-tickets" element={<MyTickets/>} />
          <Route path="my-tickets/my-tickets-details/:id" element={<MyTicketsDetails/>} />
          <Route path="contact-us" element={<ContactUs/>} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}