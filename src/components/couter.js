import React from "react";
import "semantic-ui-css/semantic.min.css";
import {  Grid, Segment } from "semantic-ui-react";
import { useState } from "react";



const Counter=()=>{
    
    const [value, setValue] = useState(0);
    const [disable, setdisable] = useState(false);
    const [disable2, setdisable2] = useState(false);
  
    const increment = () => {
        setdisable(false)
        if (value === 9) {
            setdisable2(true);
            setValue(10);
          } else {
            setdisable2(false);
            setValue(value + 1);
          }
    };
    const decrement = () => {
        setdisable2(false)
        if (value === 0) {
            setdisable(true);
            setValue(0);
          } else {
            setdisable(false);
            setValue(value - 1);
          }
    };
    let color='green'
    if (value >= 5 && value <= 9) {
        color='blue';
      } else if (value === 10) {
        color='red';
      }
    return(
    <Segment>    
      <Grid textAlign="center" >
        <Grid.Column style={{ maxWidth: 350 }}>
            <div className="ui grid segment">
              <div className="row ">
                <div>
                  <h1 style={{color,alignItems:'center'}}>COUNTER</h1>
                  <h2 style={{backgroundColor:color}} >{value}</h2>
                  <div className="btn">
                    <div><button style={{ margin: "0px 90px 0px 5px" }} disabled={disable2} className="ui positive button" onClick={increment}>Increment</button></div>
                    <div><button className="ui negative button" disabled={disable} onClick={decrement}>Decrement</button></div>
                  </div>
                </div>
                  
              </div>
            </div>
          <div style={{ fontWeight:"bolder" }}>Done By Abhitesh Bhardwaj with Registration No. 12018557</div>
        </Grid.Column>
      </Grid>
    </Segment>
    
    )

}

export default Counter;