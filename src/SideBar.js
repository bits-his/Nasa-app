import React, { useState } from 'react'
import { AlignLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'

export default function SideBar() {
    const navigate = useNavigate();

    const [menu, setMenu] = useState(false)

    const toggle = () => setMenu(!menu)
  return (
    <div>
        <div style={{
          width:200
        }}>
            < AlignLeft
                className='menu-bar'
                isOpen={menu}
                onClick={toggle}
             />
            <Offcanvas 
                style={{
                  maxWidth:375,
                  backgroundColor:"#fff",
                }}
                direction='end'
                toggle={toggle} isOpen={menu}>
              <OffcanvasHeader color='#fff' toggle={toggle}></OffcanvasHeader>
              <OffcanvasBody>
                <div className='menu-responese'>
                    <button
                        className= 'button-respone'
                        onClick={() => navigate("/live")}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                    > Live stream </button>
                    <button
                        className= 'button-respone'
                        onClick={() => navigate("/profile")}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                    > Profile </button>
                    <button
                        className= 'button-respone'
                        onClick={() => navigate("/publish")}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                    > Publish </button>
                    <button
                        className= 'button-respone'
                        onClick={() => navigate("/sign-up")}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                    > Sign Up </button>
                    <button
                        className= 'button-respone'
                        onClick={() => navigate("/login")}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                    > Login </button>
                </div>
              </OffcanvasBody>
            </Offcanvas>
        </div>
    </div>
  )
}
