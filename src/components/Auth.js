// @ts-nocheck
import { useState, useEffect } from 'react'
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Container, FloatingLabel, } from 'react-bootstrap';
import db from '../firebase'
import firebase from 'firebase';
import { doc, getDoc } from 'firebase/firestore';


const Auth = (props) => {

    const [users, setUsers] = useState([]);

    const history = useHistory();
    const goToPage = useCallback(() => history.push('/page'), [history]);

    useEffect(() => {
        const getAuthUser = async () => {
            const username2FromLocalStorage = localStorage.getItem('MMNusername')
            console.log(username2FromLocalStorage)
            if (!username2FromLocalStorage || username2FromLocalStorage === undefined || username2FromLocalStorage === '') {
                console.log("Auth fail")
            } else {
                console.log("Auth success")
                goToPage()

            }
        }
        return getAuthUser()
    }, [])

    useEffect(() => {
       return getGang()
    }, [])

    const getGang = async () => {
        const docRef = doc(db, "users", "users");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log(docSnap.data().users)
            setUsers(docSnap.data().users)
        }
    }

    const [username2, setUserName2] = useState(localStorage.getItem('username'))
    const [username, setUserName] = useState('')

    const onSubmit = (e) => {
        if (!username || username === '' || username === undefined) {
            e.preventDefault()
            alert("Who are you?")
        } else {
            localStorage.setItem("MMNusername", username);
            setUserName(localStorage.getItem('MMNusername'))
            goToPage()
        }
    }


    return (
        <>
            <Container>       
                <Form onSubmit={onSubmit} >
                <div className="m-3">
                    <FloatingLabel controlId="floatingSelect" label="Choose your fighter!">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setUserName(e.target.value)}>
                            <option></option>
                            {users.map((user, index) => {
                                return (<option key={index} value={user}> {user} </option>)
                            })}
                        </Form.Select>
                    </FloatingLabel>
                    </div>
                    <Button className="m-3" variant="success" type='submit' >Give me the blood!</Button>{' '}
                </Form>
            </Container>
        </>
    );
};

export default Auth;