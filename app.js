const express = require('express')
require('dotenv').config()
const app = express()


const dummyBlogAPIResponse = {
  success: true,
  total: 3,
  blogs: [
    {
      id: "1",
      title: "Exploring the Tranquil Hills of Himachal",
      author: "Aarav Sharma",
      content: "The misty mornings and pine-scented breeze of Himachal Pradesh are truly a balm for the weary soul...",
      imageUrl: "https://example.com/images/himachal.jpg",
      tags: ["Travel", "Nature", "India"],
      publishedAt: "2025-06-10T09:00:00Z",
      readTime: "5 min",
    },
    {
      id: "2",
      title: "React vs Vue: A Frontend Developer’s Take",
      author: "Faiz Alam",
      content: "When building a scalable frontend application, the choice between React and Vue often comes down to team familiarity and long-term support...",
      imageUrl: "https://example.com/images/react-vs-vue.jpg",
      tags: ["Tech", "Frontend", "JavaScript"],
      publishedAt: "2025-06-15T14:30:00Z",
      readTime: "7 min",
    },
    {
      id: "3",
      title: "5 Productivity Hacks for Remote Developers",
      author: "Meera Joshi",
      content: "From time-blocking to using Pomodoro timers, here are the top five techniques that have helped me stay productive while working remotely...",
      imageUrl: "https://example.com/images/productivity.jpg",
      tags: ["Productivity", "Remote Work", "Lifestyle"],
      publishedAt: "2025-06-20T08:15:00Z",
      readTime: "4 min",
    }
  ]
};



app.get('/', (req, res) => {
  res.send("this is thr faiz route ")
})

app.get('/login', (req, res) => {
  res.send('you are on the login page')
})

app.get('/post', (req, res) => {
  res.json(dummyBlogAPIResponse)
  res.status(500)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`you server is running on the port ${PORT}`)
})