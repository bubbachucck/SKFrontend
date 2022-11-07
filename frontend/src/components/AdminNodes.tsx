
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import AdminLayout from '../layouts/AdminLayout';

function AdminNodes() {
  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx={{ paddingTop: 10 }}>
        <Grid item xs={10}>
          <Box>
            <Typography>List of All Nodes</Typography>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminNodes;
