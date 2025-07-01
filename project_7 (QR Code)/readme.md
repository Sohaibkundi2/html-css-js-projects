# QR Code Generator

A simple and interactive QR Code Generator built with HTML, CSS, and JavaScript. It generates QR codes instantly using an external API based on user input.

## Features

- Generates QR code based on any text or URL
- Live preview of the generated QR code
- Smooth animations for better UX
- Fully responsive and clean UI

## Tech Stack

- HTML
- CSS (with transitions)
- JavaScript (DOM + API usage)

## How It Works

1. User types a message, link, or any text into the input box.
2. On form submission, a GET request is sent to:
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=your-input
```
3. The API returns a QR image, which is shown with a slide-in animation.


## Preview
![ss](image.png)

## Author

**Sohaib Kundi**  
Frontend & MERN Stack Developer  
- [GitHub](https://github.com/sohaibkundi)  
- [LinkedIn](https://www.linkedin.com/in/sohaibkundi2)