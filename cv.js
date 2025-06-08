async function loadCV() {
    try {
        // add timestamp to bust cache
        const url = 'https://raw.githubusercontent.com/Junxiao-Liao/Junxiao-Liao.github.io/main/cv.md?v=' + Date.now();
        const response = await fetch(url);
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        document.getElementById('cv-content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading CV:', error);
        document.getElementById('cv-content').innerHTML = '<p>Error loading CV content.</p>';
    }
}

loadCV();
