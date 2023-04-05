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

  return (
    <div>
      <Header course={course} />
      <Content contents={[part1,part2,part3]} />
      <Total exercises={[part1.exercises,part2.exercises,part3.exercises]} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);