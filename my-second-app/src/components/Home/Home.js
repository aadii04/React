import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Toast from 'react-bootstrap/Toast';


const Home = (props) => {
  return (
    <>
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    </>
  );
};

export default Home;
