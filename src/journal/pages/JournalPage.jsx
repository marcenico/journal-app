import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
