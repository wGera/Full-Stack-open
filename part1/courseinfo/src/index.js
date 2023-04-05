import React from 'react'
import ReactDOM from 'react-dom/client'

const Header=(props)=>{
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  );
}

const Content=(props)=>{
  const courseContent=props.contents.map((cont,index)=>{
    return(
      <Part key={index} part={cont.name} exercise={cont.exercises}/>
    )
  })

  return (
    <>
      {courseContent}
    </>
  );
}

const Part=(props)=>{
  return(
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  );
}

const Total=(props)=>{

  let total=props.exercises.reduce((acumulator,exercise)=>{
    return acumulator+exercise
  },0);

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
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

  return (
    <div>
      <Header course={course} />
      <Content contents={parts} />
      <Total exercises={parts.map((part)=>part.exercises)} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);