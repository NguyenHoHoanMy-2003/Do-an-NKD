// server.js
const express = require('express');
const app = express();
const path = require('path');
const webRoutes = require('./src/routes/web.js');
const STATIC = require('./src/statics/static.js');
const { ref, set, get, child } = require("firebase/database");
const { database } = require("./src/js/firebaseConfig.js"); // Đảm bảo file firebaseConfig.js chứa cấu hình Firebase
const port = 3000;

STATIC(app);
app.use('/', webRoutes);
app.use(express.json());
// Route để lấy thông tin sức khỏe
app.post('/api/petData', async (req, res) => {
    const { heartRate, temperature } = req.body;
    const petRef = ref(database, 'petData'); 

    try {
        await set(petRef, { heartRate, temperature });
        res.status(200).json({ message: "Data successfully saved to Firebase Realtime Database." });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/api/petData', async (req, res) => {
    const petRef = ref(database, 'petData');

    try {
        const snapshot = await get(petRef);
        if (snapshot.exists()) {
            res.json(snapshot.val());
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
