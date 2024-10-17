


// user Registration

const userRegisterData= ()=>{
    let userName = document.getElementById("username").value;
    let userEmail = document.getElementById("userEmail").value;
    let userMobileNumber = document.getElementById("userMobileNumber").value;
    let userPass = document.getElementById("userPass").value;
    let conformPass = document.getElementById("conformPass").value;

if(!userEmail || !userName || !userMobileNumber || !userPass || !conformPass){
    alert(" please fill required fileds ")
    return
}
localStorage.setItem("userEmail", userEmail,)
    localStorage.setItem("userPass", userPass)
    
    setTimeout(()=>{
    alert("signup sucessfully")
    location.href = "./index.html"
    
    },1000)
}


// user login

const userLogin = ()=>{

    const userEmail = localStorage.getItem("userEmail")
    const userPass = localStorage.getItem("userPass")


const email = document.getElementById("email").value;
const pass = document.getElementById("pass").value;

if(email === userEmail){
if(pass === userPass){
    const head = document.getElementById("heading")
    const errdata = ` <h1>Login</h1>
    <p>Enter your username and <br> password to login</p>`
head.innerHTML = errdata

setTimeout(()=>{
    alert("login sucessfully")
    location.href = "./desktop.html"
    
    },1000)

}else{

    const head = document.getElementById("heading")
    const errdata = ` <div class="errmessage">
        <h1>login</h1>
        <p>Invalid username / or  password </br>
            Please try again</p>
    </div>`

head.innerHTML = errdata
    console.log("username is invalid")
}


}


}




// open user camera
function openMedia() {
    const media = document.getElementById("media");

    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Set muted to true
        media.muted = true;

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        })
        .then(stream => {
            // Set the source of the media element to the stream
            media.srcObject = stream;
            media.play(); // Play the media
        })
        .catch(error => {
            console.error("Error accessing media devices.", error);
        });
    } else {
        console.error("getUserMedia not supported on this browser.");
    }
}


// open voice recorder

let mediaRecorder;
let audioChunks = [];

document.getElementById("recordBtn").addEventListener("click", async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
        mediaRecorder.start();
    }})


    // shom message dropdown

    
   
    
    // auto searc bar

    const searchInput = document.getElementById("searchInput");
    const suggestionsList = document.getElementById("suggestionsList");

    const data = [
        "rafi",
        "ahmed",
        "asif",
        "shahzaib",
        "noman",
        "afra",
        "nomi",
        "nomi",
        "samad",
        "samad",
        "app",
        "naveed",
        "haji",
        "sami",
        "tanveer",
        "zabi",
        "basit",
        "commit"
    ];

    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase();
        suggestionsList.innerHTML = ""; // Clear previous suggestions

        if (query) {
            const filteredData = data.filter(item => item.toLowerCase().includes(query));
            filteredData.forEach(item => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = item;
                suggestionItem.addEventListener("click", () => {
                    searchInput.value = item; // Set the input value to the clicked suggestion
                    suggestionsList.innerHTML = ""; // Clear suggestions
                });
                suggestionsList.appendChild(suggestionItem);
            });
        }
    });



   
    const topcontainer = document.getElementById('topconstain');
    const infoContains = document.getElementById('infoContains');
    
    // Toggle display on input click
    topcontainer.addEventListener('click', () => {
        if (topcontainer.style.display === 'block') {
            topcontainer.style.display = 'none';
           infoContains.style.display = "block"
        } else {
            infoContains.style.display = 'block';
            
        }
    });

    infoContains.addEventListener('click', () => {
        if (infoContains.style.display === 'block') {
            infoContains.style.display = 'none';
           topcontainer.style.display = "block"
        } else {
            infoContains.style.display = 'block';
            
        }
    });
   



    const navbarImages = document.querySelectorAll('.navbar-image');
    const notificationBar = document.getElementById('notificationBar');

    // Add click event listener to each image
    navbarImages.forEach(image => {
        image.addEventListener('click', () => {
            if (notificationBar.style.display === 'none' || notificationBar.style.display === '') {
                notificationBar.style.display = 'block';
            } else {
                notificationBar.style.display = 'none';
            }
        });
    });


