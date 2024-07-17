import { Response, Request, Router, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { UserErrors } from "./error";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      availableMoney: 5000, // Default value from model
    });

    res.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({ type: UserErrors.USER_NOT_FOUND });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ type: UserErrors.INVALID_PASSWORD });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, "secret");

    res.json({ token, userID: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ type: "Internal Server error" });
  }
});

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Bearer <token>
    
    // Verify JWT token
    jwt.verify(token, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { router as userRouter };
