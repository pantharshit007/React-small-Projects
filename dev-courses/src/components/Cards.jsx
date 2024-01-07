import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {  //props: courses
  // if (!courses) {
  //   console.error('Courses prop is missing or null');
  //   return null; // return an empty array or null
  // }

  const [likedCourses, setLikedCourses] = useState([]);
  
  let courses = props.courses;
  let category = props.category;
  const allCourses = [];

  //return all courses from all the categories
  function getCourses() {

    if (category === "All"){
        // console.log(courses);
        Object.values(courses).forEach( (courseCategory) => {   //key: category, value: courses in category
            // console.log(courseCategory);
            courseCategory.forEach( (course) => {
                // console.log(course);
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    else{
      // console.log(courses["Design"]);  //category: String
      return courses[category];
    }
    
  }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 '>
      {
        getCourses().map((course) => (
          // key = course.key;
          <Card key={course.id} 
              course={course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards