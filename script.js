document.addEventListener('DOMContentLoaded', function() {
    const apodImage = document.getElementById('apod-image');
    const apodDescription = document.getElementById('apod-description');

    // NASA API endpoint for Astronomy Picture of the Day
    const apiKey = 'DEMO_KEY';  // You can replace with your own NASA API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Fetch the data from NASA API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Update the image and description
            apodImage.src = data.url;
            apodDescription.textContent = data.explanation;
        })
        .catch(error => {
            console.error('Error fetching NASA API data:', error);
        });
});
