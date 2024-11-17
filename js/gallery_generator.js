const data = [
    { imgSrc: "img/MainPage/Achievements.webp", alt: "Achievements", width: 100, height: 87, text: "Achievements", href: "./achievements.html" },
    { imgSrc: "img/MainPage/Challenges.webp", alt: "Challenges", width: 80, height: 100, text: "Challenges", href: "#" },
    { imgSrc: "img/MainPage/CompletionsMarks.webp", alt: "Completion Marks", width: 100, height: 100, text: "Completion Marks", href: "#" }, 
    { imgSrc: "img/MainPage/Items.webp", alt: "Items", width: 60, height: 100, text: "Items", href: "./items.html" },
    { imgSrc: "img/Trinkets/The_Left_Hand_icon.webp", alt: "Trinkets", width: 100, height: 100, text: "Trinkets", href: "#" },
    { imgSrc: "img/Characters/Isaac_appearance.webp", alt: "Characters", width: 85, height: 100, text: "Characters", href: "#" },
    { imgSrc: "img/MainPage/Chapters.webp", alt: "Chapters", width: 100, height: 76, text: "Chapters", href: "./chapters.html" },
    { imgSrc: "img/MainPage/Rooms.webp", alt: "Rooms", width: 100, height: 78, text: "Rooms", href: "#" },
    { imgSrc: "img/Transformations/Guppy_appearance.webp", alt: "Transformations", width: 86, height: 100, text: "Transformations", href: "./transformations.html" },
    { imgSrc: "img/MainPage/Attr.webp", alt: "Attributes", width: 100, height: 100, text: "Attributes", href: "#" },
    { imgSrc: "img/MainPage/Bosses.webp", alt: "Bosses", width: 100, height: 86, text: "Bosses", href: "#" },
    { imgSrc: "img/MainPage/Monsters.webp", alt: "Monsters", width: 80, height: 100, text: "Monsters", href: "#" },
    { imgSrc: "img/MainPage/Pickups.webp", alt: "Pickups", width: 100, height: 100, text: "Pickups", href: "#" },
    { imgSrc: "img/Greed_Donation_Machine.webp", alt: "Modes", width: 91, height: 100, text: "Modes", href: "#" },
    { imgSrc: "img/MainPage/Objects.webp", alt: "Objects", width: 100, height: 92, text: "Objects", href: "#" },
    { imgSrc: "img/Effects/Confusion_Effect.webp", alt: "Effects", width: 81, height: 100, text: "Effects", href: "#" },
    { imgSrc: "img/MainPage/Curse.webp", alt: "Curses", width: 100, height: 100, text: "Curses", href: "./Curses.html" },
    { imgSrc: "img/MainPage/Seeds.webp", alt: "Seeds", width: 100, height: 100, text: "Seeds", href: "./Seeds.html" },
    { imgSrc: "img/MainPage/Endings.webp", alt: "Endings", width: 100, height: 100, text: "Endings", href: "./endings.html" },
    { imgSrc: "img/Trinkets/Forgotten_Lullaby_icon.webp", alt: "Music", width: 100, height: 100, text: "Music", href: "#" },
    { imgSrc: "img/Collectibles/The_Hourglass_icon.webp", alt: "Version History", width: 100, height: 100, text: "Version History", href: "#" },
    { imgSrc: "img/Collectibles/Dataminer_icon.webp", alt: "Modding", width: 100, height: 100, text: "Modding", href: "#" }
  ];

  document.addEventListener("DOMContentLoaded", function() {
    
    const galleryContainer = document.getElementById("galleryrow");

    data.forEach((item, index) => {
        const galleryBox = document.createElement("div");
        galleryBox.classList.add("gallerybox", "col-lg-1", "col-sm-3");

        const galleryImage = document.createElement("div");
        galleryImage.classList.add("galleryimage");

        const anchorOrButton = item.href === "#" ? document.createElement("button") : document.createElement("a");
        if (item.href === "#") anchorOrButton.classList.add("btn", "btn-link", "modal-trigger");
        anchorOrButton.href = item.href !== "#" ? item.href : null;
        anchorOrButton.textContent = item.text;

        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.alt;
        img.width = item.width;
        img.height = item.height;

        galleryImage.appendChild(img);

        const galleryText = document.createElement("p");
        galleryText.classList.add("gallerytext");
        galleryText.appendChild(anchorOrButton);

        galleryBox.appendChild(galleryImage);
        galleryBox.appendChild(galleryText);

        galleryContainer.appendChild(galleryBox);

        if ((index + 1) % 9 === 0) {
            const breakDiv = document.createElement("div");
            breakDiv.classList.add("w-100", "d-none", "d-xxl-block");
            galleryContainer.appendChild(breakDiv);
  }
    })
  })