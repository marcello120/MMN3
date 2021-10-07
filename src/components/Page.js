import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import FilmContainer from './FilmContainer';
import MyNavbar from './MyNavbar';
import { Button, Navbar, Container, Modal, Form, Row, Col } from 'react-bootstrap';
import db from '../firebase'
import firebase from 'firebase';
import { onSnapshot, collection, setDoc, deleteDoc, updateDoc, doc, arrayRemove, query, orderBy } from 'firebase/firestore';
import DateContainer from './DateContainer';
import DateTimePicker from 'react-datetime-picker';


const Page = () => {

    const [showFilm, setShowFilm] = useState(false);

    const [showDate, setShowDate] = useState(false);

    const [newFilm, setNewFilm] = useState('');

    const [newDate, setNewDate] = useState(() => {
        const tempdate = new Date()
        tempdate.setHours(19)
        tempdate.setMinutes(0)
        console.log(tempdate)
        return tempdate
    });

    // @ts-ignore
    const [username, setUserName] = useState(localStorage.getItem('MMNusername'))

    const [filmList, setFilmList] = useState([])

    const [topfilm, setTopFilm] = useState([]);

    const [dateList, setDateList] = useState([])

    const [topDate, setTopDate] = useState([]);

    const [scrollable,setScrollable] = useState(false);

    const [time, setTime] = useState(() => {
        const tempdate = new Date()
        tempdate.setHours(19)
        tempdate.setMinutes(0)
        console.log(tempdate)
        return tempdate
    });

    const messWithPicker = (e) => {
        console.log(e)
        if (!e || !e.type) {
            console.log("hello")
            setTime(e)
            setNewDate(e)
        }
    }

    const handleCloseFilm = () => {
        setNewFilm("")
        setShowFilm(false);
    }


    const getTempDate = () => {
        const tempdate = new Date()
        tempdate.setHours(19)
        tempdate.setMinutes(0)
        tempdate.setMilliseconds(0)
        console.log(tempdate)
        return tempdate
    }

    const handleShowFilm = () => setShowFilm(true);

    const addFilm = async () => {
        if (newFilm && newFilm !== undefined && newFilm !== " ") {
            if(filmList.some(e => e.title === newFilm)){
                alert("Film already on list")
            }else{
                const docRef = doc(db, 'films', newFilm)
                const payload = { recBy: username, votes: [username] }
                await setDoc(docRef, payload)
                setNewFilm("")
                setShowFilm(false);
            }
           
        } else {
            alert("enter film name or cancel")
        }
    }

    const addAnotherFilm = async () => {
        if (newFilm && newFilm !== undefined && newFilm !== " ") {
            if(filmList.some(e => e.title === newFilm)){
                alert("Film already on list")
            }else{
                const docRef = doc(db, 'films', newFilm)
                const payload = { recBy: username, votes: [username] }
                await setDoc(docRef, payload)
            }
        } else {
            alert("enter film name or cancel")
        }
    }

    const handleCloseDate = () => {
        setNewDate(getTempDate())
        setTime(getTempDate())
        setShowDate(false);
    }

    const handleShowDate = () => setShowDate(true);

    const negateScroll = () => setScrollable(!scrollable)

    const addDate = async () => {
        if (newDate && newDate !== undefined) {
            const month = newDate.toLocaleString('default', { month: 'short' })
            const nameDay = newDate.toLocaleString('default', { weekday: 'short' })
            const title = (month + " " + newDate.getDate() + " (" + nameDay + ') ' + newDate.getHours() + ':' + ((newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()))
            console.log(title)
            if(dateList.some(e => e.title === title)){
                alert("Date already on list")
            }else{
                const docRef = doc(db, 'dates', title)
                const payload = { recBy: username, votes: [username], date: newDate }
                await setDoc(docRef, payload)
                setNewDate(getTempDate())
                setTime(getTempDate())
                setShowDate(false);
            }          
        } else {
            alert("enter correct Date or cancel")
        }
    }

    const addAnotherDate = async () => {
        if (newDate && newDate !== undefined) {
            const month = newDate.toLocaleString('default', { month: 'short' })
            const nameDay = newDate.toLocaleString('default', { weekday: 'short' })
            const title = (month + " " + newDate.getDate() + " (" + nameDay + ') ' + newDate.getHours() + ':' + ((newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()))
            console.log(title)
            if(dateList.some(e => e.title === title)){
                alert("Date already on list")
            }else{
                const docRef = doc(db, 'dates', title)
                const payload = { recBy: username, votes: [username], date: newDate }
                await setDoc(docRef, payload)
            }         
        } else {
            alert("enter correct Date or cancel")
        }
    }
    

    const deleteFilm = async (filmTitle) => {
        if (filmTitle && filmTitle !== undefined && filmTitle !== " ") {
            const docRef = doc(db, 'films', filmTitle)
            await deleteDoc(docRef)
        } else {
            alert("Problem deleting")
        }
    }

    const deleteDate = async (dateTitle) => {
        if (dateTitle && dateTitle !== undefined && dateTitle !== " ") {
            const docRef = doc(db, 'dates', dateTitle)
            await deleteDoc(docRef)
        } else {
            alert("Problem deleting")
        }
    }

    const doVoteFilm = async (votes, title) => {

        if (votes.includes(username)) {
            const docRef = doc(db, 'films', title)
            await updateDoc(docRef, {
                votes: arrayRemove(username)
            })
        } else {
            const docRef = doc(db, 'films', title)
            await updateDoc(docRef, {
                votes: [...votes, username]
            })
        }
    }

    const doVoteDate = async (votes, title) => {

        if (votes.includes(username)) {
            const docRef = doc(db, 'dates', title)
            await updateDoc(docRef, {
                votes: arrayRemove(username)
            })
        } else {
            const docRef = doc(db, 'dates', title)
            await updateDoc(docRef, {
                votes: [...votes, username]
            })
        }
    }

    const logOut = () => {
        localStorage.removeItem('MMNusername')
        goToAuth()
    }

    const history = useHistory();
    const goToAuth = useCallback(() => history.push('/'), [history]);




    useEffect(() => {
        const getAuthUser = async () => {
            const username2FromLocalStorage = localStorage.getItem('MMNusername')
            console.log(username2FromLocalStorage)
            if (username2FromLocalStorage) {
                console.log("Auth success")
            } else {
                console.log("Auth fail")
                goToAuth()
            }
        }
        getAuthUser()
    }, [])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'films'), (snapshot) => {
            const templist = snapshot.docs.map(doc => ({ ...doc.data(), title: doc.id }))
            setFilmList(templist)
            const copylist = [...templist]
            // @ts-ignore
            const maximuum = Math.max.apply(Math, copylist.map(function (o) { return o.votes.length; }))
            // @ts-ignore
            const found = copylist.filter(element => element.votes.length === maximuum)
            setTopFilm(found)
        });
        return unsub;
    }, [])

    useEffect(() => {
        const q = query(collection(db, "dates"), orderBy('date'));
        const unsub = onSnapshot(q, (snapshot) => {
            const templist = snapshot.docs.map(doc => ({ ...doc.data(), title: doc.id }))
            setDateList(templist)
            if (templist) {
                const copylist = [...templist]
                // @ts-ignore
                const maximuum = Math.max.apply(Math, copylist.map(function (o) { return o.votes.length; }))
                // @ts-ignore
                const found = copylist.filter(element => element.votes.length === maximuum)
                setTopDate(found)
            }

        });
        return unsub;
    }, [])

    const getStyle = () => {
        if (scrollable){
            return { maxHeight:'70vh'}
        }else{
            return {}

        }
    }

    return (
        <Container>
            <MyNavbar username={username} setScroll={negateScroll} scroll={scrollable} logOut={logOut}></MyNavbar>
            <Row>
                <Col>
                <div className='text-center mb-2'>
                            <Button className=' btn-lg btn-block' variant="success" onClick={handleShowDate}> Add Time</Button>
                        </div>
                    <div className="text-center mb-1">
                        <div className='border border-success' style={{display: 'inline-block'}}>
                        {topDate.slice(0,3).map((top,index)=>(
                          <h4 key={top.title}>{top.title} </h4>  
                    ))}</div>
                    </div>
                    <Container className='overflow-auto' style={getStyle()}>                       
                        {dateList.map((date, index) => (
                            <DateContainer className="border border-primary" onVote={doVoteDate} onDelete={deleteDate} index={date.title} key={index} title={date.title} recBy={date.recBy} votes={date.votes} username={username} />
                        ))}
                    </Container>
                </Col>
                <Col>
                <div className='text-center mb-2'>
                            <Button className=' btn-lg btn-block' variant="success" onClick={handleShowFilm}> Add Film</Button>
                        </div>
                    <div className="text-center mb-1">
                        <div className='border border-success' style={{display: 'inline-block'}}>
                        {topfilm.slice(0,3).map((top,index)=>(
                          <h4 key={top.title}>{top.title} </h4>  
                    ))}</div>
                    </div>
                    <Container className='overflow-auto' style={getStyle()}>                        
                        {filmList.map((film, index) => (
                            <FilmContainer className="border border-primary" onVote={doVoteFilm} onDelete={deleteFilm} index={film.title} key={index} title={film.title} recBy={film.recBy} votes={film.votes} username={username} />
                        ))}
                    </Container>
                </Col>
            </Row>

            <Modal show={showFilm} onHide={handleCloseFilm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupFilm">
                            <Form.Label>Enter Film Name:</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => setNewFilm(e.target.value)} type="text" placeholder="What are we watching?" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                <Button className='float-start ' variant="light" onClick={addAnotherFilm}>
                        Add Another
                    </Button>
                    <Button variant="primary" className='float-end ms-3' onClick={addFilm}>
                        Slap it on!
                    </Button>   
                    <Button variant="secondary" className='float-end ' onClick={handleCloseFilm}>
                        Back
                    </Button>  
                    </Container>
                </Modal.Footer>
            </Modal>

            <Modal show={showDate} onHide={handleCloseDate}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Date</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupDate">
                            <Form.Label>Enter New Date:</Form.Label>
                            <Container>
                                <DateTimePicker style={{ color: 'red' }}
                                    onChange={e => messWithPicker(e)}
                                    value={time}
                                />
                            </Container>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                <Button className='float-start ' variant="light" onClick={addAnotherDate}>
                        Add Another
                    </Button>
                    <Button variant="primary" className='float-end ms-3' onClick={addDate}>
                        Slap it on!
                    </Button>   
                    <Button variant="secondary" className='float-end ' onClick={handleCloseDate}>
                        Back
                    </Button>                     
                    </Container>    
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Page
