import { useState } from "react";

function DeleteStudent() {

    const [studentId, setStudentId] = useState("");

    function handleDelete(event) {

        event.preventDefault();

        fetch(`http://127.0.0.1:8000/students/${studentId}`, {
            method: "DELETE"
        })
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to delete student");
                }

                return response.json();
            })
            .then((data) => {

                console.log(data);

            })
            .catch((error) => {

                console.log(error.message);

            });
    }

    return (
        <div>

            <h1>Delete Student</h1>

            <form onSubmit={handleDelete}>

                <input
                    type="number"
                    placeholder="Enter Student ID"
                    value={studentId}
                    onChange={(event) => setStudentId(event.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Delete Student
                </button>

            </form>

        </div>
    );
}

export default DeleteStudent;