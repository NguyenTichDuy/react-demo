import { Route, Routes as RouterList } from "react-router-dom";
import Home from "Pages/home";

const Routers = () => {
  return (
    <RouterList>
      <Route path="/" element={<Home />} />
    </RouterList>
  );
};

export default Routers;
