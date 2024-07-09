import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Introduction from './components/introduction';
import Stack from './components/stack';
import MyProjects from './components/myprojects';
import Feedback from './components/feedback';
import Promise from './components/promise';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <Stack />
      <MyProjects />
      <Feedback />
      <Promise />
      <Footer/>
    </div>
  );
}

export default App;
