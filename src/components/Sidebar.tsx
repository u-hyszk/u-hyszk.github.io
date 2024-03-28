import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';


interface SidebarProps {
  interests: string[];
  hobbys: ReadonlyArray<{
    icon: React.ElementType;
    description: string;
  }>;
  miscs: string[];
}

export default function Sidebar(props: SidebarProps) {
  const { interests , hobbys, miscs } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom> Interests </Typography>
        <List>
          {interests.map((interest) => (
            <ListItem>{interest}</ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}> Hobbys </Typography>
        <List>
          {hobbys.map((hobby) => (
            <ListItem>
              <Stack direction="row" spacing={1} alignItems="center">
                <hobby.icon />
                <span>{hobby.description}</span>
              </Stack>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}> Miscs </Typography>
        <List>
          {miscs.map((misc) => (
            <ListItem>{misc}</ListItem>
          ))}
        </List>
      </Paper>

    </Grid>
  );
}