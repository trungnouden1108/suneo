import './App.css';
import './Card.css'
import './Cake.css'

import Clock from './Components/Clock';
import Progressbar from './Components/Progressbar';
import React, {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pulse from './Components/Pulse';
import Album from './Components/Album';
import suNeo1 from './Static/image/suneo1.gif'
import BirthdayCard from './Components/BirthdayCard';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Confetti from 'react-confetti';
import BirthdayCake from './Components/BirthdayCake';
import useSound from 'use-sound';
import nhac from './Static/image/Suneo.m4a';

function App() {
  const [recycle, setRecycle] = useState(false);
  const [open, setOpen] = useState(false);
  const [cake, setCake] = useState(false);
  const [card, setCard] = useState(false)
  const [play] = useSound(nhac, {volume: 0.25});

  const handleClickOpen = () => {
    play()
    setOpen(true)
    setCake(true)
    setCard(false)
  };

  const handleCardOpen = () => {
    setCake(false)
    setCard(true)

  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfettiOpen = () => {
    setRecycle(true);
  };
  const handleConfettiClose = () => {
    setRecycle(false);
  };
  const [filled, setFilled] = useState(() => {
    const storedValue = localStorage.getItem('filled');
    return storedValue ? parseInt(storedValue) : 3;
  });

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [countDays, setCountDays] = useState(0);

  useEffect(() => {
    localStorage.setItem('filled', filled.toString());
  }, [filled]);
  
  useEffect(() => {
    const scheduleConfetti = () => {
      const targetDate = new Date('January 13, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const timeUntilEvent = targetDate - now;
  
      if (timeUntilEvent > 0) {
        setTimeout(() => {
          handleConfettiOpen();
          setTimeout(() => {
            handleConfettiClose();
            handleClickOpen();
          }, 15000);
        }, timeUntilEvent);
      }
    };
    scheduleConfetti();
  }, []);
  
  useEffect(() => {
    const calculateCountDays = () => {
      const today = new Date();
      console.log("today", today)
      const anniversary = new Date("August 11, 2017");
      const daysCount = Math.ceil((today.getTime() - anniversary.getTime()) / (1000 * 3600 * 24));
      setCountDays(daysCount);

    };
  
    const calculateNextDay = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const timeUntilNextDay = tomorrow.getTime() - now.getTime();

      setTimeout(() => {
        calculateCountDays();
        calculateNextDay();
      }, timeUntilNextDay);
    };
  
    calculateCountDays();
  
    calculateNextDay();
  }, []);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("January 13,2025 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          setFilled(100)
        }
        else if (1 <= days && days <= 154) {
          setFilled(83);
        }
        else if (155 <= days && days <= 337) {
          setFilled(15);
        }
        else if (338 <= days && days <= 365)
        {
          setFilled(6);
        }
      }
    });
  };



  useEffect(() => {
    startTimer();
  });
  return (
    <div style={{backgroundColor: "#ffcad2"}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6}>
              <Clock timerDays={timerDays} timerHours={timerHours} 
                      timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
              <Progressbar
                        filled={filled}
                      />
          </Grid>
          <Grid item md={6}>

            <div className="heart-container" onClick={()=>handleClickOpen()}>
              <div className="heart">
              </div> 
              <div className="content">
              
                <h2>{countDays}</h2>
                <h2>{countDays}</h2>
                <h3>Days</h3>
              </div>
            </div>
          </Grid>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={4} style={{justifyContent: 'flex-end', display: 'flex'}}>
                <img src={suNeo1} alt="text" width={'50%'} height={'80%'}></img>
              </Grid>
              <Grid item md={4} style={{alignItems: 'center', display: 'flex'}}>
                <Pulse />
              </Grid>
              <Grid item md={4} style={{justifyContent: 'flex-start', display: 'flex'}}>
                <img src={suNeo1} alt="text" width={'50%'} height={'80%'} style={{marginLeft: '10px'}}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <div className="photo-frame">
              <Album/>
            </div>
          </Grid>
        </Grid>
        
      </Box>
     
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="xl"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent style={{height: '800px'}}>
          
          {card && <BirthdayCard />}
          {cake && <div className="cake-container">
            <BirthdayCake handleOpen={handleCardOpen}/>
          </div>
          }
          
        </DialogContent>
      </Dialog>
       <Confetti
        width={'1200px'}
        height={'2000px'}
        recycle={recycle}
      />
    </div>
  );
}

export default App;

// References
// https://www.youtube.com/watch?v=RntAkeaTvsM
// https://www.youtube.com/watch?v=RwlFyS1Rhew&t=13s
// https://www.youtube.com/watch?v=Ar3wcKVQ2Po&t=232s
// https://www.youtube.com/watch?v=AJ0rxIhcEiw
