import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import FilmContainer from './FilmContainer';
import MyNavbar from './MyNavbar';
// @ts-ignore
import { Button, Navbar, Container, Modal, Form, Row, Col } from 'react-bootstrap';
import db from '../firebase'
// @ts-ignore
import firebase from 'firebase';
import { onSnapshot, collection, setDoc, deleteDoc, updateDoc, doc, arrayRemove, query, orderBy } from 'firebase/firestore';
import DateContainer from './DateContainer';
// @ts-ignore
import PoorPicker from './PoorPicker'
// @ts-ignore
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

    const [topfilm, setTopFilm] = useState('');

    const [dateList, setDateList] = useState([])

    const [topDate, setTopDate] = useState('');

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
            const docRef = doc(db, 'films', newFilm)
            const payload = { recBy: username, votes: [username] }
            await setDoc(docRef, payload)
            setNewFilm("")
            setShowFilm(false);
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

    const addDate = async () => {
        if (newDate && newDate !== undefined) {
            const month = newDate.toLocaleString('default', { month: 'short' })
            const nameDay = newDate.toLocaleString('default', { weekday: 'short' })
            const title = (month + " " + newDate.getDate() + " (" + nameDay + ') ' + newDate.getHours() + ':' + ((newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()))
            console.log(title)
            const docRef = doc(db, 'dates', title)
            const payload = { recBy: username, votes: [username], date: newDate }
            await setDoc(docRef, payload)
            setNewDate(getTempDate())
            setTime(getTempDate())
            setShowDate(false);
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
            const found = copylist.find(element => element.votes.length === maximuum)
            setTopFilm(found.title)
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
                const found = copylist.find(element => element.votes.length === maximuum)
                if (found) {
                    setTopDate(found.title)
                }
            }

        });
        return unsub;
    }, [])


    return (
        <Container>
            <MyNavbar username={username} logOut={logOut}></MyNavbar>
            <Row>
                <Col>
                    <h1 className="text-center" >Days:</h1>
                    <h2 className="text-center" >Top: {topDate} </h2>
                    <Container >
                        <div className='text-center'>
                            <Button className=' btn-lg btn-block' variant="success" onClick={handleShowDate}> Add Time</Button>
                        </div>
                        {dateList.map((date, index) => (
                            <DateContainer className="border border-primary" onVote={doVoteDate} onDelete={deleteDate} index={date.title} key={index} title={date.title} recBy={date.recBy} votes={date.votes} username={username} />
                        ))}
                    </Container>
                </Col>
                <Col>
                    <h1 className="text-center" >Films:</h1>
                    <h2 className="text-center" >Top: {topfilm} </h2>
                    <Container >
                        <div className='text-center'>
                            <Button className=' btn-lg btn-block' variant="success" onClick={handleShowFilm}> Add Film</Button>
                        </div>
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
                    <Button variant="secondary" onClick={handleCloseFilm}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={addFilm}>
                        Slap it on!
                    </Button>
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
                    <Button variant="secondary" onClick={handleCloseDate}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={addDate}>
                        Slap it on!
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Page
