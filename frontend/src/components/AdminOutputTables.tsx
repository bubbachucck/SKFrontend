
import { Box, Button, Grid, Typography } from '@mui/material';
import AdminLayout from '../layouts/AdminLayout';

function AdminOutputTables() {
  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
        <Grid item xs={10}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <Typography>List of All Output Tables</Typography>
            <Typography></Typography>
            <Button>New Output Table</Button>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Typography>Grouped by Disclosure Scale</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            <Typography>Output Table Name</Typography>
            <Typography>Disclosure Scale</Typography>
            <Typography>Required</Typography>
            <Typography>Ancillary To</Typography>
            <Typography>Actions</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Typography>Full Scale Disclosure</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Typography>Scaled Down Disclosure</Typography>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminOutputTables;
