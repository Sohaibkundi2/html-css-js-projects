# GitHub Profile Checker

This is a simple web application that allows users to search and view GitHub profile details by entering a GitHub username. It fetches real-time data from the GitHub API and displays essential profile information in a clean and responsive UI.

## Features

- Fetches GitHub user data using GitHub's public API.
- Displays:
  - Profile picture and name
  - Username with GitHub profile link
  - Bio, email, location, and last profile update
  - Followers, following, and public repository count
- Loader message while fetching data
- Error handling for invalid or non-existent usernames
- Fully responsive layout with a gradient card design

## Technologies Used

- HTML5
- CSS3 (Responsive layout, gradients, hover effects)
- JavaScript (ES6, Fetch API, DOM manipulation)
- GitHub REST API


## How It Works

1. User enters a GitHub username in the input field.
2. On clicking the "search" button:
   - A loader message appears.
   - The app sends a request to `https://api.github.com/users/{username}`.
   - On success, a profile card with user details is rendered.
   - If the user is not found, an error message is shown.


![ss](image.png)


## Author

**Sohaib Kundi**  
Frontend & MERN Stack Developer  
- [GitHub](https://github.com/sohaibkundi2)
-  [LinkedIn](https://www.linkedin.com/in/sohaibkundi2)