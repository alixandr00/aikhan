import { Forma } from "./components/landing/forma/Forma";
import { Layout } from "./layout/Layout";
// import { Main1 } from "./components/landing/main1/Main1";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./components/admin/AdminPage";
import { Lessons } from "./components/landing/lessons/Lessons";

function App() {
  return (
    <Routes>
      <Route path="/" connect element={<Layout />} />
      <Route path="admin-page" element={<AdminPage />} />
      <Route path="login" element={<Forma />} />
      <Route path="videos" element={<Lessons />} />
    </Routes>
  );
}

export default App;
