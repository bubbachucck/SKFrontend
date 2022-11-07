import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import AdminLayout from "../layouts/AdminLayout";

function AdminCompanies() {
  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
        <Grid item xs={10}>
          <Box>
            <Typography>List of All Companies</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <Typography>Legal Name</Typography>
            <Typography>Common Name</Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Edit</Button>
              <Button>Destroy</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminCompanies;
