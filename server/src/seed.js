require("dotenv").config();
const mongoose = require("mongoose");
const Problem = require("./models/problem");

const problems = [
  {
    title: "Parking Lot System",
    difficulty: "Easy",
    description:
      "Design a parking lot that supports different vehicle types and parking spots.",
    requirements: [
      "Support cars, bikes and trucks",
      "Assign suitable parking spots",
      "Generate parking tickets",
      "Release spots when vehicles leave",
    ],
  },
  {
    title: "Vending Machine",
    difficulty: "Easy",
    description:
      "Design a vending machine that manages products, payments and dispensing.",
    requirements: [
      "Display available products",
      "Accept payments",
      "Dispense selected product",
      "Return change",
    ],
  },
  {
    title: "Elevator System",
    difficulty: "Medium",
    description:
      "Design an elevator system that handles floor requests and elevator movement.",
    requirements: [
      "Support multiple floors",
      "Handle elevator requests",
      "Move elevators between floors",
      "Handle multiple elevators",
    ],
  },
  {
    title: "Library Management",
    difficulty: "Medium",
    description:
      "Design a library system for managing books, members and borrowing.",
    requirements: [
      "Add and search books",
      "Register members",
      "Borrow books",
      "Return books",
    ],
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    await Problem.deleteMany({});
    await Problem.insertMany(problems);

    console.log("Problems inserted successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seed failed:", error);
  }
}

seedDatabase();