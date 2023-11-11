import { useState } from 'react';
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function App() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="itborrow/src/img/1.png"
          alt="earphones"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Earphones
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1. หูฟังครอบหู Blue Box รุ่น BB001  2. หูฟังครอบหู PHILIPS รุ่น TAH1205Bk
            3. หูฟังครอบหู Sony รุ่น WH-CH510  4. หูฟังครอบหู Baseus รุ่น H1i Hybrid
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          อ่านรายละเอียด
        </Button>
      </CardActions>
    </Card>
  );
}



//import { useState } from 'react'
//import './App.css'

//function App() {
//  const [count, setCount] = useState(0)

//  return (
//    <>
//      <div>
//        <a href="https://vitejs.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>ยืมอุปกรณ์ IT</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}

export default App
