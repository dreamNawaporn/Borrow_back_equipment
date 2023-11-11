// main.jsx
import React from 'react';
//import ReactDOM from './components';// นำเข้า component หลักของแอปพลิเคชัน
import ReactDOM from 'react-dom/client'
import App from './App';


// Render คอมโพนเนนต์หลักของแอปพลิเคชันไปยัง element ที่มี id เป็น "root" ใน HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default main
