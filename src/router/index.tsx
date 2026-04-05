import { Route, Routes as RouterList } from "react-router-dom";
import Home from "Pages/home";
import Women from "Pages/women";
import Men from "Pages/men";
import Sale from "Pages/sale";
import About from "Pages/about";
import Contact from "Pages/contact";
import NotFound from "Pages/not-found";
import ChecklistBlockerPage from "Pages/checklist-blocker";

const Routers = () => {
  return (
    <RouterList>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checklist-blocker" element={<ChecklistBlockerPage />} />
      <Route path="*" element={<NotFound />} />
    </RouterList>
  );
};

export default Routers;
