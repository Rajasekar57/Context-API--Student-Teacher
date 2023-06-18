import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { API_Link } from '../index';
import axios from 'axios';

function AddStudent() {
  const navigate = useNavigate();
  const { ID } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (ID !== undefined) {
      fetchData();
    }
  }, [ID]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_Link}/${ID}`);
      console.log(response)
      const student = response.data;
      // console.log(student);
      setName(student.StudentsName);
      setEmail(student.EmailID);
      setMobile(student.MobileNumber);
      setCourse(student.Course);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      StudentsName: name,
      EmailID: email,
      MobileNumber: mobile,
      Course: course
    };
  
    try {
      let response;
      if (ID !== undefined) {
        response = await axios.put(`${API_Link}/${ID}`, studentData);
        console.log(studentData);
      } else {
        response = await axios.post(`${API_Link}`, studentData);
      }
      if (response.status === 201) {
        navigate('/studentslist');
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>
          {error && <p>{error}</p>}
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStudent;