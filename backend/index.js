const express = require("express");
const app = express();
const port = 3000;

app.get("/api/jokes", (req, res) => {
  const Jokes = [
    {
      id: 1,
      name: "Funny One",
      joke: "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 2,
      name: "Math Humor",
      joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    },
    {
      id: 3,
      name: "Geometry Fun",
      joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
    },
    {
      id: 4,
      name: "Eyebrow Surprise",
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 5,
      name: "Piano Player",
      joke: "I used to play piano by ear, but now I use my hands and fingers.",
    },
    {
      id: 6,
      name: "Coffee Lover",
      joke: "Why did the coffee file a police report? It got mugged.",
    },
    {
      id: 7,
      name: "Time Traveler",
      joke: "I told my wife she was overreacting. She still hasn't gotten back from 1756.",
    },
    {
      id: 8,
      name: "Foodie Joke",
      joke: "Why did the tomato turn red? Because it saw the salad dressing.",
    },
    {
      id: 9,
      name: "Tech Joke",
      joke: "Why do programmers prefer dark mode? Light attracts bugs.",
    },
    {
      id: 10,
      name: "Job Interview",
      joke: "I told my boss I needed a raise because I'm so good at math. He said, 'How do you figure?'",
    },
  ];
  console.log(req.query.search);
  if (req.query.search) {
    const filterJokes = Jokes.filter((joke) =>
      joke.name.includes(req.query.search)
    );
    console.log(filterJokes);
    res.json(filterJokes);
    return;
  }
  res.json(Jokes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
