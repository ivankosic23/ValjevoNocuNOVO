function openPopup(name, address, phone, instagram, imageSrc) {
    const popup = document.getElementById("popup");
    popup.querySelector(".popup-name").textContent = name;
    popup.querySelector(".popup-address").textContent = address;
    popup.querySelector(".popup-phone").textContent = phone;
    popup.querySelector(".popup-instagram").textContent = instagram;
    popup.querySelector(".popup-image").src = imageSrc;  // OVO je ključno
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}