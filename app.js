const express = require('express');
const path = require('path');
const routes = require('./src/routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'src', 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'src', 'views', '500.html'));
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}
module.exports = app;
