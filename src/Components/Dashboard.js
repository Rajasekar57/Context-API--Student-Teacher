import React from 'react'
import Table from 'react-bootstrap/Table';

function Dashboard() {
  return (
    <div style={{backgroundColor:"#d891ef"}}>
    <Table bordered>
      <thead>
        <tr>
          <th>Teachers</th>
          <th>Assigned Students</th>
          <th>Batch</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>Sathish</td>
          <td>Raj</td>
          <td>B46</td>
          <td>Full-Stack</td>
        </tr>
        <tr>
          <td>Manimekalai</td>
          <td>B46</td>
          <td>Full-stack</td>
        </tr>
        <tr>
          <td rowSpan={2}>Saimohan</td>
          <td>Prakash</td>
          <td>B46</td>
          <td>Full-stack</td>
        </tr>
        <tr>
          <td>Ganesh</td>
          <td>B46</td>
          <td>Devops</td>
        </tr>
        <tr>
          <td rowSpan={2}>Nagarajan</td>
          <td>Padmapriya</td>
          <td>B46</td>
          <td>Data-science</td>
        </tr>
        <tr>
          <td>Santhosh</td>
          <td>B46</td>
          <td>Cloud-computing</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Dashboard