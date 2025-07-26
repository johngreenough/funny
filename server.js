const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for chaos level
app.get('/api/chaos', (req, res) => {
    res.json({
        chaosLevel: Math.floor(Math.random() * 100),
        message: "🌶️ The chaos is real! 🌶️",
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🎪 The Worst Website Ever is running! 🎪');
    console.log(`🌶️ Open your browser and go to: http://localhost:${PORT} 🌶️`);
    console.log('💩 Prepare for the most terrible UI experience! 💩');
}); 