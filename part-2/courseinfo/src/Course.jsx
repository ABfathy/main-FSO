
const Header = ({ name }) => <h2>{name}</h2>

const Total = ({parts}) => 
    <h2> 
        the total number of Exercises: {parts.reduce( (total , part) => total + part.exercises, 0)}
    </h2>
    
const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>  
    <>
      {parts.map( part =>
        <Part key={part.id}
        part={part} 
        />
      )}
    </> 
    
const Course = ({courses}) => 
      <>
        <h1>Web dev course</h1>
        {courses.map(course =>
          <div key={course.id}>
            <Header name={course.name} ></Header>
            <Content parts={course.parts} ></Content>
            <Total parts={course.parts} ></Total>
          </div>
        )}
      </>
       
    

export default Course