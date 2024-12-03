// Step 1: Callback to fetch data
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "Product A" };
      callback(null, data);
    }, 1000);
  }
  
  // Step 2: Promise to process data
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.name) {
          resolve({ ...data, processed: true });
        } else {
          reject("Data processing failed.");
        }
      }, 1000);
    });
  }
  
  // Step 3: Async/Await to log final data
  async function logProcessedData() {
    try {
      fetchDataWithCallback(async (err, data) => {
        if (err) {
          console.error("Callback error:", err);
          return;
        }
        const processedData = await processData(data);
        console.log("Final Processed Data:", processedData);
      });
    } catch (error) {
      console.error("Error during processing:", error);
    }
  }
  
  // Usage
  logProcessedData();
  