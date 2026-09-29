import {useState, useEffect} from "react";
function StudentList(){
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    // useEffect(()=>{
    //     fetch("http://127.0.0.1:8000/students/")
    //     .then((response)=>
    //         {
    //             if(!response.ok){
    //                 throw new Error("Failed to fetch students")
    //             }
    //             return response.json()
    //         }
    //     )
    //     .then((data)=>
    //         {
    //             setStudents(data)
    //             setIsLoading(false)
    //     })
    //     .catch((error)=>{
    //         setError(error.message)
    //         setIsLoading(false)
    //     });
    // },[]);


    // useEffect(()=>{
    //     async function getStudents()
    //     {
    //         const response = await fetch("http://127.0.0.1:8000/students/")
    //         const data = response.json();
    //         setStudents(data)
    //     }
    //     getStudents();

    // },[]);


    useEffect(() => {
    async function getStudents() {
      try {
        const response = await fetch("http://127.0.0.1:8000/students/");

        // Check if HTTP response status is 200-299
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        // Must await response.json()
        const data = await response.json();

        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        // Always turn off loading state once complete
        setIsLoading(false);
      }
    }

    getStudents();
  }, []);


    if(isLoading)
    {
        return <h1>Loading Students : </h1>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return(
        <div>
           <h1> Student List </h1>
           {students.map((student)=>(
            <div key={student.id}>
                <h1>{student.name}</h1>
                <p>Email: {student.email}</p>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
                <hr />
            </div> 
           ))}
        </div>
    )

}
export default StudentList;