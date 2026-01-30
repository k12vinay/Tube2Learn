import express from 'express';
import Course from '../models/Course.js';

import { auth } from '../middleware/auth.js';

const router = express.Router();

// --- GET all courses for current user ---
router.get('/', auth, async (req, res) => {
  try {
    const courses = await Course.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- GET a course by _id (ensure it belongs to user) ---
router.get('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id, userId: req.user.id });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- POST to create a new course ---
router.post('/', auth, async (req, res) => {
  try {
    const course = new Course({ ...req.body, userId: req.user.id });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data', details: err.message });
  }
});

// --- PUT to update an existing course ---
router.put('/:id', auth, async (req, res) => {
  try {
    const updated = await Course.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Course not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed', details: err.message });
  }
});

// --- DELETE a course ---
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Course.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!deleted) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
