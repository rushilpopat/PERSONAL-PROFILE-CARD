import ProfileCard from './ProfileCard.jsx';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div>
      <ProfileCard 
        name="Lakshya jivani"
        bio="I'm a passionate Web Developer with experience in creating dynamic, user-friendly websites and applications. Skilled in HTML, CSS, JavaScript, and React, I enjoy turning ideas into interactive digital solutions." 
        image="photo_1.jpeg" 
      />
    </div>
  );
};

export default App;