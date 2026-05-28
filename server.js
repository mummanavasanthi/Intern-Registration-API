const express = require('express');

const app = express();

app.use(express.json());

let interns = [];

// Home Route
app.get('/', (req, res) => {
    res.send('Intern Registration API Running');
});

// Get All Interns
app.get('/interns', (req, res) => {
    res.json(interns);
});

// Register New Intern
app.post('/interns', (req, res) => {

    const newInterns = req.body.map((intern, index) => ({
        id: interns.length + index + 1,
        name: intern.name,
        email: intern.email,
        domain: intern.domain
    }));

    interns.push(...newInterns);

    res.status(201).json({
        message: 'Interns Registered Successfully',
        data: newInterns
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});