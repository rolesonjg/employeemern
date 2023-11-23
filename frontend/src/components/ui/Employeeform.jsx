import React from 'react'

const Employeeform = () => {
    return (
        <div>
            <form >
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        placeholder='Designation'
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder='Location'
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        placeholder='Salary'
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                    />
                </div>
                <button type="submit" style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}>Submit</button>
            </form>
        </div>
    )
}

export default Employeeform


