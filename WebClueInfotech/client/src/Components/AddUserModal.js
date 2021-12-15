import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Modal } from 'react-bootstrap'
import Loader from './Loader'
import {addUser} from '../Redux/Actions/user'


const AddUserModal = ({ addUserModal, setAddUserModal }) => {
    const reduxData = useSelector(store => store)
    const { addUserLoader } = reduxData._user
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [picture, setPicture] = useState("");

    const imagehandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setPicture(img);
        }
    };

    const formHandler = (e) => {
        e.preventDefault()

        //MAKE SURE REQUIRED FIEDS ARE NOT EMPTY
        if (name && email && password && picture ) {
            const formData = new FormData();
            formData.append("name", name)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("picture", picture)

            //DISPATCH ACTION
            dispatch(addUser(formData, () => {
                //UPDATE ALL LOCAL STATE TO ITS INITIAL STATE
                setAddUserModal(false)
                setName("")
                setEmail("")
                setPassword("")
            }))
        }
        else {
            alert("Fields are empty")
            return
        }
    }

    return (
        <>
            <Modal show={addUserModal} onHide={() => setAddUserModal(false)}>

                <Modal.Header closeButton>
                    <Modal.Title>ADD USER</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={formHandler}>

                        <Form.Group >
                            <Form.Label>Name *</Form.Label>
                            <Form.Control required value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        </Form.Group>
                        <br />


                        <Form.Group >
                            <Form.Label>Email *</Form.Label>
                            <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </Form.Group>
                        <br />

                        <Form.Group >
                            <Form.Label>Password *</Form.Label>
                            <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                        </Form.Group>
                        <br />

                        <Form.Group>
                            <Form.Label>Profile Picture *</Form.Label>
                            <Form.Control
                                accept=".jpg,.png,.jpeg"
                                onChange={imagehandler}
                                type="file"
                            />
                        </Form.Group>

                        {addUserLoader ? <Loader /> : <Button variant="primary" type="submit">
                            Submit
                        </Button>}
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddUserModal