// mongoose  setup
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rolesonict:stumperball@cluster0.ndqpz8q.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB successfully!');
});

module.exports = db