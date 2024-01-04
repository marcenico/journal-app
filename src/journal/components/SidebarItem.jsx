import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SidebarItem = ({ body, date, id, imageUrls = [], title }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 16 ? title.substring(0, 16) + '...' : title;
  }, [title]);

  const onClickNote = () => {
    dispatch(setActiveNote({ body, id, imageUrls, title, date }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
