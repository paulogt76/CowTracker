// Select form and result container
const form = document.getElementById('CowForm');
const resultContainer = document.getElementById('result');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the page from refreshing on form submit

  // Get values from form inputs
  const cowName = document.getElementById('cowName').value;
  const cowBreed = document.getElementById('cowBreed').value;
  const DOB = document.getElementById('DOB').value; // Now it's an input of type "date"

  // Display the entered data
  resultContainer.innerHTML = `
    <h2>Submitted Information:</h2>
    <p><strong>Cow Name:</strong> ${cowName}</p>
    <p><strong>Cow Breed:</strong> ${cowBreed}</p>
    <p><strong>DOB:</strong> ${DOB}</p>
  `;

  // Clear the form fields
  form.reset();
});
