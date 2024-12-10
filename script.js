const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messageTypes = {
    "Ohayogozaimasu": "success",
    "Genki desu ka?": "info",
    "Sayonara": "error", 
    "Mataashita": "pending"
};

const messages = Object.keys(messageTypes);

button.addEventListener("click", () => createNotif());

function createNotif(message = null, type = null) {
    const notif = document.createElement("div");

    const selectedMessage = message || getRandomMessage();
    const selectedType = type || messageTypes[selectedMessage];

    notif.classList.add("toast");
    notif.classList.add(selectedType);
    
    notif.style.opacity = "0"
    notif.style.transform = "translateX(20px)"
    notif.style.transition = "0.3s ease-in-out"

    notif.innerText = selectedMessage;

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = "1"
        notif.style.transform = "translateX(0px)"
    }, 10)

    setTimeout(() => {
        notif.style.opacity = "0"
        notif.style.transform = "translateX(20px)"
        
        setTimeout(() => {
            toasts.removeChild(notif)
        }, 300)
    }, 2000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// const button = document.getElementById("button");
// const toasts = document.getElementById("toasts");

// const messages = [
//     "Ohayogozaimasu",
//     "Genki desu ka?",
//     "Sayonara", 
//     "Mataashita"
// ];

// const types = [
//     "success",
//     "error",
//     "pending", 
//     "info"
// ];

// button.addEventListener("click", () => createNotif());

// function createNotif(message = null, type = null) {
//     const notif = document.createElement("div");

//     notif.classList.add("toast");
//     notif.classList.add(type ? "success" : getRandomType());
    
//     notif.style.opacity = "0"
//     notif.style.transform = "translateX(20px)"
//     notif.style.transition = "0.3s ease-in-out"

//     notif.innerText = message ? message : getRandomMessage();

//     toasts.appendChild(notif);

//     setTimeout(() => {
//         notif.style.opacity = "1"
//         notif.style.transform = "translateX(0px)"
//     }, 10)

//     setTimeout(() => {
//         notif.style.opacity = "0"
//         notif.style.transform = "translateX(20px)"
        
//         setTimeout(() => {
//             toasts.removeChild(notif)
//         }, 300)
//     }, 2000)
// }

// function getRandomMessage() {
//   return messages[Math.floor(Math.random() * messages.length)];
// }

// function getRandomType() {
//   return types[Math.floor(Math.random() * types.length)];
// }