// --- Data Simulation with Specific Nyeri Wards ---
const nyeriData = {
    subCounties: [
        { id: 'tetu', name: 'Tetu' },
        { id: 'kieni-east', name: 'Kieni East' },
        { id: 'kieni-west', name: 'Kieni West' },
        { id: 'mathira-east', name: 'Mathira East' },
        { id: 'mathira-west', name: 'Mathira West' },
        { id: 'mukurweini', name: 'Mukurweini' },
        { id: 'othaya', name: 'Othaya' },
        { id: 'nyeri-central', name: 'Nyeri Central' }
    ],
    wards: {
        'tetu': [
            { id: 'aguthi-gaaki', name: 'Aguthi-Gaaki', subCountyId: 'tetu' },
            { id: 'dedan-kimathi', name: 'Dedan Kimathi', subCountyId: 'tetu' },
            { id: 'wamagana', name: 'Wamagana', subCountyId: 'tetu' }
        ],
        'kieni-east': [
            { id: 'gakawa', name: 'Gakawa', subCountyId: 'kieni-east' },
            { id: 'kabaru', name: 'Kabaru', subCountyId: 'kieni-east' },
            { id: 'naromoru-kiamathaga', name: 'Naromoru/Kiamathaga', subCountyId: 'kieni-east' },
            { id: 'thegu-river', name: 'Thengu River', subCountyId: 'kieni-east' }
        ],
        'kieni-west': [
            { id: 'mweiga', name: 'Mweiga', subCountyId: 'kieni-west' },
            { id: 'mwiyo-endarasha', name: 'Mwiyogo/Endarasha', subCountyId: 'kieni-west' },
            { id: 'mugunda', name: 'Mugunda', subCountyId: 'kieni-west' },
            { id: 'gatarakwa', name: 'Gatarakwa', subCountyId: 'kieni-west' }
        ],
        'mathira-east': [
            { id: 'konyu', name: 'Konyu', subCountyId: 'mathira-east' },
            { id: 'kirimukuyu', name: 'Kirimukuyu', subCountyId: 'mathira-east' }
        ],
        'mathira-west': [
            { id: 'magutu', name: 'Magutu', subCountyId: 'mathira-west' },
            { id: 'ruguru', name: 'Ruguru', subCountyId: 'mathira-west' },
            { id: 'iriaini', name: 'Iriaini', subCountyId: 'mathira-west' },
            { id: 'karatina-town', name: 'Karatina Town', subCountyId: 'mathira-west' }
        ],
        'mukurweini': [
            { id: 'gikondi', name: 'Gikondi', subCountyId: 'mukurweini' },
            { id: 'mukurweini-central', name: 'Mukurweini Central', subCountyId: 'mukurweini' },
            { id: 'mukurweini-west', name: 'Mukurweini West', subCountyId: 'mukurweini' },
            { id: 'rugi', name: 'Rugi', subCountyId: 'mukurweini' }
        ],
        'othaya': [
            { id: 'chinga', name: 'Chinga', subCountyId: 'othaya' },
            { id: 'iria-ini', name: 'Iria-ini', subCountyId: 'othaya' },
            { id: 'karima', name: 'Karima', subCountyId: 'othaya' },
            { id: 'mahiga', name: 'Mahiga', subCountyId: 'othaya' }
        ],
        'nyeri-central': [
            { id: 'kiganjo-mathari', name: 'Kiganjo/Mathari', subCountyId: 'nyeri-central' },
            { id: 'rware', name: 'Rware', subCountyId: 'nyeri-central' },
            { id: 'gatitu-muruguru', name: 'Gatitu/Muruguru', subCountyId: 'nyeri-central' },
            { id: 'ruringu', name: 'Ruring\'u', subCountyId: 'nyeri-central' },
            { id: 'kamakwa-mukaro', name: 'Kamakwa/Mukaro', subCountyId: 'nyeri-central' }
        ]
    }
};

