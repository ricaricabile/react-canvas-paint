
import React from "react";
import './App.css';
import dayjs from 'dayjs';
import {Badge,
  Group,
  Text,
  Container, Title, SimpleGrid, Input } from '@mantine/core';
import Footer from './footer.component.jsx';
class App extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div style={{textAlign:"center"}}>
        React Canvas Paint
        <Footer/>
      </div>
    );
  }
}
export default App;
