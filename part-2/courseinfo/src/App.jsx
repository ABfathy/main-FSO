const Course = ({course}) => {
  return(
    <>
    <Header name={course.name}> </Header>
    <Content parts={course.parts }></Content>
    </>
    )


}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
  return (
  <>
    {parts.map( part =>
      <Part key={part.id}
      part={part} 
      />
    )}
  </> 
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'extra part test 1',
        exercises: 24,
        id: 4
      },
      {
        name: 'extra part test  2',
        exercises: 12,
        id: 5
      },{
        name: 'extra part test 3',
        exercises: 7,
        id: 6
      }
    ]
  }

  return <Course course={course} />
}


export default App