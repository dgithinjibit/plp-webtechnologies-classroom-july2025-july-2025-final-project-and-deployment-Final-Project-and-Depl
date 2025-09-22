// --- Data Simulation with Specific Nyeri Wards ---
// Note: Removed extra spaces from image URLs
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
    },
    // Sample school data - expand as needed
    schools: {
        'konyu': [
            {
                id: 'school-1',
                name: 'Happy Kids ECDE Center',
                wardId: 'konyu',
                studentPopulation: 120,
                teacherPopulation: 6,
                renovationStatus: 'completed',
                beforeImage: 'https://picsum.photos/seed/school1before/600/400', // Removed space
                afterImage: 'https://picsum.photos/seed/school1after/600/400'  // Removed space
            }
        ],
        'wamagana': [
             {
                id: 'school-2',
                name: 'Little Stars ECDE',
                wardId: 'wamagana',
                studentPopulation: 95,
                teacherPopulation: 4,
                renovationStatus: 'in-progress',
                beforeImage: 'https://picsum.photos/seed/school2before/600/400', // Removed space
                afterImage: 'https://picsum.photos/seed/school2after/600/400'  // Removed space
            }
        ],
        'dedan-kimathi': [
             {
                id: 'school-3',
                name: 'Sunshine Valley ECDE',
                wardId: 'dedan-kimathi',
                studentPopulation: 150,
                teacherPopulation: 7,
                renovationStatus: 'planned',
                beforeImage: 'https://picsum.photos/seed/school3before/600/400', // Removed space
                afterImage: '' // No space needed for empty string
            }
        ]
        // Add more schools for other wards...
    }
};

// --- DOM Elements ---
const contentTitle = document.getElementById('content-title');
const contentDisplay = document.getElementById('content-display');
const navLinks = document.getElementById("nav-links");
const menuToggle = document.getElementById("menu-toggle");
// --- New Elements for Event Listeners ---
const exploreBtn = document.getElementById("explore-btn");
const termsLink = document.getElementById("terms-link");

// --- Navigation History Stack ---
let navigationHistory = [];

// --- Core Navigation Functions ---

