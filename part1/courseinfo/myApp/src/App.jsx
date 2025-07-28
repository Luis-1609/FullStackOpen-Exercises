/*
  La intención del ejercicio es refactorizar el código para constar de tres componentes nuevos:
  Header, Content y Total
  */
const Header = (props) => {
  console.log("Si ves esto es porque el Header funciona correctamente")
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  console.log("Si ves esto es porque el Part funciona correctamente")
  return(
    <p>
      {props.part} {props.excercises}
    </p>
  )
}

const Content = (props) =>{
  console.log("Si ves esto es porque el Content funciona correctamente")
  /*
    Aquí también se puede encapsular con <div></div>, sin embargo, mejor no hacerlo
    porque esto puede romper estilos que dependan de la estructura DOM
  */
  return(
    <>
      <Part part={props.parts[0].name} excercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} excercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} excercises={props.parts[2].exercises}/>
    </>
    
  )
}

const Total = (props) => {
  console.log("Si ves esto es porque el Total funciona correctamente")
  return(
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  //Paso una estructura de datos tipo lista como prop
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App

