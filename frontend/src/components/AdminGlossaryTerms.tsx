
import { Box, Grid, Typography } from '@mui/material';
import AdminLayout from '../layouts/AdminLayout';

function AdminGlossaryTerms() {
  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
        <Grid item xs={10}>
          <Box>
            <Typography>List of All GlossaryTerms</Typography>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminGlossaryTerms;
