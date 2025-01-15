# Password Generator

A simple and customizable password generator built with HTML, CSS, and JavaScript. This tool allows users to generate strong passwords based on their preferred criteria (uppercase, lowercase, numbers, symbols, and password length). Users can also copy the generated password to the clipboard.

## Features

- **Customizable Password Options:**
  - Choose the inclusion of uppercase letters, lowercase letters, numbers, and symbols.
  - Set the desired password length (between 1 and 32 characters).
  
- **Generate Password:**  
  Click on the "Generate" button to create a random password based on the selected criteria.

- **Copy to Clipboard:**  
  Click on the "Copy to Clipboard" button to easily copy the generated password to your clipboard.

- **Responsive Design:**  
  The app is fully responsive, making it functional on both desktop and mobile devices.

## Technology Stack

- **HTML**: The basic structure of the app and user interface.
- **CSS**: The styling for the dark-themed user interface with responsive design.
- **JavaScript**: Used for handling password generation, user interactions, and clipboard functionality.

## Installation

To run the Password Generator locally on your machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Saklain95/password-generator.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd password-generator
    ```

3. **Open the `index.html` file in your browser:**
   - Double-click the `index.html` file to view the app.
   - Alternatively, you can open it in any code editor (like VSCode) and run it in a browser.

## How to Use

1. **Select Password Options:**
   - Check or uncheck the boxes for uppercase, lowercase, numbers, and symbols to include or exclude them in your password.
   - Enter the desired password length (between 1 and 32).

2. **Generate a Password:**
   - Click the "Generate" button to generate a password based on the selected criteria.

3. **Copy the Password:**
   - After generating the password, click the "Copy to Clipboard" button to copy the password to your clipboard.

4. **Error Handling:**
   - If the settings are invalid (e.g., no characters selected or password length too short), an error message will be displayed.

## File Structure

```
password-generator/
├── index.html       # The main HTML file
├── style.css        # The CSS file for styling the app
└── script.js        # The JavaScript file for functionality
```

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. You can also open an issue if you find any bugs or want to suggest a new feature.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
