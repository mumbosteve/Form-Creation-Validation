// Step 1: Define the asynchronous function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch the API response
    const response = await fetch(apiUrl);

    // Step 5: Convert the response to JSON
    const users = await response.json();

    // Step 6: Clear any loading message
    dataContainer.innerHTML = '';

    // Step 7: Create a list to hold the user names
    const userList = document.createElement('ul');

    // Step 8: Loop through the users and create <li> items
    users.forEach(function(user) {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 9: Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 10: Handle fetch errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Step 11: Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
