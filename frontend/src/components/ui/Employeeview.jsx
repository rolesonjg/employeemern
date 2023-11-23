import React from 'react'
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
const Employeeview = () => {

    //get all the data from the backenddatabase and store it in statevariable and just displayit


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
    return (
        <div>
            {tempDatainsteadofbackend.map((item) => (
                <div>
                    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                        <Button variant="text" style={{ paddingLeft: "280px" }}>EDIT</Button>
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
                        <Button variant="text" style={{ paddingLeft: "280px" }}>Delete</Button>
                    </Card>
                </div>

            ))}
        </div>
    )
}

export default Employeeview
