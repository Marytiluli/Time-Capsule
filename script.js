document.addEventListener("DOMContentLoaded", () => {
    const capsuleForm = document.getElementById("capsule-form");
    const capsuleMessage = document.getElementById("capsule-message");
    const releaseDateInput = document.getElementById("release-date");
    const capsulesList = document.getElementById("capsules");
  
    let capsules = [];
  
    // Load capsules from localStorage
    function loadCapsules() {
      const data = localStorage.getItem("timeCapsules");
      capsules = data ? JSON.parse(data) : [];
    }
  
    // Save capsules to localStorage
    function saveCapsules() {
      localStorage.setItem("timeCapsules", JSON.stringify(capsules));
    }
  
    // Render all capsules
    function renderCapsules() {
      capsulesList.innerHTML = "";
      capsules.forEach((capsule, index) => createCapsuleEntry(capsule, index));
    }
  
    // Create a capsule entry
    function createCapsuleEntry(capsule, index) {
      const li = document.createElement("li");
      li.classList.add("capsule");
  
      const title = document.createElement("h3");
      title.textContent = `Capsule #${index + 1}`;
  
      const createdDateDiv = document.createElement("div");
      createdDateDiv.classList.add("date");
      createdDateDiv.textContent = `Created: ${capsule.createdDate}`;
  
      const releaseDateDiv = document.createElement("div");
      releaseDateDiv.classList.add("date");
      releaseDateDiv.textContent = `Releases: ${capsule.releaseDate}`;
  
      const messageDiv = document.createElement("div");
      const now = new Date();
      const release = new Date(capsule.releaseDate);
  
      if (now >= release) {
        messageDiv.classList.add("status");
        messageDiv.textContent = capsule.message;
      } else {
        messageDiv.classList.add("countdown");
        const diff = release - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        messageDiv.textContent = `Opens in ${days}d ${hours}h ${minutes}m`;
      }
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Capsule";
      deleteButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this capsule?")) {
          capsules.splice(index, 1);
          saveCapsules();
          renderCapsules();
        }
      });
  
      li.append(title, createdDateDiv, releaseDateDiv, messageDiv, deleteButton);
      capsulesList.appendChild(li);
    }
  
    // Add a new capsule
    capsuleForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = capsuleMessage.value.trim();
      const releaseDate = releaseDateInput.value;
  
      if (!message || !releaseDate) {
        alert("Please fill out both the message and a release date.");
        return;
      }
  
      const newCapsule = {
        message,
        releaseDate,
        createdDate: new Date().toLocaleDateString(),
      };
  
      capsules.push(newCapsule);
      saveCapsules();
      renderCapsules();
      capsuleForm.reset();
    });
  
    // Update the countdown display for capsules every minute
    function updateCountdowns() {
      renderCapsules();
    }
  
    // Load existing capsules on page load
    loadCapsules();
    renderCapsules();
  
    // Set an interval to update countdowns automatically
    setInterval(updateCountdowns, 60000);
  });
  