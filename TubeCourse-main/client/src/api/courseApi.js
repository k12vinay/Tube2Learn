import client from './client';

export const loadCourse = async (courseId) => {
  const res = await client.get(`/courses/${courseId}`);
  return res.data;
};

export const saveCourse = async (courseData) => {
  const res = await client.post(`/courses`, courseData);
  return res.data;
};