# Teams Page UI Prompt

Build only the **Teams Page UI** for a project management web application.

This is only UI development.

Do not build backend logic.
Do not integrate APIs.
Do not create database logic.
Use only static/dummy data for now.
The UI should be structured so that API integration can be added later.

Tech stack:

* React
* Tailwind CSS
* Framer Motion optional
* Lucide React icons optional

---

# Page Name

**Teams**

The Teams page is used to manage project members and handle team communication inside the currently selected project.

The page should have two main tabs:

1. Members
2. Communication

Do not add extra tabs or extra features.

---

# Main Page Layout

Create a clean, modern SaaS dashboard UI.

The page should include:

1. Page Header
2. Tab Navigation
3. Members Tab Content
4. Communication Tab Content

Design style:

* Clean
* Modern
* Minimal
* Professional
* Responsive
* Card-based
* Suitable for a project management dashboard

---

# Page Header

At the top of the page, show:

Title:

**Teams**

Subtitle:

**Manage project members and communicate with your team.**

Optional project label:

**Current Project: ProjectFlow**

Do not add search, filters, export buttons, or unnecessary actions.

---

# Tab Navigation

Create two tabs:

## Tab 1: Members

This tab should include:

* Add Members
* Member Profile
* Member Status
* Remove Member

## Tab 2: Communication

This tab should include:

* Direct Messages
* Groups

The active tab should be clearly highlighted.

Use smooth tab switching UI.

---

# Tab 1: Members UI

The Members tab should focus on project member management.

## Section 1: Add Members

Create a card titled:

**Add Member**

Inside the card, include a simple invite form.

Fields:

* Member Email
* Role selector

Role options:

* Project Manager
* Team Member

Button:

**Send Invite**

Add helper text:

**An invitation code will be sent to the member's email.**

Use static UI only. Do not add real form submission logic.

---

## Section 2: Members List

Create a section titled:

**Project Members**

Show members as cards or a clean list.

Each member item/card should contain:

* Avatar or initials
* Member name
* Email
* Role
* Status: Online or Offline
* Remove button

Status design:

* Online: green dot
* Offline: gray dot

Remove button:

* Visible on each member card
* Use a small danger-style button
* No actual delete functionality required

Example static data:

```js
const members = [
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
  }
];
```

---

# Member Card Design

Each member card should look clean and compact.

Include:

* Avatar/initials
* Name
* Email
* Role badge
* Online/offline status indicator
* Remove button

Design requirements:

* Rounded cards
* Border
* Soft shadow
* Hover effect
* Good spacing
* Clear typography

---

# Tab 2: Communication UI

The Communication tab should focus on team messaging and calling UI.

It should have two sections:

1. Direct Messages
2. Groups

Do not create real chat logic.
Do not integrate WebRTC.
Do not integrate Socket.IO.
Only create the UI.

---

## Section 1: Direct Messages

Create a card or panel titled:

**Direct Messages**

Show a list of team members available for direct communication.

Each item should contain:

* Avatar/initials
* Member name
* Online/offline status
* Last message preview
* Chat button
* Video call button

Example static data:

```js
const directMessages = [
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
  }
];
```

Buttons:

* Message
* Video Call

These buttons should be UI only. No real functionality required.

---

## Section 2: Groups

Create a card or panel titled:

**Groups**

Show group chat cards.

Each group card should contain:

* Group name
* Number of members
* Short description
* Chat button
* Video call button

Also include a static **Create Group** button at the top of the Groups section.

Do not add modal functionality unless simple UI placeholder is needed.

Example static data:

```js
const groups = [
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
  }
];
```

---

# Communication Card Design

For Direct Messages and Groups:

Use:

* Rounded cards
* Subtle border
* Soft shadow
* Clean spacing
* Icons for chat and video call
* Hover effects
* Status indicators

The layout should feel like a mix of Slack, Linear, Notion, and ClickUp.

---

# Responsive Design

Desktop:

* Members tab:

  * Add Member card at top
  * Members displayed in grid/list below

* Communication tab:

  * Direct Messages and Groups can be displayed side-by-side if space allows

Tablet:

* Sections can stack cleanly

Mobile:

* Tabs remain usable
* Cards stack vertically
* Buttons remain easy to tap

---

# Component Structure

Create reusable components:

```text
TeamsPage
├── TeamsHeader
├── TeamsTabs
├── MembersTab
│   ├── AddMemberCard
│   └── MemberCard
└── CommunicationTab
    ├── DirectMessagesPanel
    ├── DirectMessageCard
    ├── GroupsPanel
    └── GroupCard
```

Keep static data separate from JSX.

---

# API Ready Structure

Do not hardcode values directly inside JSX.

Use arrays and map functions.

Example:

```js
members.map((member) => (
  <MemberCard key={member.id} member={member} />
));

directMessages.map((dm) => (
  <DirectMessageCard key={dm.id} message={dm} />
));

groups.map((group) => (
  <GroupCard key={group.id} group={group} />
));
```

The UI should be easy to connect with backend APIs later.

---

# Styling Requirements

Use Tailwind CSS.

The page should include:

* Professional SaaS dashboard design
* Good spacing
* Rounded corners
* Soft shadows
* Subtle borders
* Clear active tab state
* Smooth hover effects
* Responsive layout
* Clean typography
* Consistent colors

Avoid adding unnecessary features.

---

# Final Output Requirement

Generate only the **Teams Page UI**.

Do not create:

* Backend
* Database
* API calls
* Authentication logic
* Real chat logic
* Real video call logic
* Socket.IO logic
* WebRTC logic
* Extra sidebar features
* Extra tabs

Use static data only and make the UI polished, responsive, and ready for future integration.
