import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';

const Navbar = () => {
    const [contactbox, setcontactbox] = useState(false);
    const contact=()=>{
        if(contactbox === true){
            setcontactbox(false)
        }
        else{
            setcontactbox(true)
        }
    }

  return (
    <>
    <Menu size="large" color="green" inverted>
      <Menu.Item header>Counter Application</Menu.Item>
      <Menu.Item onClick={contact} style={{display:'grid',aligncontent:'right'}} name="contact" />
    </Menu>
      {contactbox && <div style={{border:'2px solid green',display: 'grid',font: '40px black',alignContent:'center',
    height: '100px'}}>Abhitesh Bhardwaj Reg No 12018557</div>}
    </>
  );
};

export default Navbar;
