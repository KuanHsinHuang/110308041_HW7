const nameElement = document.getElementById("name");
const editButton = document.getElementById("editButton");

editButton.addEventListener("click", function () {
  if (editButton.textContent === "Edit") {
    const currentName = nameElement.textContent;
    nameElement.innerHTML = `<input type="text" id="nameInput" value="${currentName}">`;
    editButton.textContent = "Save";
  } else {
    const newName = document.getElementById("nameInput").value;
    nameElement.textContent = newName;
    editButton.textContent = "Edit";
  }
});

// 新增音樂功能
const addMusicButton = document.getElementById("addMusicButton");
const musicList = document.getElementById("music-list");

addMusicButton.addEventListener("click", function () {
  const form = document.createElement("form");
  form.innerHTML = `
    <input type="text" id="musicLink" placeholder="Enter music link" required><br>
    <input type="text" id="musicName" placeholder="Enter music name" required><br>
    <button type="submit">Submit</button>
  `;

  musicList.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const link = document.getElementById("musicLink").value.trim();
    const name = document.getElementById("musicName").value.trim();

    if (link && name) {
      const musicItem = document.createElement("a");
      musicItem.href = link;
      musicItem.target = "_blank";
      musicItem.innerHTML = `
        <img src="youtube.jpg" alt="${name}" class="music-img">
        <p class="song-name">${name}</p>
      `;

      musicList.appendChild(musicItem);
      form.remove();
    } else {
      alert("Please fill out both fields.");
    }
  });
});