document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-bar button').addEventListener('click', function() {
        let searchQuery = document.querySelector('.search-bar input').value.toLowerCase();
        let hostels = document.querySelectorAll('.hostel-item');

        hostels.forEach(hostel => {
            let hostelLocation = hostel.querySelector('p').textContent.toLowerCase();
            if (hostelLocation.includes(searchQuery)) {
                hostel.style.display = 'block';
            } else {
                hostel.style.display = 'none';
            }
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Function to filter hostels based on search input
function searchHostels() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const hostelItems = document.getElementsByClassName('hostel-item');

    for (let i = 0; i < hostelItems.length; i++) {
        const name = hostelItems[i].getAttribute('data-name').toLowerCase();
        const description = hostelItems[i].getAttribute('data-description').toLowerCase();

        if (name.includes(input) || description.includes(input)) {
            hostelItems[i].style.display = 'block';
        } else {
            hostelItems[i].style.display = 'none';
        }
    }
}

// Function to filter bookings based on search input
function searchBookings() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const bookingItems = document.getElementsByClassName('booking-item');

    for (let i = 0; i < bookingItems.length; i++) {
        const name = bookingItems[i].getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            bookingItems[i].style.display = 'block';
        } else {
            bookingItems[i].style.display = 'none';
        }
    }
}

// Function to view booking details
function viewBooking(bookingId) {
    alert(`Viewing details for booking ID: ${bookingId}`);
    // Here you can add code to fetch and display detailed booking information
}

// Function to cancel a booking
function cancelBooking(bookingId) {
    const confirmation = confirm(`Are you sure you want to cancel booking ID: ${bookingId}?`);
    if (confirmation) {
        const bookingList = document.getElementById('booking-list');
        const bookingItems = bookingList.getElementsByClassName('booking-item');
        
        for (let i = 0; i < bookingItems.length; i++) {
            if (bookingItems[i].querySelector('.booking-details p:nth-of-type(1)').textContent === `Booking ID: ${bookingId}`) {
                bookingList.removeChild(bookingItems[i]);
                break;
            }
        }
    }
}

// Function to filter reviews based on search input
function searchReviews() {
    const input = document.getElementById('search-review').value.toLowerCase();
    const reviewItems = document.getElementsByClassName('review-item');

    for (let i = 0; i < reviewItems.length; i++) {
        const name = reviewItems[i].getAttribute('data-name').toLowerCase();
        const reviewText = reviewItems[i].querySelector('p').textContent.toLowerCase();
        if (name.includes(input) || reviewText.includes(input)) {
            reviewItems[i].style.display = 'block';
        } else {
            reviewItems[i].style.display = 'none';
        }
    }
}

// Function to handle review submission
function handleReviewSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('reviewer-name').value;
    const hostel = document.getElementById('review-hostel').value;
    const text = document.getElementById('review-text').value;
    const rating = document.getElementById('review-rating').value;

    // Ensure all fields are filled
    if (!name || !hostel || !text || !rating) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new review element
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.innerHTML = `
        <h3>${name}</h3>
        <p>${hostel} - ${text}</p>
        <div class="rating">Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
    `;

    reviewList.appendChild(newReview);

    // Clear the form
    document.getElementById('review-form').reset();

    // Display success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Thank you! Your review has been received successfully.';

    // Append the success message before the form
    const formContainer = document.querySelector('.add-review');
    formContainer.insertBefore(successMessage, formContainer.firstChild);

    // Remove the success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

//for profile.html file

document.addEventListener('DOMContentLoaded', () => {
    loadBookingHistory();
});

function updateUserInfo() {
    // Get updated user information
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Perform validation if necessary
    if (!email || !phone) {
        alert('Please fill out all fields.');
        return;
    }

    // Update user information (this is a placeholder, replace with actual update logic)
    alert('Your information has been updated successfully.');
}

function changePassword() {
    // Get password fields
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Perform validation
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New password and confirmation do not match.');
        return;
    }

    // Change password (this is a placeholder, replace with actual change logic)
    alert('Your password has been changed successfully.');
}

function loadBookingHistory() {
    // Simulate fetching booking data from the bookings page (replace with actual data fetching logic)
    const bookingHistory = [
        { hostel: 'Hostel 1', date: '2024-07-01', status: 'Confirmed' },
        { hostel: 'Hostel 2', date: '2024-06-15', status: 'Cancelled' },
        { hostel: 'Hostel 3', date: '2024-05-20', status: 'Completed' },
        { hostel: 'Hostel 4', date: '2024-04-22', status: 'Confirmed' },
        { hostel: 'Hostel 5', date: '2024-03-18', status: 'Completed' },
        { hostel: 'Hostel 6', date: '2024-02-14', status: 'Confirmed' },
        { hostel: 'Hostel 7', date: '2024-01-10', status: 'Completed' },
        { hostel: 'Hostel 8', date: '2023-12-01', status: 'Cancelled' },
        { hostel: 'Hostel 9', date: '2023-11-11', status: 'Completed' },
        { hostel: 'Hostel 10', date: '2023-10-20', status: 'Confirmed' }
    ];

    const bookingHistoryList = document.getElementById('booking-history-list');

    bookingHistory.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `${booking.hostel} - ${booking.date} - ${booking.status}`;
        bookingHistoryList.appendChild(listItem);
    });
}

//for booking.html 

function submitBooking() {
    const hostel = document.getElementById('hostel').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const amount = document.getElementById('amount').value;

    // Perform validation
    if (!hostel || !checkIn || !checkOut || !guests || !paymentMethod) {
        alert('Please fill out all fields.');
        return;
    }

    // Store booking data in localStorage
    const bookingData = {
        hostel,
        checkIn,
        checkOut,
        guests,
        paymentMethod,
        amount
    };
    localStorage.setItem('latestBooking', JSON.stringify(bookingData));

    // Redirect to bookings page
    window.location.href = 'bookings.html';
}

/*document.addEventListener('DOMContentLoaded', () => {
    const bookingDetails = document.getElementById('booking-details');
    const latestBooking = JSON.parse(localStorage.getItem('latestBooking'));

    if (latestBooking) {
        const { hostel, checkIn, checkOut, guests, paymentMethod, amount } = latestBooking;
        bookingDetails.innerHTML = `
            <p><strong>Hostel:</strong> ${hostel}</p>
            <p><strong>Check-in Date:</strong> ${checkIn}</p>
            <p><strong>Check-out Date:</strong> ${checkOut}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p><strong>Amount:</strong> ${amount}</p>
            <p><strong>Note:</strong> Your booking is 100% refundable if you do not like the hostel.</p>
        `;
        
        // Clear the stored booking data
        localStorage.removeItem('latestBooking');
    } else {
        bookingDetails.innerHTML = '<p>No recent bookings found.</p>';
    }
});*/