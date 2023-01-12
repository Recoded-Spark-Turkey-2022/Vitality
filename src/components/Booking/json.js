export const json = { 
    title: "Match with the right therapist.",
    pages: [
      {
        "title": "What is your relationship status?",
        "elements": [
          {
            "type": "checkbox",
            "isRequired": true,
            "choices": [ "Single", "Married", "Divorced" ]
          }
        ]
      },
      {
        "title": "Have you ever been in therapy before?",
        "elements": [
          {
            "type": "checkbox",
            "isRequired": true,
            "choices": [
              "Yes",
              "No"
            ]
          }
        ]
      },
          {
            "type": "radiogroup",
            "title": "Are there any specific qualities that you'd like in a counselor?",
            "choices": [ "I prefer a male counselor", "I prefer a female counselor", "I prefer an older counselor (45+)", "I prefer a non-religious counselor", "I prefer an older counselor (45+)"]
          },
          {
            "type": "radiogroup",
            "title": "Are there any issues you'd like to focus on?",
            "choices": [ "Depression", "Stress and Anxiety", "Relationship issues", "Family conflicts", "Trauma and abuse", "Eating disorders"]
          },
          { type: "comment", title:"What brings you here? Please specify (in a few sentences) why you'd like counseling. This will give your counselor a good understanding of where to start." }
        ]
      };