import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgrammingPage from "./pages/ProgrammingPage";
import CovidPage from "./pages/CovidPage";
import BookmarkPage from "./pages/BookmarkPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
