export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    isLoaned: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    isLoaned: false,
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    isLoaned: false,
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy / Adventure",
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    isLoaned: false,
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    isLoaned: false,
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    isLoaned: false,
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    isLoaned: false,
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance / Self-Help",
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making. Through 19 short stories exploring the strange ways people think about money, this book teaches you how to make better sense of one of life's most important topics. It's not just about how to invest, but about understanding the psychology behind financial decisions.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making. Through 19 short stories exploring the strange ways people think about money, this book teaches you how to make better sense of one of life's most important topics.",
    isLoaned: false,
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History / Anthropology",
    rating: 4.7,
    total_copies: 15,
    available_copies: 8,
    description:
      "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human'. Harari examines how the three great revolutions of human history - the Cognitive, Agricultural, and Scientific - have shaped society and brought us to where we are today.",
    color: "#2c3e50",
    cover: "https://m.media-amazon.com/images/I/81WZ6Qv7Z2L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human'.",
    isLoaned: false,
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business / Entrepreneurship",
    rating: 4.5,
    total_copies: 12,
    available_copies: 7,
    description:
      "The Lean Startup methodology teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development. Too many startups begin with an idea for a product that they think people want. They then spend months, sometimes years, perfecting that product without ever showing the product, even in a very rudimentary form, to the prospective customer.",
    color: "#e74c3c",
    cover: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "The Lean Startup methodology teaches you how to drive a startup-how to steer, when to turn, and when to persevere-and grow a business with maximum acceleration. It is a principled approach to new product development.",
    isLoaned: false,
  },
  {
    id: 11,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology / Cognitive Science",
    rating: 4.6,
    total_copies: 18,
    available_copies: 12,
    description:
      "In this groundbreaking work, Nobel Prize winner Daniel Kahneman shows us the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities-and also the faults and biases-of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior.",
    color: "#3498db",
    cover: "https://m.media-amazon.com/images/I/71Q4+4K4QVL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "In this groundbreaking work, Nobel Prize winner Daniel Kahneman shows us the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.",
    isLoaned: false,
  },
  {
    id: 12,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    genre: "Self-Help / Leadership",
    rating: 4.7,
    total_copies: 25,
    available_copies: 15,
    description:
      "One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for nearly three decades. It has transformed the lives of presidents and CEOs, educators and parents - in short, millions of people of all ages and occupations. Stephen Covey's book presents a principle-centered approach for solving personal and professional problems.",
    color: "#f39c12",
    cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for nearly three decades. It has transformed the lives of presidents and CEOs, educators and parents.",
    isLoaned: false,
  },
  {
    id: 13,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Strategy / Philosophy",
    rating: 4.4,
    total_copies: 8,
    available_copies: 3,
    description:
      "The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters. Each one is devoted to an aspect of warfare and how it applies to military strategy and tactics. For almost 1,500 years it was the lead text in an anthology that would be formalized as the Seven Military Classics by Emperor Shenzong of Song in 1080.",
    color: "#8b4513",
    cover: "https://m.media-amazon.com/images/I/71+5M5k5DUL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters.",
    isLoaned: false,
  },
  {
    id: 14,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature / Fiction",
    rating: 4.3,
    total_copies: 30,
    available_copies: 20,
    description:
      "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    color: "#ffd700",
    cover: "https://m.media-amazon.com/images/I/71Q4+4K4QVL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.",
    isLoaned: false,
  },
  {
    id: 15,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    genre: "Design / User Experience",
    rating: 4.5,
    total_copies: 14,
    available_copies: 9,
    description:
      "Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. The fault, argues this ingenious-even liberating-book, lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology. The Design of Everyday Things shows that good, usable design is possible.",
    color: "#9b59b6",
    cover: "https://m.media-amazon.com/images/I/81zpLhP1fVL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. The fault, argues this ingenious-even liberating-book, lies not in ourselves, but in product design.",
    isLoaned: false,
  },
];
