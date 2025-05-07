/* Script for menu toggle, dark mode toggle, and booking modal */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('nav ul.nav-links');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Menu toggle for mobile
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('show');
  });

  // Dark mode toggle
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = 'Light Mode';
    } else {
      darkModeToggle.textContent = 'Dark Mode';
    }
  });

  // Close mobile menu when clicking a nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('open');
      }
    });
  });

  // Booking modal functionality
  const scheduleRepairBtn = document.getElementById('schedule-repair-btn');
  const bookingModal = document.getElementById('booking-modal');
  const closeBookingModalBtn = document.getElementById('close-booking-modal');
  const bookingForm = document.getElementById('booking-form');

  if (scheduleRepairBtn && bookingModal && closeBookingModalBtn && bookingForm) {
    scheduleRepairBtn.addEventListener('click', (e) => {
      e.preventDefault();
      bookingModal.classList.remove('hidden');
    });

    closeBookingModalBtn.addEventListener('click', () => {
      bookingModal.classList.add('hidden');
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.add('hidden');
      }
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you can add form submission logic, e.g., send data to server
      alert('Thank you for scheduling your repair. We will contact you soon.');
      bookingForm.reset();
      bookingModal.classList.add('hidden');
    });
  }

  // Popping button animation trigger on page load
  const poppingButtons = document.querySelectorAll('.popping-button');
  poppingButtons.forEach(button => {
    button.classList.remove('popping-button');
    void button.offsetWidth; // Trigger reflow to restart animation
    button.classList.add('popping-button');
  });

  // Add click event to "Book a Repair Now" button to navigate to contact.html
  const bookRepairBtn = document.getElementById('book-repair-btn');
  if (bookRepairBtn) {
    bookRepairBtn.removeEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
});
