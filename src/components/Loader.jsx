import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
