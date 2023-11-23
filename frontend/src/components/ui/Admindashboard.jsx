import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from "axios";

const Admindashboard = () => {
    //card details
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //EM    
    const [numberofemployee, setnoofemployee] = useState([]);
    const tempDatainsteadofbackend = [{
        id: "1",
        name: "roleson",
        email: "r@gmail.com",

    },
    {
        id: "2",
        name: "robert",
        email: "r@gmail.com",

    },
    {
        id: "3",
        name: "rinto",
        email: "r@gmail.com",

    },
    {
        id: "4",
        name: "rocky",
        email: "r@gmail.com",

    },
    ]


    //states used for the forms
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');

    //routingfunctions

    const handleDeletebutton = (item) => {
        console.log("delete", item)

        //Implement logic for deleting the collection that matches this ID
    }


    const handleEditButton = (item) => {
        console.log("Edit", item)

        //Implement logic for update the collection that matches this ID
    }

    const postreqinaxios = async () => {

        const postData = {
            name,
            designation,
            salary,
            location

        };
        try {
            const response = await axios.post('http://localhost:6000/addnewlaborer', postData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',

                },
            });
            console.log('Response from the server:', response.data);
            // You can handle the response data as needed
        } catch (error) {
            console.error('Error making POST request:', error);
            // You can handle errors here
        }

    }

    // async function postData() {
    //     console.log("bla");
    //     try {
    //         const url = 'http://localhost:6000/addnewlaborer'; // replace with your API endpoint
    //         const formData = {
    //             name,
    //             designation,
    //             salary,
    //             location

    //         };

    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 // Add any additional headers if needed
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const responseData = await response.json();
    //         console.log('Response Data:', responseData);

    //         // Do something with the response data here

    //     } catch (error) {
    //         console.error('Error making POST request:', error.message);
    //     }
    // }
    const handleFormSubmit = (event) => {
        event.preventDefault();



        // Do something with the submitted values (e.g., store in state)
        const formData = {
            name,
            designation,
            location,
            salary,
        };

        if (isNaN(Number(salary))) {
            alert('Salary must be a number!');
            setSalary("");
            return; // Stop submission if not a number
        }
        postreqinaxios();

        // setName("")
        // setDesignation("")
        // setLocation("")
        // setSalary("")
        console.log('Form Data:', formData);

        // You can store formData in a state variable or perform other actions
    };



    useEffect(() => {
        setnoofemployee((prevData) => [...prevData, ...tempDatainsteadofbackend]);
    }, []);
    return (
        <div >
            <h1>ADMIN DASHBOARD</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        placeholder='Designation'
                        value={designation}
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                        onChange={(e) => setDesignation(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder='Location'
                        value={location}
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        placeholder='Salary'
                        value={salary}
                        style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
                <button type="submit" style={{ width: "300px", height: "50px", margin: "10px", marginBottom: "10px" }}>Submit</button>
            </form>
            {numberofemployee.map((item) => (
                <div>
                    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                        <Button variant="text" onClick={() => handleEditButton(item.id)} style={{ paddingLeft: "280px" }}>EDIT</Button>
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                {item.id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.email}
                            </Typography>

                        </CardContent>
                        <Button variant="text" onClick={() => handleDeletebutton(item.id)} style={{ paddingLeft: "280px" }}>Delete</Button>
                    </Card>





                </div>
            ))}









        </div>
    )
}

export default Admindashboard
