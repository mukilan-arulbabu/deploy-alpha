import React from 'react';
import { Typography } from '@material-ui/core';

const footer = () => (
  <footer style={{ minHeight: '100px', padding: '0 10px', background: 'black', color: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Typography variant="body2" gutterBottom>
       (+91) 9176348700
    </Typography>
    <Typography variant="body2" gutterBottom>
    sales@alphabiotech.com
    </Typography>
    <Typography variant="body2" gutterBottom>
    © 2020 AlphaBiotech. All Rights Reserved.
    </Typography>
  </footer>
);

export default footer;