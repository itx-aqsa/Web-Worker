
self.onmessage = function (event) {
    const dataArray = event.data;
  
    // Perform sorting
    const sortedData = dataArray.slice().sort();
  
    // Post the sorted data back to the main thread
    self.postMessage(sortedData);
  };
  