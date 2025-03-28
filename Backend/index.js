require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const bcrypt = require('bcrypt');  // Import bcrypt
const User = require('./models/userModel');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Hello Google Cloud');
});

// User Registration Route
app.post("/add", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User added successfully!", user: newUser });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Failed to add user", error });
    }
});

// Login Route (Fixed issue: changed from "/get" to "/login")
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


// Get All Users Route
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
