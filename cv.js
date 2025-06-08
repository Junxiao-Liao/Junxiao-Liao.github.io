async function loadCV() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Junxiao-Liao/Junxiao-Liao.github.io/main/cv.md');
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        document.getElementById('cv-content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading CV:', error);
        document.getElementById('cv-content').innerHTML = '<p>Error loading CV content.</p>';
    }
}

loadCV();
