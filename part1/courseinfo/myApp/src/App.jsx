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
      <Part part={props.parts[0]} excercises={props.excercises[0]}/>
      <Part part={props.parts[1]} excercises={props.excercises[1]}/>
      <Part part={props.parts[2]} excercises={props.excercises[2]}/>
    </>
    
  )
}

const Total = (props) => {
  console.log("Si ves esto es porque el Total funciona correctamente")
  return(
    <p>
      Number of exercises {props.excercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  //Paso una estructura de datos tipo lista como prop
  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1.name,part2.name,part3.name]} excercises={[part1.exercises,part2.exercises,part3.exercises]}/>
      <Total excercises={[part1.exercises,part2.exercises,part3.exercises]}/>
    </div>
  )
}

export default App

