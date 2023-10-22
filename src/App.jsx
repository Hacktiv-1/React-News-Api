import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgrammingPage from "./pages/ProgrammingPage";
import CovidPage from "./pages/CovidPage";
import BookmarkPage from "./pages/BookmarkPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import FooterText from "./components/footer/footertext";
import TitlePage from "./components/title/Titletext";
function App() {
  return (
    <>
      <Navbar />
      <TitlePage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
      </Routes>
      <FooterText />
    </>
  );
}

export default App;