// --- Function to Generate Mock School Data ---
function generateMockSchools() {
    const schools = {};
    const statusOptions = ['planned', 'in-progress', 'completed'];
    const adjectives = ['Happy', 'Little', 'Sunshine', 'Green', 'Bright', 'Star', 'Mwingu', 'River', 'Hill', 'Valley', 'Moringa', 'Olive', 'Rainbow', 'Golden', 'Peaceful'];
    const nouns = ['Kids', 'Stars', 'Sprouts', 'Blossoms', 'Academy', 'Learning', 'Centre', 'Grove', 'Nest', 'Hub', 'Path', 'Garden', 'Springs', 'Meadow', 'Heights'];

    // Iterate through the wards object structure
    for (const subCountyId in nyeriData.wards) {
        const wardsInSubCounty = nyeriData.wards[subCountyId];
        // Iterate through the array of wards for each sub-county
        wardsInSubCounty.forEach(ward => {
            const wardId = ward.id; // Get the ward's ID
            schools[wardId] = []; // Initialize array for this ward
            const numSchoolsInWard = Math.floor(Math.random() * 4) + 3; // 3 to 6 schools

            for (let i = 1; i <= numSchoolsInWard; i++) {
                const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
                const noun = nouns[Math.floor(Math.random() * nouns.length)];
                const schoolName = `${adjective} ${noun} ECDE`;

                const studentPopulation = Math.floor(Math.random() * 120) + 40; // 40 to 159
                const baseTeachers = Math.max(1, Math.floor(studentPopulation / (Math.random() * 5 + 15)));
                const teacherPopulation = baseTeachers + Math.floor(Math.random() * 3) - 1;

                const renovationStatus = 'completed';

                // --- Use your specific AI-generated images ---
                const beforeImage = 'images/bad_school_example.png'; // Local path to "bad" image
                let afterImage = ''; // Default to empty string
                // If the renovation is completed or in progress, show the "best" image
                if (renovationStatus === 'completed' || renovationStatus === 'planned') {
                    afterImage = 'images/best_school_example.png'; // Local path to "best" image
                }
                // If status is 'planned', afterImage remains '', showing the "After Image Pending" message

                const school = {
                    id: `school-${wardId}-${i}`,
                    name: schoolName,
                    wardId: wardId, // Link to ward ID
                    studentPopulation: studentPopulation,
                    teacherPopulation: Math.max(1, teacherPopulation),
                    renovationStatus: renovationStatus,
                    beforeImage: beforeImage,  // Your AI image
                    afterImage: afterImage     // Your AI image or empty string
                };

                schools[wardId].push(school); // Add school to the correct ward's array
            }
        });
    }
    return schools;
}

// --- Generate the mock schools data ONCE when the script loads ---
const mockSchoolsData = generateMockSchools();

// --- DOM Elements & Other Functions ---
const contentTitle = document.getElementById('content-title');
const contentDisplay = document.getElementById('content-display');
const navLinks = document.getElementById("nav-links");
const menuToggle = document.getElementById("menu-toggle");
const exploreBtn = document.getElementById("explore-btn");
const termsLink = document.getElementById("terms-link");

let navigationHistory = [];

