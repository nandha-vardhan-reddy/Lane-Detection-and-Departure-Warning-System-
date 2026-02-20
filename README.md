# Lane-Detection-and-Departure-Warning-System-
Full-stack Lane Detection &amp; Departure Warning System built using HTML, CSS, JavaScript, Python, Flask, and OpenCV. Performs real-time lane detection and departure alerts from video input, integrating computer vision with a responsive web interface for intelligent and practical road safety assistance. This system allows users to upload road images or videos and view real-time lane detection results directly on the same webpage.

# Features

-Upload road images or videos

-Detect lane boundaries using OpenCV

-Identify vehicle deviation from lane center

-Display SAFE / WARNING alerts

-Before vs After comparison (same page)

-Clean, responsive UI


# System Architecture

Frontend (HTML + CSS + JS)
⬇
Flask Backend API
⬇
Lane Detection Module (OpenCV)
⬇
Lane Departure Logic
⬇
Processed Output + Alert Response

# Tech Stack
Backend- Python 3.9+, Flask, OpenCV, NumPy

Frontend- HTML5, CSS3, JavaScript

Tools-VS Code, Git & GitHub

# How It Works

User uploads an image or video

Flask receives the file

OpenCV processes each frame

Lane lines are detected using:

Grayscale conversion

Gaussian blur

Canny edge detection

Region of interest masking

Hough Line Transform

Lane center is calculated

Vehicle center is compared

If deviation exceeds threshold → WARNING

Result is displayed on the same webpage

# Lane Departure Logic

Vehicle Center = Frame Width / 2
Lane Center = Average of detected lane line positions

If:

abs(vehicle_center - lane_center) > threshold


Then:

Lane Departure Detected

# Future Enhancements

Deep Learning lane detection (UltraFast / YOLOv8)

Real-time webcam support

Driver drowsiness detection

Deployment on cloud (Render / AWS)

Mobile version

Performance metrics dashboard

 # Applications

Advanced Driver Assistance Systems (ADAS)

Road Safety Research

Smart Transportation Systems

Autonomous Driving Prototypes
