import {useState} from 'react';
function AddStudents(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    async function handleSubmit(event){
        event.preventDefault();
        let studentData = {
            name:name,
            email:email,
            age:age,
            course,course
        };
        fetch("http://127.0.0.1:8000/students",{
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify(studentData)
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));

    }
    return(
        <div>
            <h1>Fill Student Details</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={name} 
                placeholder="Enter student name"
                onChange={((event)=>setName(event.target.value))}/>
                <br/><br/>
                <input type="email" 
                    value={email} 
                    placeholder="Enter student email"
                    onChange={((event)=>setEmail(event.target.value))}/>
                <br/><br/>
                <input type="number" 
                    value={age} 
                    placeholder="Enter student age"
                    onChange={((event)=>setAge(event.target.value))}/>
                <br/><br/>
                <input type="text" 
                    value={course} 
                    placeholder="Enter Course"
                    onChange={((event)=>setCourse(event.target.value))}/>
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddStudents;