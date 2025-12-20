document.addEventListener('DOMContentLoaded', function () {
    const { translations, crazyModes, demoCards } = HOAH_DATA;

    // --- GA Event Tracking ---
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'click_download', {
                    'event_category': 'conversion',
                    'event_label': downloadBtn.getAttribute('href')
                });
            }
        });
    }

    // --- Render Demo Cards ---
    const track = document.querySelector('.marquee-track');
    if (track) {
        const getCardHTML = (card) => {
            const styleAttr = card.outputStyle ? ` style="${card.outputStyle}"` : '';
            return `
                <div class="demo-card">
                    <div class="card-header"><span class="${card.badgeClass}" data-i18n="${card.key}">...</span></div>
                    <div class="card-body">
                        <div class="input">${card.input}</div>
                        <div class="arrow">↓</div>
                        <div class="output"${styleAttr}>${card.output}</div>
                    </div>
                </div>
            `;
        };

        const cardsHTML = demoCards.map(getCardHTML).join('');
        // Double it for marquee
        track.innerHTML = cardsHTML + cardsHTML;
    }

    // --- Localization ---
    const toggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('hoah_lang') || 'en';

    function updateLanguage(lang) {
        // Handle common elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Handle button text
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
        }

        localStorage.setItem('hoah_lang', lang);
        currentLang = lang;
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            updateLanguage(newLang);
        });
    }

    // --- Download Version Check ---
    const repo = 'yangzichao/hoah-release';
    const noteEl = document.getElementById('download-note');
    const versionBtn = document.getElementById('download-btn');

    if (versionBtn && noteEl) {
        fetch(`https://api.github.com/repos/${repo}/releases/latest`)
            .then(r => r.json())
            .then(data => {
                if (data.tag_name) {
                    versionBtn.href = data.html_url; // fallback to release page
                    let sizeLabel = "";

                    // try to find dmg
                    const dmg = data.assets && data.assets.find(a => a.name.endsWith('.dmg'));
                    if (dmg) {
                        versionBtn.href = dmg.browser_download_url;
                        // Convert bytes to MB
                        const sizeMB = (dmg.size / 1024 / 1024).toFixed(1);
                        sizeLabel = ` (${sizeMB} MB)`;
                    }

                    // Update button text
                    const btnText = versionBtn.querySelector('.text');
                    if (btnText) {
                        btnText.textContent = `Download ${data.tag_name}${sizeLabel}`;
                    }
                    noteEl.innerText = `macOS 14.0+ • Apple Silicon`;
                }
            })
            .catch(() => { });
    }

    // Init Language (must happen after cards are rendered so they get translated)
    updateLanguage(currentLang);

    // --- Mouse Follow Glow Effect ---
    const grid = document.querySelector('.features-grid');
    const cards = document.querySelectorAll('.feature-card');

    if (grid) {
        grid.addEventListener('mousemove', e => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // --- Mouse Follow Glow Effect (User Guide) ---
    const helpContainer = document.querySelector('.help-container');
    const steps = document.querySelectorAll('.step-section');

    if (helpContainer && steps.length > 0) {
        helpContainer.addEventListener('mousemove', e => {
            steps.forEach(step => {
                const rect = step.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                step.style.setProperty('--x', `${x}px`);
                step.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // --- Crazy Mode Logic ---
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('#crazy-trigger');
        if (trigger) {
            e.preventDefault();
            openCrazyModal();
        }
    });

    function openCrazyModal() {
        let modal = document.getElementById('crazy-modal');
        if (!modal) {
            // Create Modal if not exists
            const modalHTML = `
            <div id="crazy-modal" class="extra-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>HoAh Creative Matrix</h2>
                        <button class="close-modal" onclick="closeCrazyModal()">×</button>
                    </div>
                    <div class="crazy-terminal">
                        <div class="terminal-header">
                            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                        </div>
                        <div class="terminal-body" id="terminal-output">
                            <div class="input-line">> SELECT MODE...</div>
                            <div class="input-line">> WAITING FOR INPUT...<span class="cursor"></span></div>
                        </div>
                    </div>
                    <div class="crazy-grid">
                        ${crazyModes.map(m => `
                            <div class="crazy-card" onclick="runCrazyDemo('${m.id}')">
                                <span class="emoji">${m.icon}</span>
                                <span class="name">${m.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            modal = document.getElementById('crazy-modal');

            // Close on outside click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeCrazyModal();
            });
        }
        // Small delay to allow DOM insert before class add (for transition)
        requestAnimationFrame(() => modal.classList.add('active'));

        // Reset Terminal
        const term = document.getElementById('terminal-output');
        if (term) {
            term.innerHTML = `
                <div class="input-line">> SYSTEM INITIALIZED...</div>
                <div class="input-line">> SELECT A MODULE TO PROCESS DATA...<span class="cursor"></span></div>
            `;
        }
    }

    window.closeCrazyModal = function () {
        const modal = document.getElementById('crazy-modal');
        if (modal) {
            modal.classList.remove('active');
            // setTimeout(() => modal.remove(), 400); // Optional: remove from DOM or keep
        }
    };

    let isCrazyDemoRunning = false;
    window.runCrazyDemo = function (id) {
        if (isCrazyDemoRunning) return;

        const mode = crazyModes.find(m => m.id === id);
        if (!mode) return;

        isCrazyDemoRunning = true;
        const term = document.getElementById('terminal-output');
        term.innerHTML = `
            <div class="input-line">> LOADING MODULE: [${mode.name.toUpperCase()}]...</div>
            <div class="input-line">> PROCESSING INPUT: "${mode.input}"...</div>
        `;

        // Scroll to bottom
        term.scrollTop = term.scrollHeight;

        setTimeout(() => {
            term.innerHTML += `
                <div style="color: #fff; margin-top: 10px;">> OUTPUT:</div>
                <div style="color: #ffff00; font-weight: bold; white-space: pre-wrap;">${mode.output}</div>
                <div class="input-line" style="margin-top: 10px;">> READY.<span class="cursor"></span></div>
            `;
            // Scroll to bottom again after update
            term.scrollTop = term.scrollHeight;
            isCrazyDemoRunning = false;
        }, 600);
    };

    // --- Hash Routing ---
    function checkHash() {
        if (window.location.hash === '#creative') {
            openCrazyModal();
        }
    }
    checkHash();
    window.addEventListener('hashchange', checkHash);
});
