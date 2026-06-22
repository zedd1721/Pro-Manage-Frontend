export const members = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    role: "Project Manager",
    status: "Online",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya@example.com",
    role: "Backend Developer",
    status: "Online",
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan@example.com",
    role: "Frontend Developer",
    status: "Offline",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha@example.com",
    role: "UI/UX Designer",
    status: "Offline",
  },
];

export const directMessages = [
  {
    id: 1,
    name: "Aarav Sharma",
    status: "Online",
    lastMessage: "Can you review the task updates?",
  },
  {
    id: 2,
    name: "Priya Mehta",
    status: "Online",
    lastMessage: "Backend API structure is ready.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    status: "Offline",
    lastMessage: "I will update the UI tomorrow.",
  },
];

export const groups = [
  {
    id: 1,
    name: "Frontend Team",
    membersCount: 4,
    description: "UI development and frontend tasks.",
  },
  {
    id: 2,
    name: "Backend Team",
    membersCount: 3,
    description: "APIs, database, authentication, and server logic.",
  },
  {
    id: 3,
    name: "Project Discussion",
    membersCount: 8,
    description: "General project updates and discussions.",
  },
];

export const dmChats = {
  1: [
    {
      id: 1,
      senderId: 1,
      text: "Hey! Can you review the task updates?",
      time: "10:24 AM",
    },
    {
      id: 2,
      senderId: 0,
      text: "Sure, I'll take a look right now.",
      time: "10:26 AM",
    },
    {
      id: 3,
      senderId: 1,
      text: "Great, let me know if anything needs changes.",
      time: "10:27 AM",
    },
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      text: "Backend API structure is ready.",
      time: "09:15 AM",
    },
    {
      id: 2,
      senderId: 0,
      text: "Awesome! Are the auth routes done too?",
      time: "09:18 AM",
    },
    {
      id: 3,
      senderId: 2,
      text: "Yes, login and signup are both working.",
      time: "09:20 AM",
    },
  ],
  3: [
    {
      id: 1,
      senderId: 3,
      text: "I will update the UI tomorrow.",
      time: "Yesterday",
    },
  ],
};

export const groupChats = {
  1: [
    {
      id: 1,
      senderId: 1,
      text: "Morning team! Working on the dashboard today.",
      time: "09:02 AM",
    },
    { id: 2, senderId: 0, text: "I'll handle the task cards.", time: "09:05 AM" },
    { id: 3, senderId: 3, text: "I can take care of the sidebar.", time: "09:08 AM" },
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      text: "Database migration is complete.",
      time: "08:40 AM",
    },
    {
      id: 2,
      senderId: 0,
      text: "Perfect, I'll test the endpoints now.",
      time: "08:45 AM",
    },
  ],
  3: [
    { id: 1, senderId: 1, text: "Sprint review at 3 PM everyone.", time: "11:00 AM" },
    { id: 2, senderId: 4, text: "Noted!", time: "11:02 AM" },
  ],
};

export const groupMembers = {
  1: [
    { id: 1, name: "Aarav Sharma", role: "Project Manager", status: "Online" },
    { id: 3, name: "Rohan Verma", role: "Frontend Developer", status: "Offline" },
    { id: 4, name: "Neha Singh", role: "UI/UX Designer", status: "Offline" },
    { id: 0, name: "You", role: "Frontend Developer", status: "Online" },
  ],
  2: [
    { id: 1, name: "Aarav Sharma", role: "Project Manager", status: "Online" },
    { id: 2, name: "Priya Mehta", role: "Backend Developer", status: "Online" },
    { id: 0, name: "You", role: "Backend Developer", status: "Online" },
  ],
  3: [
    { id: 1, name: "Aarav Sharma", role: "Project Manager", status: "Online" },
    { id: 2, name: "Priya Mehta", role: "Backend Developer", status: "Online" },
    { id: 3, name: "Rohan Verma", role: "Frontend Developer", status: "Offline" },
    { id: 4, name: "Neha Singh", role: "UI/UX Designer", status: "Offline" },
    { id: 0, name: "You", role: "Team Member", status: "Online" },
  ],
};

export const availableUsers = [
  { id: 5, name: "Karan Patel", role: "DevOps Engineer", status: "Online" },
  { id: 6, name: "Sara Khan", role: "QA Tester", status: "Offline" },
  { id: 7, name: "Vikram Joshi", role: "Mobile Developer", status: "Online" },
  { id: 8, name: "Ananya Reddy", role: "Data Analyst", status: "Offline" },
  { id: 9, name: "Arjun Nair", role: "Security Engineer", status: "Online" },
];

export const AVATAR_COLORS = [
  "bg-violet-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-rose-500",
];
