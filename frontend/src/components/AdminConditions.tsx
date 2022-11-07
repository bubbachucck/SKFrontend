
import { Box, Grid, Typography } from '@mui/material';
import AdminLayout from '../layouts/AdminLayout'

function AdminConditions() {
  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
        <Grid item xs={10}>
          <Box>
            <Typography>List of All Conditions</Typography>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminConditions;
