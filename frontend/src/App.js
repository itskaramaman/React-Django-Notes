import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="conatiner">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
