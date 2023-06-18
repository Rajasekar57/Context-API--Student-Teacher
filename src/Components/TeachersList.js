 import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { API_Link } from '../index';
import axios from 'axios';

function TeachersList() {
let [teachers, setTeachers] = useState([]);

let getdata = async()=>{
  try{
    let res = await axios.get(`${API_Link}`)
    console.log(res)
    if(res.status===200)
    {
      setTeachers(res.data)
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
  return (
    <>
    <div
      className="page-container">
        
      <div
        className="card-container"
        style={{
          backgroundImage: 'url(https://cdn.wallpapersafari.com/64/76/jg0adP.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%',
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: "space-between",
          padding: '15%',
        }}
      >
        {teachers.map((e) => (
          <Card
          key={e.ID}
          className='text-align'
            border="primary"
            style={{
                backgroundColor:"#e0b0ff",
              color:"#003153",  
              width: '18rem',
              flexBasis: '30%',
              marginBottom: '30px',
            }}
          >
            <Card.Header>
              <h3 className="">{e.Teachersname}</h3>
            </Card.Header>
            <Card.Body>
              <div className="contents">
                <Card.Text>
                  <b>Email: </b>
                  {e.EmailID}
                </Card.Text>
                <Card.Text>
                  <b>Mobile: </b>
                  {e.MobileNumber}
                </Card.Text>
                <Card.Text>
                  <b>Expertise: </b>
                  {e.Course}
                </Card.Text>
              </div>
              <div className="m-3">
                <Button variant="primary">
                  <i className="fa-solid fa-pen"></i>
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="danger" onClick={() => handleDelete(e.ID)}>
               
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        </div>
      </div>
    </>
  );
}

export default TeachersList;
