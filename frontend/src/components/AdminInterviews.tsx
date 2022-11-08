import { Grid, Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminLayout from "../layouts/AdminLayout";

const getAllInterviews = () => {
  return [
    { interivewId: "1", title: "Interview 1", sectionName: "Section 1", department: "Human Resources" },
    { interivewId: "2", title: "Interview 2", sectionName: "Section 1", department: "Human Resources" },
    { interivewId: "2", title: "Interview 1", sectionName: "Section 2", department: "Human Resources"},
    { interviewId: "3", title: "Interview 1", sectionName: "Section 3", department: "Human Resources" },
  ];
};

interface InterviewInterface {
  interviewId?: string;
  title: string;
  sectionName: string;
  department: string;
}

interface InterviewInterfaces {
  InterviewInterfaces: InterviewInterface[] | undefined;
}

interface SectionMap {
  sectionMap: Map<string, InterviewInterface[] | undefined>;
}

export const Sections: React.FC<SectionMap> = (props) => {
  let sections = Array.from(props.sectionMap.keys());
  console.log(props.sectionMap, "sec ...");
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
              <Interviews
                InterviewInterfaces={props.sectionMap.get(section)}
              ></Interviews>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export const Interviews: React.FC<InterviewInterfaces> = (
  InterviewInterfaces
) => {
  let headers = InterviewInterfaces.InterviewInterfaces;
  return (
    <>
      {headers?.map((header) => (
        <div>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", paddingTop: 2 }}>
            <Typography>{header.title}</Typography>
            <Typography>{header.department}</Typography>
            <Box>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>Show</Button>
                <Button>Edit</Button>
                <Button>Destroy</Button>
              </ButtonGroup>
            </Box>
          </Box>
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
    new Map<string, InterviewInterface[] | undefined>()
  );

  React.useEffect(() => {
    const interviews = getAllInterviews();

    // const interviewsPerSection = interviews.reduce((accumulator: any, interview) => {
    //   const sectionName = interview.sectionName;
    //   if (accumulator[sectionName]) {
    //     accumulator[sectionName].push(interview)
    //   } else {
    //     accumulator[sectionName] = [interview]
    //   }
    //   return accumulator;
    // }, {})

    const sectionMapHolder = new Map<
      string,
      InterviewInterface[] | undefined
    >();

    for (let i = 0; i < interviews.length; i++) {
      let header = interviews[i];
      let sectionName = header.sectionName;
      if (sectionMapHolder.has(sectionName)) {
        let sectionHeaders = sectionMapHolder.get(sectionName);
        sectionHeaders?.push(header);
        sectionMapHolder.set(sectionName, sectionHeaders);
      } else {
        sectionMapHolder.set(sectionName, [header]);
      }
    }

    setSectionMap(sectionMapHolder);
  }, []);

  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
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
