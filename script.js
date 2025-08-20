const speakers = [
    {
        name: "Ravi Tamada",
        title: "Founder & CEO, Coding Ninjas",
        image: "images/RaviTamada-Picture.jpg",
        bio: "An accomplished leader and visionary in the ed-tech space, Ravi Tamada has a track record of building and scaling successful educational platforms that empower thousands of students.",
        linkedin: "https://www.linkedin.com/in/ravi-tamada-a6b1421a/"
    },
    {
        name: "Siddhartha",
        title: "Lead Instructor, Scaler",
        image: "images/Siddhartha-photo-cropped.jpeg",
        bio: "A renowned expert in software development and data structures, Siddhartha has mentored thousands of students to excel in technical interviews and secure top positions in leading tech companies.",
        linkedin: "https://www.linkedin.com/in/siddhartha-a1b2c3d4/"
    },
    {
        name: "Vikas Bandaru",
        title: "Technical Manager, OIA",
        image: "images/vikas-photo.png",
        bio: "Vikas is a dynamic technical manager who specializes in fostering robust industry-academia partnerships. He is a key driver in bringing cutting-edge technologies like Salesforce and AI to university students.",
        linkedin: "https://www.linkedin.com/in/vikas-bandaru-e5f8g7h9/"
    }
];

function renderSpeakers() {
    const speakersContainer = document.getElementById('speakers-container');
    if (!speakersContainer) {
        console.error('Error: Speakers container not found.');
        return;
    }
    
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'card speaker-card';
        speakerCard.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
            <div class="speaker-content">
                <h3 class="speaker-name">${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <p class="speaker-bio">${speaker.bio}</p>
                <a href="${speaker.linkedin}" target="_blank" class="linkedin-link">
                    <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                </a>
            </div>
        `;
        speakersContainer.appendChild(speakerCard);
    });
}

function renderCharts() {
    // Project Submissions Chart (Doughnut Chart)
    const submissionsChart = document.getElementById('submissionsChart');
    if (submissionsChart) {
        new Chart(submissionsChart, {
            type: 'doughnut',
            data: {
                labels: ['Completed Projects', 'In-Progress'],
                datasets: [{
                    data: [120, 30],
                    backgroundColor: ['#5d5dff', '#ff3366'],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#e0e0e0', font: { size: 14 } }
                    }
                }
            }
        });
    }

    // Certification Progress Chart (Polar Area Chart)
    const certificationsChart = document.getElementById('certificationsChart');
    if (certificationsChart) {
        new Chart(certificationsChart, {
            type: 'polarArea',
            data: {
                labels: ['Beginner', 'Intermediate', 'Advanced'],
                datasets: [{
                    data: [80, 50, 20],
                    backgroundColor: ['#5d5dff', '#ff3366', '#2fe084'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#e0e0e0', font: { size: 14 } } }
                },
                scales: {
                    r: { grid: { color: 'rgba(255,255,255,0.1)' } }
                }
            }
        });
    }

    // Event Attendance Chart (Line Chart)
    const attendanceChart = document.getElementById('attendanceChart');
    if (attendanceChart) {
        new Chart(attendanceChart, {
            type: 'line',
            data: {
                labels: ['Workshop 1', 'Guest Lecture', 'Project Expo', 'Hackathon'],
                datasets: [{
                    label: 'Average Attendees',
                    data: [85, 110, 130, 95],
                    fill: false,
                    borderColor: '#2fe084',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: '#e0e0e0' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    y: { ticks: { color: '#e0e0e0' }, grid: { color: 'rgba(255,255,255,0.1)' } }
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderSpeakers();
    renderCharts();
});
