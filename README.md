# Time Capsule 

**Time Capsule** allows users to write messages to their future selves, seal them with a release date, and unlock them once the date is reached. It's a fun and reflective way to preserve thoughts, memories, or intentions for future moments.

---

## Features
- **Write Messages**: Craft personal messages and seal them in a time capsule.
- **Set Release Date**: Choose when the capsule will be unlocked.
- **Countdown Timer**: Displays days, hours, and minutes remaining until the capsule opens.
- **Capsule Management**: View, delete, and organize capsules easily.
- **Persistent Storage**: Capsules are stored locally using `localStorage` for offline access.

---

## Tech Stack
- **HTML5**: Structure and layout.
- **CSS3**: Styling and responsiveness.
- **JavaScript**: Dynamic interactivity and local data storage.

---

## Getting Started

### Prerequisites
- Any modern web browser (e.g., Chrome, Firefox, Edge).

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/time-capsule.git
   cd time-capsule
   ```
2. **Run the App**:
   - Open the `index.html` file in your browser.

---

## Usage
1. **Create a Capsule**:
   - Write your message in the text area.
   - Select a release date from the calendar input.
   - Click the "Seal Capsule" button.
2. **View Capsules**:
   - Scroll through the "Sealed Capsules" list to see all your entries.
   - Capsules display the countdown until they unlock.
3. **Delete Capsules**:
   - Click the "Delete Capsule" button to remove an entry permanently.
4. **Unlocking Capsules**:
   - Once the release date is reached, the capsule will automatically display its message.

---

## Responsive Design
Time Capsule is fully responsive:
- **Desktop**: Clean layout with sections spaced for readability.
- **Mobile**: Optimized for smaller screens with resized text and compact spacing.

---

## How It Works
1. Messages and release dates are saved in the browser's `localStorage`.
2. The app periodically checks the release dates and updates the countdown dynamically.
3. Capsules are unlocked automatically when the specified date is reached.

---

## Future Enhancements
- **Email Notifications**: Send reminders when a capsule is about to unlock.
- **Themes**: Add light/dark mode options.
- **Export/Import Data**: Allow users to back up capsules or transfer them between devices.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.