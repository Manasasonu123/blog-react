import { useState } from "react"
const Learn = () => {
    const title = 'Welcome to the new blog';
  const likes=50;
  const person={name:'Manasa',age:22}
  const link='http://www.google.com'

    //let name='Sonu'
    const [name,setName]=useState('iogi') //here setName is function to change name
    const [age,setAge]=useState(25)

    const handleClick=(e)=>{
        console.log("Hello,guys",e)
        setName('Mario')
        setAge(30)
    }
    const handleClickAgain=(name,e)=>{
        console.log("Hello,"+name,e.target)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p> 
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain('marie',e)}>Click me again</button>
            <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{[1,3,5,6,7]} {Math.random()*10}</p>
        <p>Name of person is {person.name} and her age is {person.age}</p>
        <a href={link}>Google Site</a>
      </div>
        </div>
     );
}
 
export default Learn;