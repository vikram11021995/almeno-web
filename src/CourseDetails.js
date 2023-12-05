import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './CourseList.css';


const CourseDetails = () => {
  const location = useLocation();
  console.log("a", location.state);
  return (
    // <div>
    //   {location.state.course.id}
    // </div>
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} className='searchTop'>
        <Typography className="course-detail">Courses Detail</Typography>
          <Typography variant='subtitle1'>
            Instructor: {location.state.course.instructor}
          </Typography>
          <Typography variant='body1'>Description: {location.state.course.description}</Typography>
          <Typography variant='body1'>
            Enrollment Status: {location.state.course.enrollmentStatus}
          </Typography>
          <Typography variant='body1'>Duration: {location.state.course.duration}</Typography>
          <Typography variant='body1'>
            Prerequisites:{" "}
            {location.state.course.prerequisites.map((cval) => {
              return cval;
            })}
          </Typography>
          <Typography variant='body1'>Schedule: {location.state.course.schedule}</Typography>
          {/* <Typography variant="body1">Syllabus: {location.state.course.syllabus.map((cval)=>{
      return(
        <>
        {cval.topic}
        {cval.content}
        </>
      )
    })
    
    }</Typography> */}

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='subtitle1'>Syllabus</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1'>
                {location.state.course.syllabus.map((cval) => {
                  return (
                    <>
                      {cval.topic}
                      {cval.content}
                    </>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
