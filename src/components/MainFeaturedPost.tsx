import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

interface MainFeaturedPostProps {
  post: {
    affiliation: string;
    specialized: string;
    grade: string;
    image: string;
    imageText: string;
    title: string;
  };
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post, social } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 25%',
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 17 },
              pr: { md: 12 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" fontWeight={'bold'} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.affiliation}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.specialized}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.grade}
            </Typography>
            {social.map((network) => (
              <Link
                display="block"
                variant="body1"
                href={network.url}
                key={network.name}
                sx={{
                  mb: 0.5,
                  color: 'inherit',
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <network.icon />
                  <span>{network.name}</span>
                </Stack>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}