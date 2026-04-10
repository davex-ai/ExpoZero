# ⚡ ExpoZero

> Stop wasting hours on setup. Clone, run, and start building.

ExpoZero is a **production-ready Expo starter template** with modern tooling preconfigured — so you can focus on building your app, not fighting setup.

---

## 🚀 Features

* ⚡ **Expo SDK 54** (latest stable)
* 🧭 **Expo Router** (file-based routing)
* 🎨 **NativeWind (TailwindCSS for React Native)**
* 🔥 **TypeScript (strict mode enabled)**
* 🧩 Clean project structure (`app/`, `components/`)
* ⚙️ Preconfigured Babel + Reanimated
* 📱 Android, iOS, and Web support
* 🧠 Path aliases (`@/`)

---

## 📦 Tech Stack

* Expo
* React Native
* Expo Router
* NativeWind (TailwindCSS)
* TypeScript
* React Native Reanimated

---

## 🏁 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/davex-ai/expozero.git
cd expozero
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

---

## 📱 Run on Device

* Press **a** → Android
* Press **i** → iOS
* Press **w** → Web

---

## 🗂 Project Structure

```
app/            → Routes (Expo Router)
components/     → Reusable UI
assets/         → Images, icons
```

---

## 🎨 Styling (NativeWind)

Use Tailwind classes directly:

```tsx
<Text className="text-xl font-bold text-blue-500">
  Hello World
</Text>
```
## 🧪 Verify Your Setup

Make sure your environment is correctly set up before running the project.

### Node.js

```bash
node -v
```

Expected output:

```bash
v22.x.x
```

---

### Expo CLI

```bash
npx expo -v
```

Expected output:

```bash
54.x.x
```

---

### Expo SDK Version

```bash
npx expo config --json | grep sdkVersion
```

Expected output:

```bash
"54.0.0"
```

---

## ⚠️ Notes

* If your versions don’t match exactly, that’s okay — just ensure they’re **compatible with Expo SDK 54**
* Avoid using outdated global Expo CLI installs

---


## 🧭 Routing (Expo Router)

Create a new screen:

```
app/profile.tsx
```

It automatically becomes:

```
/profile
```

---

## ⚙️ Configuration Included

* Babel configured for NativeWind + Reanimated
* Tailwind config ready
* TypeScript strict mode enabled
* Path alias (`@/` → root)

---

## 💡 Why This Exists

Setting up a React Native app with:

* routing
* styling
* animations
* TypeScript

…can take hours (or break your sanity).

ExpoZero removes that friction.

---

## 🛠 Perfect For

* MVPs
* Hackathons
* Side projects
* Production apps
* Beginners who don’t want setup hell

---

## 🧠 Philosophy

> Build fast. Iterate faster. Ship.

---

## 📌 Future Improvements

* Auth template (Firebase / Supabase)
* API layer starter
* Dark mode system
* UI component library

---

## 🤝 Contributing

Pull requests are welcome.

---

## ⭐ Support

If this saved you time, drop a ⭐ on the repo.
