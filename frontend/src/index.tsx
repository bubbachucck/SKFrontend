import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminHome from "./AdminHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCompanies from "./components/AdminCompanies";
import AdminInterviews from "./components/AdminInterviews";
import AdminOutputTables from "./components/AdminOutputTables";
import AdminGlossaryTerms from "./components/AdminGlossaryTerms";
import AdminNodes from "./components/AdminNodes";
import AdminConditions from "./components/AdminConditions";
import { createTheme, ThemeProvider } from "@mui/material";
import routes from "./routes";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: teal,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={theme}
    >
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<AdminHome />} />
          <Route path={routes.INTERVIEWS} element={<AdminInterviews />} />
          <Route path={routes.NODES} element={<AdminNodes />} />
          <Route path={routes.CONDITIONS} element={<AdminConditions />} />
          <Route path={routes.COMPANIES} element={<AdminCompanies />} />
          <Route path={routes.OUTPUT_TABLES} element={<AdminOutputTables />} />
          <Route
            path={routes.GLOSSARY_TERMS}
            element={<AdminGlossaryTerms />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
