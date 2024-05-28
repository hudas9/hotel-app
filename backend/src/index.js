import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: hashedPassword,
    },
  });

  res.json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ id: user.id, email: user.email }, "secret", {
        expiresIn: "1h",
      });
      return res.json({ token });
    }
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.get("/me", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "secret");
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
