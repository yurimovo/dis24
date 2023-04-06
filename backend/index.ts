const express = require("express");

const app = express();

app.use(express.json());

app.use('/api/organizations', require('./routes/organizations.ts'));
app.use('/api/facilities', require('./routes/facilities.ts'));
app.use('/api/apartments', require('./routes/apartments.ts'));
app.use('/api/users', require('./routes/users.ts'));

app.listen(5000, () =>
    console.log('REST API server ready at: http://localhost:5000'),
);