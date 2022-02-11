const path = require('path');

const express = require('express');

const app = new express();

app.use(express.static(path.join(__dirname, '../public/css')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages/profile.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
}); 