function loadSubCounties() {
    navigationHistory = [];
    contentTitle.textContent = "Constituencies in Nyeri County";
    let html = '<div class="list-grid">';
    nyeriData.subCounties.forEach(subCounty => {
        html += `<a href="#" class="list-item" data-action="loadWards" data-id="${subCounty.id}"><h3>${subCounty.name}</h3><p>Explore wards within ${subCounty.name}</p></a>`;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

function loadWards(subCountyId) {
    navigationHistory.push({ action: 'loadSubCounties' });
    const subCounty = nyeriData.subCounties.find(c => c.id === subCountyId);
    if (!subCounty) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Sub-County not found.</p>`;
        return;
    }
    contentTitle.textContent = `Wards in ${subCounty.name} Sub-County`;
    const wards = Object.values(nyeriData.wards).flat().filter(w => w.subCountyId === subCountyId);
    if (wards.length === 0) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>No ward data available for ${subCounty.name} Sub-County.</p>`;
        return;
    }
    let html = `<button class="back-btn" onclick="goBack()">Back</button>`;
    html += '<div class="list-grid">';
    wards.forEach(ward => {
        html += `<a href="#" class="list-item" data-action="loadSchools" data-id="${ward.id}"><h3>${ward.name}</h3><p>View ECDE centers in ${ward.name}</p></a>`;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

function loadSchools(wardId) {
    // --- Find the ward object to get the sub-county ID ---
    const ward = Object.values(nyeriData.wards).flat().find(w => w.id === wardId);
    if (!ward) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Ward not found.</p>`;
        return;
    }
    const subCounty = nyeriData.subCounties.find(c => c.id === ward.subCountyId);

    // --- Corrected Navigation History ---
    navigationHistory.push({ action: 'loadWards', data: ward.subCountyId });

    contentTitle.textContent = `ECDE Centers in ${ward.name} Ward (${subCounty.name})`;

    // --- Use the Generated Mock Data ---
    const schools = mockSchoolsData[wardId] || []; // Get schools for this specific wardId
    if (schools.length === 0) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>No ECDE center data available for ${ward.name} Ward.</p>`;
        return;
    }

    let html = `<button class="back-btn" onclick="goBack()">Back</button>`;
    html += '<div class="list-grid">';
    schools.forEach(school => {
        html += `<a href="#" class="list-item" data-action="loadSchoolDetail" data-school-id="${school.id}" data-ward-id="${wardId}"><h3>${school.name}</h3><p>View renovation progress and metrics</p></a>`;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

function loadSchoolDetail(schoolId, wardId) {
    const ward = Object.values(nyeriData.wards).flat().find(w => w.id === wardId);
    if (!ward) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Ward not found.</p>`;
        return;
    }
    const subCounty = nyeriData.subCounties.find(c => c.id === ward.subCountyId);

    navigationHistory.push({ action: 'loadSchools', data: wardId });

    // --- Use the Generated Mock Data ---
    const schools = mockSchoolsData[wardId] || [];
    const school = schools.find(s => s.id === schoolId);
    if (!school) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: School not found.</p>`;
        return;
    }

    const ratio = school.teacherPopulation > 0 ? (school.studentPopulation / school.teacherPopulation).toFixed(1) : 'N/A';
    contentTitle.textContent = school.name;

    let statusText = '';
    if (school.renovationStatus === 'completed') statusText = 'Completed';
    else if (school.renovationStatus === 'in-progress') statusText = 'In Progress';
    else if (school.renovationStatus === 'planned') statusText = 'Planned';

    let afterImageSrc = school.afterImage || 'https://placehold.co/600x400?text=After+Image+Pending';
    let afterImageCaption = school.afterImage ? 'After Renovation' : 'After Image (Pending)';

    let html = `<button class="back-btn" onclick="goBack()">Back to List</button>`;
    html += `<div class="school-detail"><p><strong>Location:</strong> ${ward.name} Ward, ${subCounty.name} Sub-County</p><div class="metrics"><h3>Performance Metrics</h3><ul><li><strong>Student Population:</strong> ${school.studentPopulation}</li><li><strong>Teacher Population:</strong> ${school.teacherPopulation}</li><li><strong>Teacher-to-Student Ratio:</strong> 1:${ratio}</li><li><strong>Renovation Status:</strong> <span class="status status-${school.renovationStatus}">${statusText}</span></li></ul></div><div class="image-comparison"><h3>Renovation Progress</h3><div class="image-grid"><div class="image-pair"><figure><img src="${school.beforeImage}" alt="${school.name} - Before Renovation"><figcaption>Before Renovation</figcaption></figure></div><div class="image-pair"><figure><img src="${afterImageSrc}" alt="${school.name} - ${afterImageCaption}"><figcaption>${afterImageCaption}</figcaption></figure></div></div></div></div>`;
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

function goBack() {
    if (navigationHistory.length === 0) { loadSubCounties(); return; }
    const previousState = navigationHistory.pop();
    if (previousState.action === 'loadSubCounties') { loadSubCounties(); }
    else if (previousState.action === 'loadWards') { loadWards(previousState.data); }
    else if (previousState.action === 'loadSchools') { loadSchools(previousState.data); }
    else { navigationHistory = []; loadSubCounties(); }
}

function showTerms() {
    navigationHistory.push({ action: 'currentView', title: contentTitle.textContent, html: contentDisplay.innerHTML });
    contentTitle.textContent = "Terms & Conditions";
    const html = `<button class="back-btn" onclick="goBack()">Back</button><div style="background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"><h3>Website Terms and Conditions of Use</h3><p><strong>1. Introduction</strong></p><p>Welcome to the Nyeri ECDE Renovation Tracker. These terms govern your use of this website.</p><p><strong>2. Intellectual Property</strong></p><p>Content is protected. Rights belong to Nyeri County Government and Dantedone.</p><p><strong>3. Use of Information</strong></p><p>Information is for general purposes. Accuracy is strived for but not guaranteed.</p><p><strong>4. Disclaimer</strong></p><p>Materials are provided "as is". No warranties are made.</p><p><strong>5. Limitations</strong></p><p>Liability for damages arising from use is excluded.</p><p><strong>6. Governing Law</strong></p><p>These terms are governed by the laws of the Republic of Kenya.</p><p><strong>7. Changes</strong></p><p>Terms may be revised. Review periodically.</p><p><strong>8. Contact</strong></p><p>Contact the Nyeri County Education Office for queries.</p></div>`;
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

menuToggle.addEventListener("click", () => { navLinks.classList.toggle("active"); });

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});

contentDisplay.addEventListener('click', (e) => {
    const target = e.target.closest('a.list-item');
    if (!target) return;
    e.preventDefault();
    const { action, id, schoolId, wardId } = target.dataset;
    if (action === 'loadWards') { loadWards(id); }
    else if (action === 'loadSchools') { loadSchools(id); }
    else if (action === 'loadSchoolDetail') { loadSchoolDetail(schoolId, wardId); }
});

const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("show"); } });
  }, { threshold: 0.1 }
);
animatedElements.forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            loadSubCounties();
            scrollToSection('main-content');
        });
    }
    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showTerms();
        });
    }
    document.querySelector('a[href="#wards"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        contentTitle.textContent = "Wards";
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Please navigate through Constituencies first.</p>`;
        scrollToSection('main-content');
    });
    document.querySelector('a[href="#schools"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        contentTitle.textContent = "ECDE Centers";
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Please navigate through Wards first.</p>`;
        scrollToSection('main-content');
    });
});