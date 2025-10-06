// Simple mock API server for testing waitlist functionality
import cors from 'cors';
import express from 'express';
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for testing
const waitlistEntries = [];

// POST /waitlist - Submit waitlist entry
app.post('/waitlist', (req, res) => {
  try {
    const { firstName, lastName, email, country } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !country) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        errors: ['Missing required fields'],
      });
    }

    // Check for duplicate email
    const existingEntry = waitlistEntries.find(
      entry => entry.email === email.toLowerCase()
    );
    if (existingEntry) {
      return res.status(409).json({
        success: false,
        message: 'Email address is already registered for the waitlist',
      });
    }

    // Create new entry
    const newEntry = {
      id: `mock-${Date.now()}`,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      country: country.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    waitlistEntries.push(newEntry);

    console.log('New waitlist entry:', newEntry);
    console.log('Total entries:', waitlistEntries.length);

    res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: {
        id: newEntry.id,
        email: newEntry.email,
        createdAt: newEntry.createdAt,
      },
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// GET /waitlist/stats - Get waitlist statistics
app.get('/waitlist/stats', (req, res) => {
  try {
    const totalSignups = waitlistEntries.length;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentSignups = waitlistEntries.filter(
      entry => new Date(entry.createdAt) >= thirtyDaysAgo
    ).length;

    res.json({
      success: true,
      data: {
        totalSignups,
        recentSignups,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error getting waitlist stats:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// GET /waitlist - Get all entries (for debugging)
app.get('/waitlist', (req, res) => {
  res.json({
    success: true,
    data: waitlistEntries,
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  POST /waitlist - Submit waitlist entry');
  console.log('  GET /waitlist/stats - Get statistics');
  console.log('  GET /waitlist - Get all entries');
});
