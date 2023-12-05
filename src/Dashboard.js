import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "./redux/actions";
import {
  Grid,
  Container,
} from "@mui/material";
import './CourseList.css';


const Dashboard = () => {
  const [studentCourses, setstudentCourses] = useState([]);
  console.log("studentCourses",studentCourses);

  let dispatch = useDispatch();
  const courseList = useSelector((state) => state.getCourse);
  console.log("courseList",courseList);

  useEffect(() => {
    dispatch(getCourse());
  
  }, []);

  useEffect(() => {
    if (courseList.list.data) {
      console.log("z",courseList)
      setstudentCourses(courseList.list.data);
    } 
  }, [courseList.list]);



  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} className="searchTop">
      <h2>Student Dashboard</h2>
      {studentCourses.map((cval) => (
        <div key={cval.id}>
          <h3>{cval.name}</h3>
          <p>Instructor: {cval.instructor}</p>
          <p>Due Date: {cval.duration}</p>
          <p>Progress: {cval.progress}%</p>
          
          <div style={{ width: '100%', background: '#e0e0e0', borderRadius: '5px' }}>
            <div
              style={{
                width: `${cval.progress}%`,
                height: '10px',
                background: '#4caf50',
                borderRadius: '5px',
              }}
            />
          </div>
          
          {!cval.completed && (
            <button className="enrol-completion">Mark as Completed</button>
          )}
        </div>
      ))}
      </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;