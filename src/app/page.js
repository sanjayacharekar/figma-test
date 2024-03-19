import Image from "next/image";
import styles from "./page.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container fixed maxWidth='lg'>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', borderRadius: 4 }} >
        <Box padding={4}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap' }}>

              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              <Typography color={'black'} paddingX={2}>4907 - 000019</Typography>
              <Typography color={'black'}>HOTEL/TECH WORK SQUAD GFR</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <Button variant="contained" color="info">Contained</Button>

            </Box>
          </Box>


        </Box>
      </Box>
    </Container>
  );
}
