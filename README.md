## 📌 Project Description
🎯 Objective
This project aims to develop a smart wearable assistive device designed to improve spatial awareness and mobility for visually impaired individuals. By integrating advanced sensors and haptic feedback into a compact wearable form, the device empowers users to detect obstacles and orient themselves safely in real-world environments through non-visual cues.

## 🧠 System Architecture Overview

The system is built around a Raspberry Pi 4 or 5, acting as the central hub that gathers data from onboard sensors, processes it in real time, and controls vibration motors that serve as tactile feedback mechanisms. The device is powered by a rechargeable battery and supports optional wireless connectivity for data sync or remote control.

## ⚙️ Hardware Components
🟢 Lidar Detector: Measures the distance to surrounding obstacles and passes object detection data to the Raspberry Pi. Useful for short- and mid-range navigation.

🟠 Inertial Measurement Unit (IMU): Captures acceleration, orientation, and rotation data. Used to determine walking direction and motion state.

🔵 Vibration Motor(s): Provide real-time tactile cues based on obstacle location and proximity.

🟥 Raspberry Pi 4/5: Acts as the core computing unit, running Python-based sensor programs and managing actuator control.

🔺 Battery: Rechargeable battery pack supplying power to the entire system.

## 💻 Software Components
🐍 Sensor Training & Actuation Control — Python
All sensor communication, data processing, and actuator control are implemented in Python, leveraging its robust ecosystem of hardware and AI libraries. Key responsibilities include:

Sensor Drivers: Communicate with Lidar and IMU via I2C/UART using libraries like smbus, pyserial, and adafruit-circuitpython-lidarlite.

Data Processing: Apply filtering and signal processing to raw input data (e.g., smoothing IMU output, noise reduction).

Decision Logic: Analyze sensor fusion results to determine obstacle proximity and user state.

Actuator Control: Trigger vibration motors through GPIO using RPi.GPIO or gpiozero, with configurable intensity and patterning.


## 📱 Companion App – Frontend Development
To support device configuration, system feedback, and user data sync, a frontend application is being developed. This app will be accessible via either a mobile or desktop interface and is built using modern JavaScript frameworks:

React Native (for mobile - iOS/Android) or Electron + React.js (for desktop)

Communicates with Raspberry Pi via Bluetooth Low Energy (BLE) or Wi-Fi

Frontend Features (Planned):

Display system status (battery, connection, sensor health)

Adjust vibration patterns or sensitivity thresholds

Provide voice instructions or logs for caregivers

Record and visualize movement patterns (for research or improvement)

## 🧪 Development features
Language: Python 3.10+

IDE: VSCode (for Pi-side code), Android Studio / Expo (for mobile app)

Libraries: OpenCV (optional), NumPy, GPIO libraries, BLE communication packages

UI Framework: React Native or Flutter, with accessibility best practices

Cross-platform: Designed for compatibility with Android and Linux systems