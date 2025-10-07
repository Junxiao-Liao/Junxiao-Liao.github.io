let currentLanguage = 'en'; // Default language

// fetch latest commit SHA once and reuse
async function getRepoVersion() {
    if (window.__REPO_VERSION) return window.__REPO_VERSION;
    const cached = sessionStorage.getItem('REPO_VERSION');
    if (cached) {
        window.__REPO_VERSION = cached;
        return cached;
    }
    try {
        const resp = await fetch('https://api.github.com/repos/Junxiao-Liao/Junxiao-Liao.github.io/commits?per_page=1', { cache: 'no-store' });
        if (!resp.ok) throw new Error('Bad status');
        const data = await resp.json();
        const sha = (data[0] && data[0].sha) ? data[0].sha.substring(0, 10) : Date.now().toString();
        window.__REPO_VERSION = sha;
        sessionStorage.setItem('REPO_VERSION', sha);
        return sha;
    } catch {
        const fallback = Date.now().toString();
        window.__REPO_VERSION = fallback;
        return fallback;
    }
}

async function loadCV(language = 'en') {
    try {
        // Determine the markdown file based on language
        const filename = language === 'cn' ? 'cv-cn.md' : 'cv.md';

        // Use commit SHA (stable until next push) instead of Date.now()
        const version = await getRepoVersion();
        const url = `${filename}?v=${version}`; // relative path served by GitHub Pages

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch markdown');
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

// Optional: keep for backward compatibility
loadCV();
