
self.onmessage = function (event) {
    const dataArray = event.data;
  
    // Perform addition
    const sumResult = dataArray.reduce((acc, val) => acc + val, 0);
  
    // Post the result of addition back to the main thread
    self.postMessage(sumResult);
  };
  