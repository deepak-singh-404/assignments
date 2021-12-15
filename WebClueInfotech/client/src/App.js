import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Container, Row, Col, Button } from 'react-bootstrap'
import  AddUserModal  from './Components/AddUserModal'
import Loader from './Components/Loader'
import { getUser } from './Redux/Actions/user'

function App() {
  const reduxData = useSelector(store => store)
  const { users, getUsersLoader } = reduxData._user
  const dispatch = useDispatch()
  const [addUserModal, setAddUserModal] = useState(false)

  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <>
      {addUserModal && <AddUserModal addUserModal={addUserModal} setAddUserModal={setAddUserModal} />}
      <Container fluid>
        <Row className="my-2">
          <Col >
            <Button variant="primary" type="button" onClick={() => setAddUserModal(true)}>ADD USER</Button>
            {getUsersLoader ? <Loader /> : null}
          </Col>
        </Row>
        <Row >
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-center">S.No ({users.length})</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Profile Picture</th>
                </tr>
              </thead>
              <tbody>
                {users.length !== 0 ? users.map((s, index) =>
                  <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{s.name}</td>
                    <td className="text-center">{s.email}</td>
                    <td className="text-center"><a href={s.profileImage} target="_blank">{s.profileImage && "url"} </a></td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
