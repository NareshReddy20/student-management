import { useState } from "react";
function UpdateStudent(){
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [error, setError]= useState("");
    function handleSubmit(event){
        event.preventDefault();
        const studentData = {
            name: name,
            email: email,
            age: Number(age),
            course: course
        };
        fetch(`http://127.0.0.1:8000/students/${studentId}`,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(studentData)
            }

        )
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch error")
            }
            return response.json()}
        )
        .then((data)=>console.log(data))
        .catch((error)=>(setError(error.message)))
        
    }
    if(error){
        return <h1>Error : {error}</h1>
    }
    return(
        <div>
            <h1> Update Student </h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="id"
                    placeholder="Enter student Id"
                    value={studentId}
                    onChange={((event)=>setStudentId(event.target.value))}
                />
                <br/><br/>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={((event)=>setName(event.target.value))}
                />
                <br/><br/>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={((event)=>setEmail(event.target.value))}  
                />

                <br/><br/>
                <input type="number" 
                    value={age} 
                    placeholder="Enter student age"
                    onChange={((event)=>setAge(event.target.value))}
                />
                <br/><br/>
                <input type="text" 
                    value={course} 
                    placeholder="Enter Course"
                    onChange={((event)=>setCourse(event.target.value))}/>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UpdateStudent;
