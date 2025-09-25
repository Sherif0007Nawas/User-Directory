# User Directory App

A **React Native Expo app** that displays users fetched from [Random User API](https://randomuser.me/api).  
This app demonstrates a clean UI with search, pull-to-refresh, skeleton loading, dark/light mode, and smooth navigation.

---

## **Features**

- User List with **search by name or email**
- User Detail screen with:
  - Profile picture
  - Full name
  - Email & phone
  - Location (city, country)
- **Pull-to-refresh** on the list
- **Native skeleton loader** while fetching data
- **Light / Dark mode toggle**
- Smooth **fade-in animation** for User Detail screen
- Responsive and clean UI for all devices

---

## **Tech Stack**

- **Frontend:** React Native (Expo)
- **Navigation:** Expo Router (React Navigation)
- **Data Fetching:** Axios
- **List Rendering:** FlatList
- **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)

---

## 📂 Folder Structure  

<img width="416" height="312" alt="image" src="https://github.com/user-attachments/assets/251b899d-720e-48c1-abed-d508de3dbe6e" />

---

## **Setup Instructions**

1. **Clone the repository**
```bash
git clone <YOUR_REPO_URL>
cd user-directory

2.**Install dependencies**

npm install

3. **Start the Expo server**

npm start

4.**Run on simulator or physical device**

-Open Expo Go on your mobile device
-Scan the QR code from the terminal or Expo DevTools
---

#**Live Demo via Expo**

-Start the Expo server with npm start

-Select Tunnel connection

-Scan the QR code below with Expo Go on your device:

<img width="265" height="322" alt="image" src="https://github.com/user-attachments/assets/724a0987-26ca-483f-8e75-030543f99726" />
---
**Commands**
# Fetch 20 users from API
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
---

## **Notes**

-The app is fully conflict-free and does not require any additional packages beyond Expo defaults.

-Skeleton loading is implemented with native Views + ActivityIndicator.

-Dark mode works globally for both User List and Detail screens.

-Smooth fade animations enhance the UX for User Detail view.
----

## **Author**

SHERIF NAWAS S
GitHub: https://github.com/Sherif0007Nawas

LinkedIn: https://www.linkedin.com/in/sherif-nawas
