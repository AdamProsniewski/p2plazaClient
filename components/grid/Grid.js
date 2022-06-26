
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Messages from '../messages/Messages';
import { Grid } from '@mui/material';
import AlignItemsList from '../leftGrid/leftGrid';
import BasicList from '../rightGrid/rightGrid';
//import './Grid.css'


export default function Grid2(props){
    return(
        <>
<Grid container spacing={3}>

<Grid item xs={3}>
  <div className='Sticky'> 

  <AlignItemsList/>
  </div>
</Grid>

<Grid item xs={6}>
  <Messages/>
</Grid>

<Grid item xs={3}>
  <div className='Sticky'>

  <BasicList/>
  </div>
</Grid>

</Grid>
</>)}