
import { Box, Button, Typography } from '@mui/material';
import AdminLayout from '../layouts/AdminLayout';

function AdminOutputTables() {
  return (
    <AdminLayout>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography>List of All Output Tables</Typography>
        <Button>New Output Table</Button>
      </Box>
      <Typography>Grouped by Disclosure Scale</Typography>

      <Typography mt={2}>Full Scale Disclosure</Typography>
      <Typography mt={2}>Scaled Down Disclosure</Typography>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography>Output Table Name</Typography>
        <Typography>Disclosure Scale</Typography>
        <Typography>Required</Typography>
        <Typography>Ancillary To</Typography>
        <Typography>Actions</Typography>
      </Box>
    </AdminLayout >
  );
}

export default AdminOutputTables;
