import React from "react";
import { Routes, Route } from "react-router-dom";
import EditMusicRecord from "./EditMusicRecord";
import HomePage from "./HomePage";
import Login from "./Login";
import MusicRecords from "./MusicRecords";
import SingleMusicRecord from "./SingleMusicRecord";
import RequireAuth from "../Components/RequireAuth";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/music/:id"
          element={
            // a component that takes another component as a argunent is a higer order component thats why requireAuth is a higher order component
            <RequireAuth>
              <SingleMusicRecord />
            </RequireAuth>
          }
        />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
