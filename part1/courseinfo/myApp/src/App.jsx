/*
  La intención del ejercicio es refactorizar el código para constar de tres componentes nuevos:
  Header, Content y Total
  */
const Header = (props) => {
  console.log("Si ves esto es porque el Header funciona correctamente")
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) =>{
  console.log("Si ves esto es porque el Content funciona correctamente")
  return(
    <p>
      {props.part} {props.excercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} excercises={exercises1}/>
      <Content part={part2} excercises={exercises2}/>
      <Content part={part3} excercises={exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App

