const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();
app.use(express.json());
const options = {
    extensions: ['html']
}
app.use(express.static('./public', options));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})

// Import api routes
// redirets /api to ./api/index any req coming in to express entry point get redirected to this file
const api = require('./api/index');
app.use('/api', api);