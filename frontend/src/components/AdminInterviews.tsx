import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Box,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import { Navigation } from "./Navigation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminLayout from "../layouts/AdminLayout";

const getAllInterviews = () => {
  return [
    { interivewId: "1", title: "Interview 1", sectionName: "Section 1" },
    { interivewId: "2", title: "Interview 1", sectionName: "Section 2" },
    { interviewId: "3", title: "Interview 1", sectionName: "Section 3" },
  ];
};

interface InterviewHeader {
  interviewId?: string;
  title: string;
  sectionName: string;
}

interface InterviewHeaders {
  interviewHeaders: InterviewHeader[];
}

interface SectionMap {
  sectionMap: Map<string, InterviewHeader[] | undefined>;
}

export const Sections: React.FC<SectionMap> = (map) => {
  let sections = Array.from(map.sectionMap.keys());
  return (
    <>
      {sections.map((section) => (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{section}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <Typography>Interview Name</Typography>
                <Typography>Department</Typography>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button>Show</Button>
                  <Button>Edit</Button>
                  <Button>Destroy</Button>
                </ButtonGroup>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export const Interviews: React.FC<InterviewHeaders> = (interviewHeaders) => {
  let headers = interviewHeaders.interviewHeaders;
  return (
    <>
      {headers.map((header) => (
        <div>
          <Typography></Typography>
        </div>
      ))}
    </>
  );
};

export const InterviewNavItems: React.FC = () => {
  return <React.Fragment></React.Fragment>;
};

export const AdminInterviews: React.FC = () => {
  const [sectionMap, setSectionMap] = React.useState(
    new Map<string, InterviewHeader[] | undefined>()
  );

  React.useEffect(() => {
    const interviews = getAllInterviews();
    const sectionMapHolder = new Map<string, InterviewHeader[] | undefined>();

    for (let i = 0; i < interviews.length; i++) {
      let header = interviews[i];
      let sectionName = header.sectionName;
      if (sectionMapHolder.has(sectionName)) {
        let sectionHeaders = sectionMapHolder.get(sectionName);
        sectionHeaders?.push(header);
        sectionMapHolder.set(sectionName, sectionHeaders);
      } else {
        sectionMapHolder.set(sectionName, []);
      }
    }

    setSectionMap(sectionMapHolder);
  }, []);

  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx = {{paddingTop: 10}}>
        <Grid item xs={10}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <Typography>List of Interviews</Typography>
            <Typography></Typography>
            <Button>Create Interview</Button>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <Typography>Grouped By Section</Typography>
            <Typography>Department</Typography>
            <Typography>Actions</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Sections sectionMap={sectionMap} />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default AdminInterviews;
