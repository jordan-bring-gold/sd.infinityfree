
console.log("in city.js")


window.scrollTo(top)

loadCSV();

    console.log("in loaded")

    row = null;
    cityContent.forEach(r => {
        if (currentView === r[0]) {
            row = r;
        }
    })
    document.getElementById("population").innerText = row[1];
    document.getElementById("year").innerText = row[2];
    document.getElementById("region").innerText = row[3];
    document.getElementById("classification").innerText = row[4];
    document.getElementById("income").innerText = row[5];
        
    document.getElementById("title1c").innerText = row[8];
    document.querySelector("#par1c").innerText = row[9];
    document.getElementById("par2c").innerText = row[10];
    document.getElementById("title2c").innerText = row[11];
    document.getElementById("par3c").innerText = row[12];
    document.getElementById("par4c").innerText = row[13];

    html = `<h1>`+ row[6] + `</h1>`;

    img1 = document.getElementById("relavant-image");
    // console.log("Here is your image:", img1)

    caption = document.getElementById("caption");
    // captiontxt = document.getElementsByTagName("caption")
    console.log("here is your caption", caption)

    source = document.getElementById("source");
    
    console.log("current:", currentView);
    if(currentView === "pierre") {
        html += `<p>State Capitol of South Dakota.</p>`;
        img1.src = "images/rod-m-V3ordmaEOPw-unsplash.jpg";
        img1.alt = "An old photograph of the town of Pierre in the beginning of the 1900's. A church with a steeple and a small wooden house are seen in the background."
        caption.innerHTML = `Photo by <a target="_blank" href="https://unsplash.com/photos/rod-m-V3ordmaEOPw">Rod M.</a> on <a target="_blank" href="https://unsplash.com/">Unsplash</a>`;
        source.innerHTML = `<i>History.</i> Fort Pierre South Dakota Official Website. (2023, June 1). https://www.fortpierre.com/fort-pierre-tourism-information/history/ `
    } else if (currentView === "sioux-falls") {
        html += `<p>Largest city in South Dakota by population.</p>`;
        img1.src = "images/intricate-explorer-9J85lrY9Nnc-unsplash.jpg"
        img1.alt = "The falls located in Sioux Falls, from which the city recieved its name. There are many trees and other plants located around the falls."
        caption.innerHTML = `Photo by <a target="_blank" href="https://unsplash.com/photos/intricate-explorer-9J85lrY9Nnc">Intricate Explorer</a> on <a target="_blank" href="https://unsplash.com/">Unsplash</a>`;
        source.innerHTML = `<i>Historic Sioux Falls.</i> City of Sioux Falls. (n.d.). https://www.siouxfalls.gov/government/about/history `
    } else if (currentView === "rapid-city") {
        html += `<p>Second largest city in South Dakota by population.</p>`;
        img1.src = "images/dennis-guten-KbdwyljPeko-unsplash.jpg"
        img1.alt = "A modern photo of Mt. Rushmore showing the 4 famous presidents of the United States: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln."
        caption.innerHTML = `Photo by <a target="_blank" href="https://unsplash.com/photos/mount-rushmore-during-daytime-KbdwyljPeko">Dennis Guten</a> on <a target="_blank" href="https://unsplash.com/">Unsplash</a>`;
        source.innerHTML = `Black Hills Visitor Magazine. (n.d.-a). <i>Historic Sioux Falls.</i> City of Sioux Falls. https://www.siouxfalls.gov/government/about/history `
    }

    document.getElementById("title-city-header").innerHTML = html;
    //  + (currentView=="pierre")?(" - State Capitol of SD"):("");

    // console.log(row[6])



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