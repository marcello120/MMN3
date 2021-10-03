import React, { useState, useEffect } from "react"
import { Card, Container, ToggleButton, OverlayTrigger, Button, Popover } from "react-bootstrap"

const DateContainer = (props) => {

    const [votes, setVotes] = useState(props.votes);


    useEffect(() => {
        setVotes(props.votes)
    }, [props.votes])

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <label> 
                    {votes.map((string, index) => (
                        <div key={index}> {string} </div>
                    ))} 
                </label>
            </Popover.Body>
        </Popover>
    );


    const getChecked = () => {
        return votes.includes(props.username)
    }

    
    const setChecked = () =>{
        props.onVote(votes, props.title)
    }

    const getStyle = () => {
        if (!getChecked()){
            return { width: '18rem' }
        }else{
            return {width: '18rem', backgroundColor:'rgba(63, 127, 191, 0.3)' }

        }
    }

    return (
        <Container className='d-flex justify-content-center'>
            <Card style={getStyle()} className="m-1 ">
                <Card.Body>
                    <Card.Title>{props.title}                     {
                    <ToggleButton className="mb-6 float-end" key={props.index} type="checkbox" id={"button" + props.index}  value={props.index} variant="outline-primary" checked={getChecked()}  onChange={(e) => setChecked()}>
                        I'm in
                    </ToggleButton>}</Card.Title>

                    <Card.Subtitle className="mb-2">{props.recBy}</Card.Subtitle>
                    {((props.recBy === props.username)|| props.username === 'Admin' ) && <Button onClick={() => props.onDelete(props.title)} variant="danger"> Delete </Button>}
                    <OverlayTrigger placement="right" trigger="click" overlay={popover}>
                        <Button className="float-end" variant="success">{votes.length} Votes </Button>
                    </OverlayTrigger>
                </Card.Body>
            </Card>
        </Container>
    )
}

DateContainer.defaultProps = { title: 'Date_Title', date: new Date(),  recBy: 'person', votes: ["unos", "dos", "tres"] }


export default DateContainer