// 1. Load the list of Sub-Counties (Constituencies)
function loadSubCounties() {
    navigationHistory = []; // Reset history when starting fresh
    contentTitle.textContent = "Constituencies in Nyeri County";
    let html = '<div class="list-grid">';
    nyeriData.subCounties.forEach(subCounty => {
        html += `
            <a href="#" class="list-item" data-action="loadWards" data-id="${subCounty.id}">
                <h3>${subCounty.name}</h3>
                <p>Explore wards within ${subCounty.name}</p>
            </a>
        `;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

// 2. Load the list of Wards for a given Sub-County
function loadWards(subCountyId) {
    // Save the previous state (list of sub-counties) for back navigation
    navigationHistory.push({ action: 'loadSubCounties' });

    const subCounty = nyeriData.subCounties.find(c => c.id === subCountyId);
    if (!subCounty) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Sub-County not found.</p>`;
        return;
    }

    contentTitle.textContent = `Wards in ${subCounty.name} Sub-County`;
    // Correctly filter wards belonging to the selected sub-county
    const wards = Object.values(nyeriData.wards).flat().filter(w => w.subCountyId === subCountyId);
    if (wards.length === 0) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>No ward data available for ${subCounty.name} Sub-County.</p>`;
        return;
    }

    let html = `<button class="back-btn" onclick="goBack()">Back</button>`;
    html += '<div class="list-grid">';
    wards.forEach(ward => {
        html += `
            <a href="#" class="list-item" data-action="loadSchools" data-id="${ward.id}">
                <h3>${ward.name}</h3>
                <p>View ECDE centers in ${ward.name}</p>
            </a>
        `;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

// 3. Load the list of Schools (ECDE Centers) for a given Ward
function loadSchools(wardId) {
    const ward = Object.values(nyeriData.wards).flat().find(w => w.id === wardId);
    if (!ward) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Ward not found.</p>`;
        return;
    }
    const subCounty = nyeriData.subCounties.find(c => c.id === ward.subCountyId);

    // Save the previous state (list of wards for the sub-county) for back navigation
    // Pass the subCountyId needed to reload the correct ward list
    navigationHistory.push({ action: 'loadWards', data: subCounty.id });

    contentTitle.textContent = `ECDE Centers in ${ward.name} Ward (${subCounty.name})`;
    const schools = nyeriData.schools[wardId] || [];
    if (schools.length === 0) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>No ECDE center data available for ${ward.name} Ward.</p>`;
        return;
    }

    let html = `<button class="back-btn" onclick="goBack()">Back</button>`;
    html += '<div class="list-grid">';
    schools.forEach(school => {
        html += `
            <a href="#" class="list-item" data-action="loadSchoolDetail" data-school-id="${school.id}" data-ward-id="${wardId}">
                <h3>${school.name}</h3>
                <p>View renovation progress and metrics</p>
            </a>
        `;
    });
    html += '</div>';
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

// 4. Load the detailed view for a specific School
function loadSchoolDetail(schoolId, wardId) {
    const ward = Object.values(nyeriData.wards).flat().find(w => w.id === wardId);
    if (!ward) {
        contentDisplay.innerHTML = `<button class="back-btn" onclick="goBack()">Back</button><p>Error: Ward not found.</p>`;
        return;
    }
    const subCounty = nyeriData.subCounties.find(c => c.id === ward.subCountyId);

    // Save the previous state (list of schools in the ward) for back navigation
    // Pass the wardId needed to reload the correct school list
    navigationHistory.push({ action: 'loadSchools', data: wardId });

    const schools = nyeriData.schools[wardId] || [];
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
    html += `
        <div class="school-detail">
            <p><strong>Location:</strong> ${ward.name} Ward, ${subCounty.name} Sub-County</p>
            <div class="metrics">
                <h3>Performance Metrics</h3>
                <ul>
                    <li><strong>Student Population:</strong> ${school.studentPopulation}</li>
                    <li><strong>Teacher Population:</strong> ${school.teacherPopulation}</li>
                    <li><strong>Teacher-to-Student Ratio:</strong> 1:${ratio}</li>
                    <li><strong>Renovation Status:</strong> <span class="status status-${school.renovationStatus}">${statusText}</span></li>
                </ul>
            </div>
            <div class="image-comparison">
                <h3>Renovation Progress</h3>
                <div class="image-grid">
                    <div class="image-pair">
                        <figure>
                            <img src="${school.beforeImage}" alt="${school.name} - Before Renovation">
                            <figcaption>Before Renovation</figcaption>
                        </figure>
                    </div>
                    <div class="image-pair">
                        <figure>
                            <img src="${afterImageSrc}" alt="${school.name} - ${afterImageCaption}">
                            <figcaption>${afterImageCaption}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    `;
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

// --- Back Navigation Logic ---
function goBack() {
    // If history is empty, go back to the initial view (list of sub-counties)
    if (navigationHistory.length === 0) {
        loadSubCounties();
        return;
    }

    // Get the last saved state from the history stack
    const previousState = navigationHistory.pop();

    // Call the appropriate function based on the saved action
    if (previousState.action === 'loadSubCounties') {
        loadSubCounties();
    } else if (previousState.action === 'loadWards') {
        // Reload wards list for the specific sub-county
        loadWards(previousState.data);
    } else if (previousState.action === 'loadSchools') {
        // Reload schools list for the specific ward
        loadSchools(previousState.data);
    } else {
        // Fallback: Clear history and go to start if action is unknown
        navigationHistory = [];
        loadSubCounties();
    }
}

// --- Terms & Conditions Display ---
function showTerms() {
    // Save the current view to history so 'Back' works from Terms
    navigationHistory.push({ action: 'currentView', title: contentTitle.textContent, html: contentDisplay.innerHTML });

    contentTitle.textContent = "Terms & Conditions";
    const html = `
        <button class="back-btn" onclick="goBack()">Back</button>
        <div style="background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h3>Website Terms and Conditions of Use</h3>
            <p><strong>1. Introduction</strong></p>
            <p>Welcome to the Nyeri ECDE Renovation Tracker. These terms govern your use of this website.</p>
            <p><strong>2. Intellectual Property</strong></p>
            <p>Content is protected. Rights belong to Nyeri County Government and Dantedone.</p>
            <p><strong>3. Use of Information</strong></p>
            <p>Information is for general purposes. Accuracy is strived for but not guaranteed.</p>
            <p><strong>4. Disclaimer</strong></p>
            <p>Materials are provided "as is". No warranties are made.</p>
            <p><strong>5. Limitations</strong></p>
            <p>Liability for damages arising from use is excluded.</p>
            <p><strong>6. Governing Law</strong></p>
            <p>These terms are governed by the laws of the Republic of Kenya.</p>
            <p><strong>7. Changes</strong></p>
            <p>Terms may be revised. Review periodically.</p>
            <p><strong>8. Contact</strong></p>
            <p>Contact the Nyeri County Education Office for queries.</p>
        </div>
    `;
    contentDisplay.innerHTML = html;
    scrollToSection('main-content');
}

// --- Utility Functions ---
function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

// --- Event Listeners ---
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});

// Centralized event listener for dynamic content (already correct)
contentDisplay.addEventListener('click', (e) => {
    const target = e.target.closest('a.list-item');
    if (!target) return;

    e.preventDefault(); // Prevent default link behavior

    const { action, id, schoolId, wardId } = target.dataset;

    if (action === 'loadWards') {
        loadWards(id);
    } else if (action === 'loadSchools') {
        loadSchools(id);
    } else if (action === 'loadSchoolDetail') {
        loadSchoolDetail(schoolId, wardId);
    }
});

// Scroll animations (already correct)
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);
animatedElements.forEach(el => observer.observe(el));

// --- Setup initial event listeners on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the Explore Nyeri button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            loadSubCounties();
            scrollToSection('main-content');
        });
    }

    // Add event listener for the Terms & Conditions link
    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            showTerms();
        });
    }

    // Placeholder messages for direct nav links (though minimal nav doesn't use them much)
    // These can be kept or removed based on final design
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
