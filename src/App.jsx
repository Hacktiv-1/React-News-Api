import { Route, Routes } from "react-router-dom";
import ProgrammingPage from "./pages/programmingPage";
import HomePage from "./pages/homePage";
import CovidPage from "./pages/CovidPage";
import BookmarkPage from "./pages/BookmarkPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
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
