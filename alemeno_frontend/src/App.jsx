import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Home } from "./pages/home";
import { DetailPage } from "./pages/detailPage";
import Login from "./pages/login";
import { StudentPage } from "./pages/studnet";
import { StudentDetailPage } from "./pages/studentDetailPage";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <StudentPage />
            </PrivateRoute>
          }
        />
      </Routes>

      <Routes>
        <Route path="/student/:id" element={<StudentDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
