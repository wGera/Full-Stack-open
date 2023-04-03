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
      <p key={index}>
        {cont.part} {cont.exercise}
      </p>
    )
  })

  return (
    <>
      {courseContent}
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content contents={[{part:part1,exercise:exercises1},{part:part2,exercise:exercises2},{part:part3,exercise:exercises3}]} />
      <Total exercises={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);