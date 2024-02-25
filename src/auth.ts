// auth.ts

import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';


// Mock user data (replace this with actual database queries)
const mockUsers = [
  {
    id: '1',
    username: 'user1',
    email: 'user1@example.com',
    password: '$2b$10$5EoSEeWQTFB2.i2E3PK99u8vuVqC4X4sbx.DhI6GJFOA/Q6Sx5sU2', // Hashed password: password123
  },
  {
    id: '2',
    username: 'user2',
    email: 'user2@example.com',
    password: '$2b$10$Q4SE62B2s1tTl9mJ3lLRme66bQlQWVmsbD9z7dIgLTbRKu7YIjB9O', // Hashed password: secret123
  },
];

// Function to generate JWT token
function generateToken(userId: string): string {
  return sign({ userId }, 'your_secret_key', { expiresIn: '1h' });
}

// Resolver function for user login
async function login(arent: any, args: any, context: any, info: any) {
  const { email, password } = args.input;
  // Find user by email
  const user = mockUsers.find((user) => user.email === email);
  if (!user) {
    throw new Error('User not found');
  }
  // Verify password
  const passwordValid = await compare(password, user.password);
  if (!passwordValid) {
    throw new Error('Invalid password');
  }
  // Generate JWT token
  const token = generateToken(user.id);
  return {
    token,
    user,
  };
}

export default {
  login,
};
