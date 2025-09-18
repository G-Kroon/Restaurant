// Google Maps Integration
function initMap() {
  // Change these coordinates to your restaurant's location
  const restaurantLocation = { lat: -33.8688, lng: 151.2093 }; // Example: Sydney
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: restaurantLocation,
    mapTypeId: 'roadmap',
    styles: [
      // Optional: Custom map styling for an upmarket look
      {
        "featureType": "water",
        "stylers": [{ "color": "#e94560" }]
      },
      {
        "featureType": "landscape",
        "stylers": [{ "color": "#f7f7f7" }]
      },
      {
        "featureType": "poi.park",
        "stylers": [{ "color": "#c7e945" }]
      }
    ]
  });

  new google.maps.Marker({
    position: restaurantLocation,
    map: map,
    title: "[Restaurant Name]",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
  });
}

// Initialize map when Google Maps API finishes loading
if (typeof google !== "undefined") {
  window.addEventListener("load", initMap);
} else {
  // fallback if API hasn't loaded yet
  window.initMap = initMap;
}

// Reservation Form Handling (frontend only)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("reservationForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form data
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.date.value,
      time: form.time.value,
      guests: form.guests.value
    };

    // Simple validation (can be expanded)
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "#e94560";
      return;
    }

    // Here you would send the data to your backend (e.g., via fetch/AJAX)
    // For demonstration, we'll just show a success message.
    formMessage.textContent = "Thank you! Your reservation request has been received.";
    formMessage.style.color = "#1a1a2e";
    form.reset();
  });
});
