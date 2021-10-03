import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'

const MyNavbar = (props) => {
    return (
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand>
                        <label className='m-2'>{props.username} egy buzi</label>
                        <Navbar.Toggle />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button className="justify-content-end" variant="danger" onClick={() =>props.logOut()}>Log out</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    )
}

export default MyNavbar
