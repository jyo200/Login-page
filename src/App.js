
import React, { useState } from 'react';
import './components/style.css'
import Form from './components/Form.js';
function App() {
  
    const [showYesNo, setShowYesNo] = useState(true);
  const [showNo,setNo]=useState(true);
    const handleYesClick = () => {
      setShowYesNo(false);
    };
  
    const handleNoClick = () => {
      setNo(false);
      // Handle the 'No' button click here
    };
  
    const handleEditClick = () => {
      // Handle the 'Edit' button click here
    };
  
    return (
      <>
      
        <Form/>
</>
    );
  };


export default App;

