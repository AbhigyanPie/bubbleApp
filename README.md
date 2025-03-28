# Bubbles App - Testing  

A simple JavaScript-based web application built using **HTML5 Canvas** and **plain JavaScript** (no external libraries) to demonstrate basic animation and event handling.  

## Project Overview  

The **Bubbles App** consists of:  
1. A **circle** (bubble) on the left side of the canvas, assigned a **random color**.  
2. An **arrow** on the right side of the canvas, aimed at the circle.  
3. A **"Hit" button** that moves the arrow toward the circle when clicked.  
4. When the arrow hits the circle, the circle **changes color**.  
5. A **"Reset" button** to restore the initial state of the application.  

This project is designed to test **JavaScript event handling, animations, and the HTML5 Canvas API**.  

## Tech Stack  

- **HTML5** (Canvas Element for Drawing)  
- **CSS** (Basic Styling)  
- **JavaScript (ES6)** (Animation, DOM Manipulation, Event Handling)  

No third-party libraries like jQuery or KineticJS were used.  

## Installation & Setup  

To run this project on your local machine:  

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/your-username/bubbles-app.git
   cd bubbles-app

2. **Open in Browser**

Simply double-click the index.html file in your project folder, and it will open in your default web browser.

OR

3. **Run with a Local Server (Recommended)**

If you have Python installed, you can start a simple HTTP server:

  python -m http.server 8000
  
**How It Works**
1. When the Hit button is clicked, the arrow moves left toward the circle.

2. When the arrow collides with the circle, the circle changes to a new random color.

3. The Reset button restores the initial state (resets arrow position & changes circle color).
