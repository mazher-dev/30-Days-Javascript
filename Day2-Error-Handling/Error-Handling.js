// Fetch and Process Data


// 1. Simulate an API
// function mockAPI(callback) {
//     setTimeout(() => {
//       const success = Math.random() > 0.5; // 50% chance of success
//       if (success) {
//         callback(null, { id: 1, name: "John Doe", age: 30 });
//       } else {
//         callback("Failed to fetch data", null);
//       }
//     }, 1000);
//   }
  
//   // 2. Handling Errors with Callbacks
//   function fetchDataWithCallback() {
//     console.log("Fetching data using Callback...");
//     mockAPI((error, data) => {
//       if (error) {
//         console.error("Callback Error:", error);
//       } else {
//         console.log("Callback Data:", data);
//       }
//     });
//   }
  
//   // 3. Convert to Promises
//   function fetchDataWithPromise() {
//     return new Promise((resolve, reject) => {
//       mockAPI((error, data) => {
//         if (error) {
//           reject(error); // Propagate error
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }
  
//   // 4. Use Async/Await with Error Handling
//   async function fetchDataWithAsyncAwait() {
//     console.log("Fetching data using Async/Await...");
//     try {
//       const data = await fetchDataWithPromise(); // Handle promise
//       console.log("Async/Await Data:", data);
//     } catch (error) {
//       console.error("Async/Await Error:", error);
//     } finally {
//       console.log("Async/Await Cleanup: Done with operation.");
//     }
//   }
  
//   // Run the Program
//   console.log("Starting Program...\n");
//   fetchDataWithCallback(); // Callback example
  
//   setTimeout(() => {
//     fetchDataWithPromise()
//       .then(data => console.log("Promise Data:", data))
//       .catch(error => console.error("Promise Error:", error))
//       .finally(() => console.log("Promise Cleanup: Operation completed."));
//   }, 1500);
  
//   setTimeout(() => {
//     fetchDataWithAsyncAwait(); // Async/Await example
//   }, 3000);
  

