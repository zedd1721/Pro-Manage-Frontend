Build only the **Analytics Page UI** for a project management web app.

Do not build backend logic.
Do not integrate APIs.
Use only static/dummy data for now.
The UI should be ready so that API data can be connected later.

Tech stack:

* React
* Tailwind CSS
* Framer Motion optional
* Recharts optional for simple charts

Page name:
**Analytics**

The Analytics page should show project-level analytics and member-wise analytics for the currently selected project.

---

# Page Layout

Create a clean, modern SaaS dashboard UI.

The page should have:

1. Page Header
2. Project Analytics Horizontal Card
3. Member Analytics Section
4. Responsive layout for desktop, tablet, and mobile

Use a professional project management dashboard style.

Design should be:

* Clean
* Modern
* Minimal
* Easy to understand
* Card-based
* Responsive
* Suitable for dark mode or light mode depending on existing app theme

---

# 1. Page Header

At the top of the page, show:

Title:
**Analytics**

Subtitle:
**Track project progress and member performance in one place.**

Optional right-side small text:
**Current Project: ProjectFlow**

Do not add filters, date range picker, export button, or extra features.

---

# 2. Project Analytics Horizontal Card

Create one large horizontal analytics card at the top.

This card should show overall project statistics using static data.

Card title:
**Project Overview**

Inside the card, show analytics items horizontally.

Analytics items:

* Total Tasks
* Backlog Tasks
* To Do Tasks
* In Progress Tasks
* Done Tasks
* Overdue Tasks

Each analytics item should include:

* Label
* Number
* Small icon
* Subtle background
* Clean spacing

Example static data:

```js
const projectAnalytics = {
  totalTasks: 48,
  backlogTasks: 8,
  todoTasks: 14,
  inProgressTasks: 11,
  doneTasks: 15,
  overdueTasks: 5,
};
```

The horizontal card should look premium and organized.

Desktop:

* All analytics items should appear in one horizontal row if space allows.

Tablet:

* Items can wrap into 2 rows.

Mobile:

* Items should stack into a grid or vertical list.

---

# 3. Member Analytics Section

Below the Project Overview card, create a section:

Title:
**Member Analytics**

Subtitle:
**View task progress for each team member.**

Each member should be displayed in a separate card.

Each member card should include:

* Member name
* Member role
* Avatar or initials
* Assigned Tasks
* Pending Tasks
* In Progress Tasks
* Completed Tasks
* Backlog Tasks

Use static member data.

Example static data:

```js
const membersAnalytics = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    assignedTasks: 12,
    pendingTasks: 4,
    inProgressTasks: 3,
    completedTasks: 5,
    backlogTasks: 0,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Backend Developer",
    assignedTasks: 15,
    pendingTasks: 5,
    inProgressTasks: 4,
    completedTasks: 4,
    backlogTasks: 2,
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "UI/UX Designer",
    assignedTasks: 9,
    pendingTasks: 2,
    inProgressTasks: 2,
    completedTasks: 5,
    backlogTasks: 0,
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "QA Engineer",
    assignedTasks: 12,
    pendingTasks: 3,
    inProgressTasks: 2,
    completedTasks: 6,
    backlogTasks: 1,
  },
];
```

---

# Member Card Design

Each member card should look clean and compact.

Top section:

* Avatar or initials on the left
* Member name
* Member role

Below that:
Show analytics in small mini-stat boxes.

Mini-stat boxes:

* Assigned
* Pending
* In Progress
* Completed
* Backlog

Each mini-stat box should show:

* Label
* Count

Do not add edit buttons, delete buttons, filters, dropdowns, charts, search, or extra actions.

---

# UI Styling Requirements

Use Tailwind CSS.

Use:

* Rounded cards
* Soft shadows
* Good spacing
* Clear typography
* Subtle borders
* Hover effects on cards
* Responsive grid
* Consistent colors
* Professional SaaS dashboard look

Suggested layout:

```txt
Analytics Page
│
├── Header
│
├── Project Overview Horizontal Card
│   ├── Total Tasks
│   ├── Backlog
│   ├── To Do
│   ├── In Progress
│   ├── Done
│   └── Overdue
│
└── Member Analytics
    ├── Member Card 1
    ├── Member Card 2
    ├── Member Card 3
    └── Member Card 4
```

---

# Component Structure

Create reusable components:

* AnalyticsPage
* ProjectOverviewCard
* ProjectStatItem
* MemberAnalyticsCard
* MemberStatItem

Keep the code clean and easy to modify later.

Static data should be placed at the top of the file or in a separate constants section.

---

# API Integration Readiness

Design the data structure so that later I can replace static data with API response easily.

Do not hardcode values directly inside JSX.
Use mapped arrays wherever possible.

Example:

```js
projectStats.map((stat) => <ProjectStatItem key={stat.label} {...stat} />)
membersAnalytics.map((member) => <MemberAnalyticsCard key={member.id} member={member} />)
```

---

# Final Output Requirement

Generate only the Analytics UI page.

Do not create backend.
Do not create database.
Do not add routing unless necessary.
Do not add authentication.
Do not add extra features.

The final result should be a polished, responsive Analytics dashboard UI for my project management application.
