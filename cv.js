async function loadCV() {
    try {
        // add timestamp to bust cache
        const url = 'https://raw.githubusercontent.com/Junxiao-Liao/Junxiao-Liao.github.io/main/cv.md?v=' + Date.now();
        const response = await fetch(url);
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        document.getElementById('cv-content').innerHTML = htmlContent;

        // Process em tags to identify date ranges and convert them to special styling
        const emTags = document.querySelectorAll('#cv-content em');
        emTags.forEach(em => {
            const text = em.textContent.trim();
            // Check if the text looks like a date range (contains months, years, or common date patterns)
            if (/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|\d{4}|mo\)|yr\))/i.test(text)) {
                em.className = 'date-range';
            }
        })
    } catch (error) {
        console.error('Error loading CV:', error);
        document.getElementById('cv-content').innerHTML = '<p>Error loading CV content.</p>';
    }
}

loadCV();
