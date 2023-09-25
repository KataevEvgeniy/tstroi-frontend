import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, text }) {
  return (
    <Card sx={{ minWidth: 512, minHeight: 200 }}>
      <CardContent>
        <Typography sx={{ marginLeft: 5 }} variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ marginLeft: 5, marginTop: 5 }} variant="body1">
          {text}
        </Typography>
      </CardContent>
      </Card>
      );
    }