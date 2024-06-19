
import React from "react";
import './App.css';
import dayjs from 'dayjs';
import {Badge,
  Group,
  Text,
  Container, Title, SimpleGrid, Input, Box, Flex, Mark, Button } from '@mantine/core';
import { Pencil, Line, BoxMultiple, EditCircle, AspectRatio, LetterSpacing, Bold,Square } from 'tabler-icons-react'

import ReactCanvas from '../src/Canvas/react-canvas.js';
import dartboardv7 from '../src/assets/dartboardv7.png';

class App extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <><div style={{boxSizing:'border-box', padding:0,margin:0, height: window.screen.availHeight, display: "flex", flexDirection: 'row',  }}>
        <div className="test" style={{ paddingTop: '20px', width:window.screen.availWidth * (25/100), height: window.screen.availHeight }}>
        <div style={{width: window.screen.availWidth * (23/100), textAlign:'center'}}  >
          <img width={window.screen.availWidth * (23/100)} className="textBox" src={dartboardv7}>
          </img>
        <Text fw={'bold'} p={15} className="textsd" c="violet" style={{width:window.screen.availWidth * (23/100), position:'absolute',top: '8px',
          left: '0px', letterSpacing:'1px', lineHeight:'2' ,borderRadius:'5px', opacity: '1 !important'}}>
            <Mark bg={'black'} c="yellow" pl={5} pr={5} pt={5}>
            Welcome to this painting website application. The window on the center
            is where you will be able to draw. Pen will be the tool used by default.
            You can change tool and color by the selections on the bottom portion of the canvas.
            Try all tools.
            Enjoy!
            </Mark>
          </Text>
          </div>
        </div>
        <div style={{  display: 'flex', flexDirection: 'column' }}>
          <div id="canvasRenderer" style={{ height: window.screen.availHeight * (70/100), width:window.screen.availWidth * (75/100) }}>
          <ReactCanvas/> 
          </div>
          <div className="itemsdown" style={{ height: window.screen.availHeight * (30/100) ,display: 'flex',  alignContent:'center', alignItems:'flex-start'}}>
          <Button id="clear" c={'gray'} variant="outline" style={{border:'solid 1px white'}}> Clear Screen</Button>
          <Container w="28%" mt={'xl'} p={0} style={{display: 'flex', justifyContent:'flex-end'}}>
            <div style={{border: 'dashed 1px gray', height: '36px'}}>
            <Pencil
              id="pen"
              size={34}
              strokeWidth={2}
              color={'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
              bg={'white'}
            />
            <Line
              id="line"
              size={34}
              strokeWidth={2}
              color={'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
            />
            <AspectRatio
              id="box"
              size={34}
              strokeWidth={2}
              color={'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
            />
            <EditCircle
              id="circle"
              size={34}
              strokeWidth={2}
              color={'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
            />
            </div>
            </Container>
            <Container mt={'sm'} p={5} style={{border: '', display: 'flex', flexDirection:'column', background:'#F0BBDD', gap: ''}}>
            <div style={{display:'flex', gap: 2}}> 
            <Square
              id="red"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'red'}}
            />
            <Square
              id="pink"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'pink'}}
            />
            <Square
              id="Orange"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Orange'}}
            />
            <Square
              id="Yellow"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Yellow'}}
            />
            </div>
            <div style={{display: 'flex', gap: 2, paddingTop:2}}>
            <Square
              id="Purple"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Purple'}}
            />  
            <Square
              id="Green"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Green'}}
            />
            <Square
              id="Blue"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Blue'}}
            />
            <Square
              id="Brown"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Brown'}}
            />
            </div>
            </Container>
          </div>
        </div>

      </div></>
    );
  }
}
export default App;
