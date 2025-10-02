let currentLanguage = 'en'; // Default language

async function loadCV(language = 'en') {
    try {
        // Determine the markdown file based on language
        const filename = language === 'cn' ? 'cv-cn.md' : 'cv.md';
        
        // add timestamp to bust cache
        const url = `https://raw.githubusercontent.com/Junxiao-Liao/Junxiao-Liao.github.io/main/${filename}?v=` + Date.now();
        const response = await fetch(url);
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        document.getElementById('cv-content').innerHTML = htmlContent;

        // set document and container language so CSS :lang() works
        const docLang = language === 'cn' ? 'zh' : 'en';
        document.documentElement.lang = docLang;
        document.getElementById('cv-content').setAttribute('lang', docLang);

        // Process em tags to identify date ranges and convert them to special styling
        const emTags = document.querySelectorAll('#cv-content em');
        emTags.forEach(em => {
            const text = em.textContent.trim();
            // Check if the text looks like a date range (contains months, years, or common date patterns)
            if (/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|\d{4}|mo\)|yr\))/i.test(text)) {
                em.className = 'date-range';
            }
        });
        
        // Update current language
        currentLanguage = language;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`lang-${language}`).classList.add('active');
        
    } catch (error) {
        console.error('Error loading CV:', error);
        document.getElementById('cv-content').innerHTML = '<p>Error loading CV content.</p>';
    }
}

// Initialize language selector event listeners
function initLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            loadCV(lang);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
    loadCV(); // Load default language (English)
});

// Also call loadCV immediately for backwards compatibility
loadCV();
