function reqListener() {
    // Parse CSV data
    const csvData = this.responseText;
    const lines = csvData.split('\n');
    
    // Remove header line
    lines.shift();
    
    // Get ul element
    const ulElement = document.getElementById("lexiEpisodesList");
    
    // Loop through each line and create li elements
    lines.forEach(line => {
        const [title, id] = line.split('\t');
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.href = `https://tasosmitsi.github.io/assets/lexPodCaps/prefix_${id.trim()}.txt`;
        aElement.textContent = title.trim();
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://tasosmitsi.github.io/assets/lexPodCaps/episodes.csv");
req.send();