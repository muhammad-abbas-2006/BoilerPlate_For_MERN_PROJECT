// app.js
import express from "express"
import cors from "cors"
import User from "./models/user.modal.js"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: "User already exists" })

    const user = new User({ name, email, password })
    await user.save()

    res.status(201).json({ message: "User created successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Data missing" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await user.isPasswordCorrect(password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  res.json({ message: "Login successful" });
});

export default app;