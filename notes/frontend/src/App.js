import { Routes, Route } from "react-router-dom";

import "./App.css";

// Import components here
import Header from "./components/Header";

// Import pages here
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
