import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import './CourseList.css';
import { getCourse } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";



const Row = ({ course }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
    
        <Link to={`/course/${course.id}`} state= {{ course: course}}>{course.name}</Link>
        <TableCell>{course.instructor}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <div>
              <p>Description: {course.description}</p>
              <p>Enrollment Status: {course.enrollmentStatus}</p>
              <p>Duration: {course.duration}</p>
              <p>Enrollment Status: {course.enrollmentStatus}</p>
              <p>Progress: {course.progress}%</p>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const CourseList = ({ viewDetails }) => {
  const [courses, setCourses] = useState([]);
  // console.log("courses", courses);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("courses.json")
  //     .then((response) => setCourses(response.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  let dispatch = useDispatch();
  const courseList = useSelector((state) => state.getCourse);
  console.log("courseList",courseList);

  useEffect(() => {
    dispatch(getCourse());
  }, []);

  useEffect(() => {
    if (courseList.list.data) {
      console.log("z",courseList)
      setCourses(courseList.list.data);
    } 
  }, [courseList.list]);


  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("filteredCourses", filteredCourses)

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} className="searchTop">
          <Typography className="course-list">List Of Courses</Typography>
          <input
            type='text'
            placeholder='Search by course or instructor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", height: "30px", marginTop: "2%" }}
          />
          <TableContainer component={Paper} style={{ overflowY: "scroll", height: "315px", marginTop: "2%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Course Name</TableCell>
                  <TableCell>Instructor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {courses.map(course => (
            <Row key={course.id} course={course} />
          ))} */}
                {filteredCourses.map((course) => (
                  <Row key={course.id} course={course} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseList;
