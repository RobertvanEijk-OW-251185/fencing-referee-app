const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Fencing Referee API is running" });
});

io.on("connection", (socket) => {
	console.log("A device connected:", socket.id);
	socket.on("disconnect", () => {
		console.log("Device disconnected:", socket.id);
	});
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
		httpServer.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => console.error("MongoDB connection error:", err));
