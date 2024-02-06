# Web Workers

**Introduction**:

This project demonstrates the usage of Web Workers for performing sorting and addition tasks asynchronously in a web browser environment. Web Workers allow for running scripts in background threads, enabling parallel processing without blocking the main thread.

**Features**:

1. Utilizes Web Workers to perform sorting and addition tasks concurrently.
2. Measures the performance difference between processing data with and without Web Workers.
3. Allows users to compare the execution time for sorting and addition tasks with and without Web Workers.

**Technologies Used**:

1. HTML
2. JavaScript
3. Workers for parallel processing

**Setup**:

1. Clone the repository to your local machine:
   git clone https://github.com/itx-aqsa/web-worker.git
2. Navigate to the project directory:
3. Open the index.html file in a modern web browser.

**Usage**:

1. Click on the "Process Data With Workers" button to initiate sorting and addition tasks using Web Workers.
2. Click on the "Process Data Without Workers" button to perform sorting and addition tasks without using Web Workers.
3. Observe the execution time displayed in milliseconds via alert boxes for both scenarios.
4. Compare the performance difference between using Web Workers and not using Web Workers.

**Files**

**index.html:** HTML file containing the main structure and JavaScript code for handling user interaction.
**sortWorker.js:** JavaScript file containing the Web Worker code for sorting data.
**addWorker.js:** JavaScript file containing the Web Worker code for performing addition.
