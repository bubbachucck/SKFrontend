import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const getAllAdminRoutes = () => {
  return [
    { name: "Home", route: routes.HOME },
    { name: "Interviews", route: routes.INTERVIEWS },
    { name: "Nodes", route: routes.NODES },
    { name: "Conditions", route: routes.CONDITIONS },
    { name: "Companies", route: routes.COMPANIES },
    { name: "OutputTables", route: routes.OUTPUT_TABLES },
    { name: "GlossaryTerms", route: routes.GLOSSARY_TERMS },
  ];
};

export const InterviewNavItems: React.FC = () => {
  let navigate = useNavigate();
  const adminRoutes = getAllAdminRoutes();
  return (
    <>
      {adminRoutes.map((path) => (
        <div>
          <ListItemButton key={path.name} onClick={() => navigate(path.route)}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={path.name} />
          </ListItemButton>
        </div>
      ))}
    </>
  );
};
