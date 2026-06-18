# Pro-Manage

A real-time collaborative project management platform that combines Kanban-based task management, team communication, analytics, and video conferencing in a single workspace.

---

## Overview

ProjectFlow allows project managers to create and manage projects, assign tasks, track progress through checklists, communicate with team members, and monitor project performance in real time.

The platform uses a Kanban workflow consisting of:

- Backlog
- To Do
- In Progress
- Done

Tasks can be assigned to team members, monitored through checklists, and automatically updated based on completion status and due dates.

In addition to project management, the platform provides integrated team communication through real-time chat, direct messaging, group messaging, and WebRTC-powered voice/video calls.

---

## Features

### Authentication & Authorization

- User Registration & Login
- JWT Authentication
- Role-Based Access Control (RBAC)
- Secure Project Invitation System
- Email-Based Invitations

### Roles

#### Project Manager

- Create and manage projects
- Invite and remove members
- Assign tasks
- Monitor team analytics
- Manage project communication

#### Team Member

- Join projects using invitation codes
- View assigned tasks
- Update assigned checklist items
- Participate in chats and calls

---

## Project Management

### Projects

- Create multiple projects
- Join projects via invitation code
- Switch between projects
- Manage project members

### Kanban Board

Columns:

- Backlog
- To Do
- In Progress
- Done

### Tasks

- Create tasks
- Assign tasks to members
- Add due dates
- Add descriptions
- Add checklists
- Track progress

---

## Automated Workflow

### Due Date Expired

Tasks automatically move to **Backlog** when they exceed the due date.

### Checklist Progress

- Any checklist item completed → Task moves to **In Progress**
- All checklist items completed → Task moves to **Done**

---

## Permission System

Only the assigned member can update checklist items.

Rules:

- Assigned member can mark checklist items.
- Other members can view progress.
- Project manager can monitor all tasks.
- Permission validation is enforced on the backend.

---

## Real-Time Collaboration

### Live Updates

Users receive real-time updates for:

- Task assignments
- Checklist changes
- Task status updates
- Member activity

### Notifications

- New task assigned
- Project invitation received
- New messages
- Incoming calls
- Member activity

---

## Team Communication

### Group Chat

- Project-wide messaging
- Team channels
- Real-time communication

### Direct Messaging

- One-to-one chat
- Online status
- Instant message delivery

---

## Voice & Video Calls

Powered by WebRTC.

Features:

- One-to-One Calls
- Group Calls
- Audio Calls
- Video Calls
- Incoming Call Notifications
- Call Accept/Reject Actions

---

## Team Management

Project managers can:

- Add members
- Remove members
- Manage team roles
- Track member performance

### Invitation Workflow

1. Manager sends invitation.
2. Email containing invitation code is sent.
3. Existing users sign in.
4. New users register.
5. User enters invitation code.
6. User joins the project.

---

## Analytics Dashboard

Project managers can monitor:

- Assigned Tasks
- Pending Tasks
- In Progress Tasks
- Completed Tasks
- Backlog Tasks
- Overdue Tasks
- Member Productivity

---

## Tech Stack

### Frontend

- React.js
- React Router
- TanStack Query
- Tailwind CSS
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Socket.IO
- Prisma ORM

### Database

- PostgreSQL

### Real-Time Communication

- Socket.IO

### Video & Voice Calls

- WebRTC
- STUN/TURN Servers

### Authentication

- JWT Authentication
- Role-Based Access Control

### Email Service

- Nodemailer / Resend

---

## System Architecture

```text
Frontend (React)
       │
       ▼
Backend (Node.js + Express)
       │
 ┌─────┼─────────────┐
 │     │             │
 ▼     ▼             ▼
PostgreSQL      Socket.IO     Email Service
 │                   │
 ▼                   ▼
Prisma ORM      Real-Time Events
                     │
                     ▼
                 WebRTC Calls
```

## Core Modules

- Authentication
- Projects
- Members
- Kanban Board
- Tasks
- Checklists
- Invitations
- Notifications
- Analytics
- Chat
- Video Calls
- Team Management

---

## Security

- JWT Authentication
- Protected Routes
- Role-Based Permissions
- Backend Permission Validation
- Secure Invitation Codes
- Input Validation & Sanitization

---

## Future Enhancements

- File Attachments
- Calendar Integration
- Activity Timeline
- AI Task Suggestions
- AI Meeting Summaries
- Screen Sharing
- Mobile Application
- Push Notifications

---

## Goal

To provide an all-in-one workspace where teams can manage projects, collaborate in real time, communicate efficiently, and track productivity through a unified platform.
