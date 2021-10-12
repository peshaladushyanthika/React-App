import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const FillForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [adaptability, setAdaptability] = useState("");
    const [affectionLevel, setAffectionLevel] = useState("");
    const [childFriendly, setChildFriendly] = useState("");
    const [strangerFriendly, setStrangerFriendly] = useState("");
    const [energyLevel, setEnergyLevel] = useState("");
    const [weight, setWeight] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        const object = {
            Name : {name},
            Description : {description},
            Adaptability : {adaptability},
            AffectionLevel : {affectionLevel},
            ChildFriendly : {childFriendly},
            StrangerFriendly : {strangerFriendly},
            EnergyLevel : {energyLevel},
            Weight : {weight}
            

        };

        axios.post('http://localhost:3000/create' , object)
        .then(res => alert(res.data));

    }
    return (<div className="form-wrapper">
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="name">
                <Form.Label>Name :</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description :</Form.Label>
                <Form.Control
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="adaptability">
                <Form.Label>Adaptability :</Form.Label>
                <Form.Control
                    type="text"
                    value={adaptability}
                    onChange={(event) => setAdaptability(event.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="affection_level">
                <Form.Label>Affection_Level :</Form.Label>
                <Form.Control
                    type="text"
                    value={affectionLevel}
                    onChange={(event) => setAffectionLevel(event.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="child_friendly">
                <Form.Label>Child_Friendly :</Form.Label>
                <Form.Control type="text"
                    value={childFriendly}
                    onChange={(event) => setChildFriendly(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="stranger_friendly">
                <Form.Label> Stranger_Friendly:</Form.Label>
                <Form.Control type="text"
                    value={strangerFriendly}
                    onChange={(event) => setStrangerFriendly(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="energy_level">
                <Form.Label>Energy_Level :</Form.Label>
                <Form.Control type="text"
                    value={energyLevel}
                    onChange={(event) => setEnergyLevel(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="weight">
                <Form.Label>Weight :</Form.Label>
                <Form.Control type="text"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                />
            </Form.Group>

            <Button className="submit" variant="danger" size="lg" block="block" type="submit">Create New</Button>
        </Form>
    </div>
    );
}
export default FillForm;




