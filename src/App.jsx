import { useState } from "react";
import NewPage from "./pages/NewsPages";
import NewsFeed from "./components/NewsFeed";
import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router";

function App() {
  return (
    <>
      <NewPage />
      <Routes>
        <Route path="/newsfeed" element={<NewsFeed />} />
      </Routes>
    </>
  );
}

export default App;
