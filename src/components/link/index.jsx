import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function LinkProfile({ linkName, href }) {
    return (
      <Link
        href={href}
        sx={{
          background: 'linear-gradient(90deg, rgba(0,85,152,1) 0%, rgba(13,111,221,1) 35%, rgba(0,171,205,1) 100%)',
          color: 'white',
          my: 1,
          borderRadius: 3,
          width: 150,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          mx: 1
        }}
      >
        {linkName}
      </Link>
    );
  }
