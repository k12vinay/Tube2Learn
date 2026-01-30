import { Course } from '../types/course';
import client from '../api/client';

export const generateCourseFromPlaylist = async (playlistUrl: string): Promise<Course> => {
  const response = await client.post('/process-playlist', { playlistUrl });
  const resJson = response.data;

  const course: Course = {
    id: resJson.id, // Generate a temporary ID if not provided by backend yet, or usage logic handles it
    // The backend /process-playlist returns { id, title, source, raw, course: {...} }
    title: resJson.title,
    source: resJson.source,
    raw: resJson.raw,
    ...resJson.course,
  };

  return course;
};

export const saveCourseToDB = async (course: any) => {
  const res = await client.post('/courses', course);
  return res.data;
};
