import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { API_Link } from '../index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentsList() {
  let [students, setStudents] = useState([]);
  let navigate = useNavigate()
  
  let getdata = async()=>{
    try{
      let res = await axios.get(API_Link)
      console.log(res)
    
      if(res.status===200)
      {
        setStudents(res.data)
      }
    }
    catch (error){
      alert(error)
    }
  }
  useEffect(()=>{
    getdata()
  },[])

  const handleDelete = async (ID) => {
    try {
      const res = await axios.delete(`${API_Link}/${ID}`);
      if (res.status === 200) {
        getdata();
      }
    } catch (error) {
      alert(error);
    }
  };

  const editStudent = (ID) => {
    navigate(`/edit-student/${ID}`);
  };
return (
  <>
  <div style={{ backgroundImage: 'url(https://wallpaper.dog/large/20567146.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%' }}>
    <Table bordered style={{color : "white"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Course</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {students.map((e) => (
          <tr key={e.ID}>
            <td>{e.Studentsname}</td>
            <td>{e.EmailID}</td>
            <td>{e.MobileNumber}</td>
            <td>{e.Course}</td>
            <td>
              <Button variant="primary" onClick={() => editStudent(e.ID)}>
                Edit
              </Button>
              &nbsp;&nbsp;
              <Button variant="danger" onClick={() => handleDelete(e.ID)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Button onClick={() => navigate('/addstudent')}>
      Add New student to Management
    </Button>
    </div>
  </>
  
);
}

export default StudentsList;