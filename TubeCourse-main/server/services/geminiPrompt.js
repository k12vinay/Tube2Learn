// services/geminiPrompt.js

export function getCourseGenerationPayload(videos) {
  const lessonLines = videos
    .map((v, i) => `${i + 1}. ${v.title} - ${v.videoURL}`)
    .join('\n');

  const isSingleVideo = videos.length < 3;
  const minModules = isSingleVideo ? 1 : 3;
  const maxModules = isSingleVideo ? 2 : 6;

  const prompt = `
You are an expert course designer.

Create a ${isSingleVideo ? 'mini-course' : 'comprehensive course'} based on the following YouTube videos:

${lessonLines}

Instructions:
- The number of **lessons** must be equal to the number of videos listed.
- Group related lessons into **${minModules} to ${maxModules} modules**.
- Each module should have a short description.
- Each **lesson** must include:
  - The exact **video title**
  - The **videoURL**
  - A short summary/description
  - At least **one medium-level quiz question**
  - At least **one hard-level quiz question**
- Include 1–2 practical projects at the end to apply the skills.
`;

  const responseSchema = {
    type: "OBJECT",
    properties: {
      "title": { "type": "STRING", "description": "Overall course title" },
      "targetAudience": { "type": "STRING", "description": "Who is this course for?" },
      "estimatedDuration": { "type": "STRING", "description": "Estimated time to complete" },
      "modules": {
        "type": "ARRAY",
        "items": {
          "type": "OBJECT",
          "properties": {
            "title": { "type": "STRING", "description": "Module title" },
            "description": { "type": "STRING", "description": "Module description" },
            "lessons": {
              "type": "ARRAY",
              "items": {
                "type": "OBJECT",
                "properties": {
                  "title": { "type": "STRING", "description": "Video title (must match original)" },
                  "videoURL": { "type": "STRING", "description": "Video URL (must match original)" },
                  "description": { "type": "STRING", "description": "Short summary" },
                  "quiz": {
                    "type": "ARRAY",
                    "items": {
                      "type": "OBJECT",
                      "properties": {
                        "difficulty": { "type": "STRING", "enum": ["medium", "hard"] },
                        "question": { "type": "STRING" },
                        "options": {
                          "type": "ARRAY",
                          "items": { "type": "STRING" }
                        },
                        "correctAnswer": { "type": "INTEGER", "description": "Index 0-3" }
                      },
                      "required": ["difficulty", "question", "options", "correctAnswer"]
                    }
                  }
                },
                "required": ["title", "videoURL", "description", "quiz"]
              }
            }
          },
          "required": ["title", "description", "lessons"]
        },
        "minItems": minModules,
        "maxItems": maxModules
      },
      "projects": {
        "type": "ARRAY",
        "items": {
          "type": "OBJECT",
          "properties": {
            "title": { "type": "STRING" },
            "description": { "type": "STRING" },
            "difficulty": { "type": "STRING", "enum": ["Beginner", "Intermediate", "Advanced"] },
            "keySkillsCovered": { "type": "ARRAY", "items": { "type": "STRING" } },
            "estimatedTime": { "type": "STRING" },
            "milestones": { "type": "ARRAY", "items": { "type": "STRING" } },
            "suggestedTools": { "type": "ARRAY", "items": { "type": "STRING" } },
            "bonusFeatures": { "type": "ARRAY", "items": { "type": "STRING" } }
          },
          "required": ["title", "description", "difficulty", "keySkillsCovered", "estimatedTime", "milestones", "suggestedTools"]
        }
      }
    },
    "required": ["title", "targetAudience", "estimatedDuration", "modules"]
  };

  return { prompt, generationConfig: { responseMimeType: "application/json", responseSchema } };
}