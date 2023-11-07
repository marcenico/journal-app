import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50,
          transition: 'all 0.3s ease'
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      {/* <NoteView /> */}
    </JournalLayout>
  );
};
