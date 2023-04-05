import React from 'react'
import ReactDOM from 'react-dom/client'

const Header=(props)=>{
  return (
    <>
      <h1>
        {props.courseName}
      </h1>
    </>
  );
}

const Content=(props)=>{
  const courseContent=props.parts.map((part,index)=>{
    return(
      <Part key={index} partName={part.name} partExercise={part.exercises}/>
    );
  });

  return (
    <>
      {courseContent}
    </>
  );
}

const Part=(props)=>{
  return(
    <>
      <p>{props.partName} {props.partExercise}</p>
    </>
  );
}

const Total=(props)=>{

  const total=props.parts.reduce((acumulator,part)=>{
    return acumulator+part.exercises;
  },0);

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);