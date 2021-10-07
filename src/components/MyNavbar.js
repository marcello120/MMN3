import React from 'react'
import { Navbar, Container, Button, Form, ToggleButton } from 'react-bootstrap'

const MyNavbar = (props) => {

    console.log(props.scroll)

    return (
        <Navbar bg="dark" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand>
                    <div className='m-2'>{props.username} egy buzi!</div>
                    <Navbar.Toggle />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <ToggleButton style={{color: 'white'}} className="me-3"  key='scroll' type="checkbox" id='scroll1'  value={props.scroll} variant="outline-primary" checked={props.scroll}  onChange={() => props.setScroll()}>
                        Scroll
                    </ToggleButton>
                        <Button className="justify-content-end" variant="danger" onClick={() => props.logOut()}>Log out</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MyNavbar
