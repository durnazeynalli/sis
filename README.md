# Student Information System (SIS) Mobile App

A full-featured mobile application built with React Native and Expo, designed to give students a unified portal for academic life—encompassing course schedules, grades, homework, study materials, campus feed discussions, and direct peer-to-peer messaging.

---

## Features

- **Authentication & User Profiles:** Secure registration and login powered by Firebase, complete with avatar uploading via device camera or gallery.
- **Academic Dashboard & Classes:** View class schedules, track course progress, and inspect grade breakdowns.
- **Course Materials & Homework:** Access distributed study materials and keep track of upcoming assignments and homework deadlines.
- **Interactive Calendar:** Visual agenda and calendar picker for scheduling classes, events, and academic deadlines.
- **Campus Social Feed & Comments:** Share campus posts, like updates, and join threaded discussions with classmates.
- **Direct Messaging:** Search for fellow students and exchange private direct messages in real time.
- **Theming & Preferences:** Integrated dark mode and light mode switching via UI Kitten and Redux state management.
- **Feedback System:** In-app feedback submission modal for reporting bugs or sharing user suggestions.

---

## Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 39)
- **UI Components & Theming:** [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) (@ui-kitten/components, @eva-design/eva), React Native SVG, custom Raleway typography
- **State Management:** [Redux](https://redux.js.org/), Redux Thunk, Redux Persist
- **Navigation:** [React Navigation 5](https://reactnavigation.org/) (Bottom Tabs, Drawer, and Stack navigators)
- **Backend & Auth:** [Firebase](https://firebase.google.com/)
- **Calendar & Utilities:** React Native Calendars, Moment.js, Expo ImagePicker, Expo Notifications

---

## Project Structure

```text
student-information-system/
├── assets/             # Icons, splash images, and custom Raleway fonts
├── commons/            # Reusable UI primitives (Buttons, Headers, Icons, Sliders)
├── components/         # Feature-specific components (Auth, Chat, Class, Calendar, Feed)
├── navigation/         # Drawer, Tab, and Stack navigation configurations
├── redux/              # Redux slices and actions (auth, chats, comments, theme, etc.)
├── screens/            # Screen views (Home, Class, Calendar, Message, Materials, etc.)
├── styles/             # Colors, themes, and global stylesheets
└── utils/              # Firebase initializers, validation, and helper functions
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally (`npm install -g expo-cli`)
- **Expo Go** app installed on your iOS or Android mobile device

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/durnazeynalli/sis.git
   cd sis/student-information-system
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   # or
   expo start
   ```

4. Scan the displayed QR code using the **Expo Go** app on Android or the Camera app on iOS to run the application on your physical device.