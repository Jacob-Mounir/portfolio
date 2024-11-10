interface Quote {
  content: string;
  author: string;
}

const quotes: Quote[] = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Alan Turing"
  },
  {
    content: "The present is theirs; the future, for which I really worked, is mine.",
    author: "Nikola Tesla"
  },
  {
    content: "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein"
  },
  {
    content: "The more precisely you know where you are, the less precisely you can know your momentum.",
    author: "Werner Heisenberg"
  },
  {
    content: "The most beautiful experience we can have is the mysterious.",
    author: "Albert Einstein"
  },
  {
    content: "The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson"
  },
  {
    content: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu"
  },
  {
    content: "The universe is not only stranger than we imagine, it is stranger than we can imagine.",
    author: "J.B.S. Haldane"
  },
  // Add hundreds more quotes here...
  // Science & Technology
  {
    content: "Innovation is the outcome of a habit, not a random act.",
    author: "Sukant Ratnakar"
  },
  {
    content: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates"
  },
  {
    content: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    content: "Technology is best when it brings people together.",
    author: "Matt Mullenweg"
  },
  {
    content: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke"
  },
  // Philosophy & Wisdom
  {
    content: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    content: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    content: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche"
  },
  {
    content: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  // Psychology & Mind
  {
    content: "The mind is not a vessel to be filled but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    content: "Everything can be taken from a man but one thing: the last of human freedoms - to choose one's attitude in any given set of circumstances.",
    author: "Viktor Frankl"
  },
  {
    content: "The unconscious mind works without your knowledge and that is the way it prefers.",
    author: "Carl Jung"
  },
  // Innovation & Creativity
  {
    content: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    content: "The greatest invention in the world is the mind of a child.",
    author: "Thomas Edison"
  },
  // Motivation & Success
  {
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    content: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    content: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  // Humor in Science
  {
    content: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra"
  },
  {
    content: "There are 10 types of people in the world: those who understand binary, and those who don't.",
    author: "Anonymous"
  },
  // Deep Thoughts
  {
    content: "The cosmos is within us. We are made of star-stuff.",
    author: "Carl Sagan"
  },
  {
    content: "In nature, nothing is perfect and everything is perfect.",
    author: "Alice Walker"
  },
  {
    content: "Time is an illusion. Lunchtime doubly so.",
    author: "Douglas Adams"
  },
  // Mathematics & Logic
  {
    content: "Pure mathematics is, in its way, the poetry of logical ideas.",
    author: "Albert Einstein"
  },
  {
    content: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
    author: "William Paul Thurston"
  },
  // Modern Wisdom
  {
    content: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    content: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  // AI & Future
  {
    content: "The development of full artificial intelligence could spell the end of the human race.",
    author: "Stephen Hawking"
  },
  {
    content: "AI is likely to be either the best or worst thing to happen to humanity.",
    author: "Elon Musk"
  },
  // Programming Wisdom
  {
    content: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  // Design Philosophy
  {
    content: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    content: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  // Life & Purpose
  {
    content: "Life is what happens while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "The purpose of life is not to be happy. It is to be useful.",
    author: "Ralph Waldo Emerson"
  },
  // Would you like me to continue with more quotes? I can add more categories and quotes.
  // Finance & Wealth
  {
    content: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "Philip Fisher"
  },
  {
    content: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
  },
  {
    content: "The four most expensive words in the English language are 'This time it's different.'",
    author: "Sir John Templeton"
  },
  {
    content: "The goal isn't more money. The goal is living life on your terms.",
    author: "Chris Brogan"
  },
  {
    content: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett"
  },
  {
    content: "It's not how much money you make, but how much money you keep.",
    author: "Robert Kiyosaki"
  },
  {
    content: "The only way to get what you're worth is to stand out, to exert emotional labor, to be seen as indispensable.",
    author: "Seth Godin"
  },
  {
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    author: "Ayn Rand"
  },
  // Business Strategy
  {
    content: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates"
  },
  {
    content: "Don't find customers for your products, find products for your customers.",
    author: "Seth Godin"
  },
  {
    content: "The best investment you can make is in yourself.",
    author: "Warren Buffett"
  },
  {
    content: "Business opportunities are like buses, there's always another one coming.",
    author: "Richard Branson"
  },
  {
    content: "Chase the vision, not the money; the money will end up following you.",
    author: "Tony Hsieh"
  },
  // Entrepreneurship
  {
    content: "If you're not embarrassed by the first version of your product, you've launched too late.",
    author: "Reid Hoffman"
  },
  {
    content: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg"
  },
  {
    content: "Ideas are easy. Implementation is hard.",
    author: "Guy Kawasaki"
  },
  {
    content: "If you can't feed a team with two pizzas, it's too large.",
    author: "Jeff Bezos"
  },
  // Investment Wisdom
  {
    content: "Be fearful when others are greedy and greedy when others are fearful.",
    author: "Warren Buffett"
  },
  {
    content: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    content: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott"
  },
  // Business Leadership
  {
    content: "Management is doing things right; leadership is doing the right things.",
    author: "Peter Drucker"
  },
  {
    content: "The role of leadership is to transform the complex situation into small pieces and prioritize them.",
    author: "Carlos Ghosn"
  },
  {
    content: "Culture eats strategy for breakfast.",
    author: "Peter Drucker"
  },
  // Smart Money Management
  {
    content: "Never depend on a single income. Make an investment to create a second source.",
    author: "Warren Buffett"
  },
  {
    content: "The more you learn, the more you earn.",
    author: "Warren Buffett"
  },
  {
    content: "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make.",
    author: "Dave Ramsey"
  },
  // Market Psychology
  {
    content: "Markets are never wrong – opinions often are.",
    author: "Jesse Livermore"
  },
  {
    content: "The market is a pendulum that forever swings between unsustainable optimism and unjustified pessimism.",
    author: "Benjamin Graham"
  },
  {
    content: "The individual investor should act consistently as an investor and not as a speculator.",
    author: "Benjamin Graham"
  },
  // Wealth Building
  {
    content: "Wealth is not about having a lot of money; it's about having a lot of options.",
    author: "Chris Rock"
  },
  {
    content: "The only way to permanently change the temperature in the room is to reset the thermostat. In the same way, the only way to change your level of financial success 'permanently' is to reset your financial thermostat.",
    author: "T. Harv Eker"
  },
  {
    content: "Don't tell me what you value, show me your budget, and I'll tell you what you value.",
    author: "Joe Biden"
  }
];

export default quotes;