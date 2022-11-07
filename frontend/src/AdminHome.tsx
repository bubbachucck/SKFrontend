
import { Grid, Box, Typography} from '@mui/material';
import { FC } from 'react';
import AdminLayout from './layouts/AdminLayout';



export const AdminHome : FC = () => {

  return (
    <AdminLayout>
      <Grid container justifyContent="center" sx = {{paddingTop: 10}}>
        <Grid item xs={10}>
          <Box>
            <Typography>Recently Edited</Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Typography>Recently Created</Typography>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default AdminHome;