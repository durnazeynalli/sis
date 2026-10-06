# Student Information System (SIS)

A mobile student information system and campus social app built with React Native and Expo, powered by Firebase and Redux.

## Overview

SIS provides students with a unified mobile portal to track their academic life and connect with peers. Students can review schedules and grades, view homework and study materials, interact through posts and comments, and send direct messages to fellow students.

## Features

- **Authentication**: Email-based sign-up and sign-in backed by Firebase Auth.
- **Campus Feed & Posts**: Community feed with post creation, likes, and comment threads.
- **Academic Dashboard**: Class schedules, subject progress indicators, and grade tracking.
- **Calendar & Agenda**: Interactive agenda powered by `react-native-calendars` to keep track of deadlines and class sessions.
- **Direct Messaging**: User discovery, searchable chat list, and real-time private messaging.
- **Course Materials & Homework**: Dedicated screens for reviewing assignments and learning resources.
- **Profile & Settings**: Profile photo uploads using camera and gallery permissions via Expo Image Picker.
- **Theming & Accessibility**: Dark mode toggle with custom typography (Raleway) and UI Kitten / Eva Design system.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (Expo SDK 39)
- **UI Components**: [@ui-kitten/components](https://akveo.github.io/react-native-ui-kitten/) & Eva Design, React Native SVG
- **State Management**: Redux, Redux Thunk, Redux Persist
- **Navigation**: React Navigation v5 (Stack, Drawer, and Bottom Tabs)
- **Backend & Services**: Firebase (`@firebase`)
- **Date & Calendar**: Moment.js, `react-native-calendars`

## Project Structure

```text
student-information-system/
├── assets/            # Fonts (Raleway), app icons, and splash screens
├── commons/           # Reusable UI controls, buttons, and custom SVG icons
├── components/        # Feature components (Auth, Class, Calendar, Feed, Chat, etc.)
├── navigation/        # Drawer, bottom tab, and stack navigation setup
├── redux/             # Redux slices (auth, chats, posts, materials, theme, etc.)
├── screens/           # Main screen containers
├── styles/            # Theme tokens, dark mode handlers, global styling
└── utils/             # Firebase init, validators, date helpers, permissions
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended for Expo SDK 39 compatibility)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- **Expo Go** app installed on your physical iOS or Android device

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/durnazeynalli/sis.git
   cd sis
   ```

2. Navigate to the mobile app directory and install dependencies:
   ```bash
   cd student-information-system
   npm install
   ```

### Running the App

1. Start the Expo development server:
   ```bash
   expo start
   ```
2. Run on your target platform:
   - **Physical Device**: Scan the QR code displayed in your terminal using the Expo Go app (Android) or the default Camera app (iOS).
   - **Android Emulator**: Press `a` in the terminal or run `npm run android`.
   - **iOS Simulator**: Press `i` in the terminal or run `npm run ios`.
   - **Web**: Run `npm run web`.
