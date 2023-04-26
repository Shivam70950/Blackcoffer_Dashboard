import React from 'react'
import './style.css'
import { Typography, Button, CardContent, CardActions, Card } from '@mui/material';

import { BsSearch } from 'react-icons/bs';
import { HiLanguage } from 'react-icons/hi2';
import { MdOutlineNightlight } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { IoIosNotificationsOutline } from 'react-icons/io';


import { ColorRing } from 'react-loader-spinner'


const right = ({ title, loading }) => {
  return (
    <div className='right__section'>
      <div className="search">
        <div className="leftsearch">
          <BsSearch />
          <input type='text' placeholder='Search' />
        </div>
        <div className="rightsearch">
          <HiLanguage />
          <MdOutlineNightlight />
          <RxDashboard />
          <IoIosNotificationsOutline />
          <div className="profile">

          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card1">
          <Card sx={{ width: 435, height: 240 }}>
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                {loading ? <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#000']}
/> : title}
              </Typography>
              <Typography variant="h5" component="div">

              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="card2">
          <Card sx={{ width: 300, height: 240 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">

              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>

        <div className="card3">
          <Card sx={{ width: 300, height: 240 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">

              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default right
