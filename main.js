// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Program tabs
const tabs = document.querySelectorAll('.tab');
const programDetails = document.getElementById('program-details');
const programData = {
  certificate: {
    title: 'Certificate in Biblical Studies',
    desc: 'A 1-year foundational program covering core biblical principles and ministry basics.',
    prereq: 'High school diploma or equivalent.'
  },
  diploma: {
    title: 'Diploma in Ministry Leadership',
    desc: 'A 2-year program focused on leadership, discipleship, and practical ministry skills.',
    prereq: 'Certificate or equivalent experience.'
  },
  degree: {
    title: 'Bachelor of Theology',
    desc: 'A 4-year degree for in-depth theological study and advanced ministry preparation.',
    prereq: 'Diploma or equivalent.'
  }
};
function showProgram(tab) {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const key = tab.dataset.tab;
  const data = programData[key];
  programDetails.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    <p><strong>Prerequisite:</strong> ${data.prereq}</p>
  `;
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => showProgram(tab));
});
if (tabs.length) showProgram(tabs[0]);

// Placeholder dynamic content
const facultyList = document.querySelector('.faculty-list');
if (facultyList) {
  facultyList.innerHTML = `
    <div class="faculty-profile">
      <img src="images/faculty1.jpg" alt="Dr. Jane Smith" />
      <h4>Dr. Jane Smith</h4>
      <p>Dean of Theology</p>
    </div>
    <div class="faculty-profile">
      <img src="images/faculty2.jpg" alt="Rev. John Doe" />
      <h4>Rev. John Doe</h4>
      <p>Professor of Ministry</p>
    </div>
  `;
}
const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
  testimonialCarousel.innerHTML = `
    <blockquote>"U4FF changed my life and deepened my faith!"<br><span>- Alumni, 2023</span></blockquote>
    <blockquote>"The faculty truly care about every student."<br><span>- Student, 2024</span></blockquote>
  `;
}
const eventsList = document.querySelector('.events-list');
if (eventsList) {
  eventsList.innerHTML = `
    <div class="event-item"><strong>Sept 15:</strong> Fall Semester Begins</div>
    <div class="event-item"><strong>Oct 10:</strong> Chapel Service with Guest Speaker</div>
  `;
}
const blogList = document.querySelector('.blog-list');
if (blogList) {
  blogList.innerHTML = `
    <div class="blog-post"><h4>How to Study the Bible Effectively</h4><p>Tips and resources for deepening your study.</p></div>
    <div class="blog-post"><h4>Meet Our Alumni: Stories of Transformation</h4><p>Read inspiring journeys from our graduates.</p></div>
  `;
}
const gallery = document.querySelector('.gallery');
if (gallery) {
  gallery.innerHTML = `
    <img src="images/campus1.jpg" alt="Campus Life" />
    <img src="images/campus2.jpg" alt="Classroom" />
  `;
}
const videoSection = document.querySelector('.video-section');
if (videoSection) {
  videoSection.innerHTML = `
    <iframe width="320" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sample Lecture" frameborder="0" allowfullscreen></iframe>
  `;
}
// Enrollment form handler
const enrollForm = document.getElementById('enroll-form');
if (enrollForm) {
  enrollForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    enrollForm.reset();
  });
} 