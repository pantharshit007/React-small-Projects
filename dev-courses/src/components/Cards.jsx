import React from 'react'
import Card from './Card'

const Cards = (props) => {  //props: courses
  // if (!courses) {
  //   console.error('Courses prop is missing or null');
  //   return null; // return an empty array or null
  // }
  
  let courses = props.courses;
  const allCourses = [];

  //return all courses from all the categories
  function getCourses() {
    console.log(courses);
      Object.values(courses).forEach( (courseCategory) => {   //key: category, value: courses in category
          
          courseCategory.forEach( (course) => {
              allCourses.push(course);
          })
      })
      return allCourses;
  }
    
  return (
    <div>
      {
        getCourses().map((course) => (
          // key = course.key;
          <Card key={course.id} course={course}/>
        ))
      }
    </div>
  )
}

export default Cards