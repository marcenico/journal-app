import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';

export const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);
  const { body, date, title, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Add a title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};
