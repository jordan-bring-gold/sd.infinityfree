let currentView = "state";
// let cityContent = [];
let cityContent = [];
let row;
let html;

//Once the DOM is ready, lets load some data into the page
document.addEventListener("DOMContentLoaded", () => {

    //load content from csv
    loadCSV();

    //load header
    loadHeader();

    //load state data (default upon page load)
    loadState();

    //load footer
    loadFooter();

});

function loadState() {

    // $("#landing").load("state-landing.html")
    let land = document.getElementById("landing");
    land.innerHTML = `<div class="crop">
    <img
    id="state-image"
    src="/images/matan-levanon-_Ipv1Ms0-uQ-unsplash.jpg"
    alt="Road heading towards the Badlands in South Dakota"
    />
    </div>`
    console.log("land ho!", land)

    $("#title").load("state-title.html")
    $('#sections').load("state-sections.html")
    currentView = 'state';
    console.log("loading state page");
    highlightLink("state")
    window.scrollTo(top)
}

function highlightLink(name) {
    let links = document.getElementsByClassName("nav-link");
    // console.log(links)

    for (let link of links) {
        // console.log("your link is", link)
        link.classList.remove("nav-selected")
    }

    let newLink = document.getElementById(name);
    if (newLink) {
        newLink.classList.add("nav-selected");
    }
}



function loadHeader() {
    $("#header").load("header.html");
}

function loadFooter() {
    // console.log("loading footer")
    $("#footer").load("footer.html");
}


function loadCity(name) {

    $("#landing").load("landing.html")
    $("#title").load("title.html")
    $('#sections').load("sections.html")
    currentView = name;
    console.log("loading page for:", name)
    highlightLink(name)

   
   
    }
    
function loadCSV() {
    $.get("content.csv", function(data) {
        // console.log("heres data:", data)
        let parsed = [];
        let rows = data.split('\n');
        

        rows.splice(1).forEach((row, i) => {
           
            let cols = row.replace('\"','').split("\t");
            

            parsed.push(cols);
        });
        cityContent = parsed;
        console.log("Heres your cities:", cityContent);
    })

}

function loadContactForm() {
    console.log("loading contact form now")
  
    createOverlay();
}

// Create an overlay div
function createOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  
    // Create the form
    const form = document.createElement("form");
    form.classList.add("form");
    form.innerHTML = `
      

      <div class="shade-out">
  <div class="contact-form-sheet">
  <button class="close-btn" onclick="closeOverlay()">X</button>
    <div class="instructions">Have a question? Submit your info for a personalized answer from our dedicated staff.</div>
    <form action="/">
      <label for="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
      />
      <label for="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
      />
      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <label for="email2">Confirm your email:</label>
      <input
        type="text"
        id="email2"
        name="email2"
        placeholder="Confirm your email"
      />
      
      <div class="question-header">Question:</div>
      <textarea class="question" rows="3" cols="29"name="question" placeholder="How can we help?"></textarea>
      <input type="submit" disabled="true"id="submit-button" class='submit-btn'/>
      <div id="error-msg">Error: Emai ls do not match.</div>
    </form>
  </div>
</div>

      
    `;
    overlay.appendChild(form);

    let email = document.getElementById("email")
    let email2 = document.getElementById("email2")

    let error = document.getElementById("error-msg");
    let submitBtn = document.getElementById("submit-button");

    let emailvalue = ""
    let emailvalue2 = ""

    email.addEventListener("change", event => {
        emailvalue = event.target.value;
        checkIfMatchEmail();
    })

    email2.addEventListener("change", event => {
        emailvalue2 = event.target.value;
        checkIfMatchEmail();
    })

    function checkIfMatchEmail() {
        if(emailvalue2.length > 0) {
            if (emailvalue === emailvalue2) {
                error.style.display = "none";
                submitBtn.disabled = false;
                console.log("matching emails!")
            } else {
                error.style.display = "block";
                submitBtn.disabled = true;
                console.log("Not matching emails")
            }
        }
    }
  }
  
  // Close the overlay
  function closeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
  }
  
  let img1, caption, source
 
  
