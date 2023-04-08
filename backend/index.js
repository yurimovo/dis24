const express = require("express");

const app = express();
app.use(express.json());

app.use('/api/organizations', require('./routes/organizations.routes'));
app.use('/api/facilities', require('./routes/facilities.routes'));
//app.use('/api/apartments', require('./routes/apartments.routes'));
//app.use('/api/users', require('./routes/users.routes'));

app.listen(5000, () =>
    console.log('REST API server ready at: http://localhost:5000'),
);