"use strict";
// 1chi topshiriq
// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
//   function fetchSequent(urls: string[]) {
//     let promise = Promise.resolve(); 
//     urls.forEach((url) => {
//       promise = promise
//         .then(() => {
//           console.log(`Fetching from URL: ${url}`);
//           return fetch(url);
//         })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Result:", data);
//         })
//         .catch((error) => {
//           console.error("Error:", error.message);
//         });
//     });
//     return promise;
//   }
//   fetchSequent(urls);
// 2 chi topshiriq
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";
// function fetchData() {
//   Promise.all([fetch(url1), fetch(url2)])
//     .then((responses) => {
//       return Promise.all(
//         responses.map((response) => {
//           if (!response.ok) {
//             throw new Error(`Failed to fetch: ${response.url}`);
//           }
//           return response.json();
//         })
//       );
//     })
//     .then((data) => {
//       console.log("Fetched data:", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error.message);
//     });
// }
// fetchData();
// 4 ti topshiriq
// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
//   const fetchData = async (urls: string[]) => {
//     for (const url of urls) {
//       try {
//         console.log(`Fetching from URL: ${url}`);
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch from ${url}`);
//         }
//         const result = await response.json();
//         console.log("Result:", result);
//       } catch (error) {
//         console.log(`Error fetching from URL ${url}:`);
//       }
//     }
//   };
//   fetchData(urls);
// 5 chi topshiriq
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";
// const fetchParallel = async () => {
//   try {
//     const [usersResponse, postsResponse] = await Promise.all([
//       fetch(url1),
//       fetch(url2),
//     ]);
//     if (!usersResponse.ok || !postsResponse.ok) {
//       throw new Error("Failed to fetch data from one or both APIs");
//     }
//     const users = await usersResponse.json();
//     const posts = await postsResponse.json();
//     const result = [users, posts];
//     console.log("Fetched data:", result);
//   } catch (error) {
//     console.error("Xatolik yuz berdi, ma’lumotni yuklab bo‘lmadi.");
//   }
// };
// fetchParallel();
// 6 chi topshiriq
// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";
// interface Photo {
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }
// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// interface Comment {
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// }
// const fetchData = async (url: string): Promise<any> => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data from ${url}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(`Error fetching from ${url}:`);
//     throw error;
//   }
// };
// const getFirstSuccess = async () => {
//   const urls = [url1, url2, url3];
//   for (const url of urls) {
//     try {
//       const result = await fetchData(url);
//       console.log("First successful request result:", result);
//       return; 
//     } catch (error) {
//       continue;
//     }
//   }
//   console.error("Barcha so‘rovlar xato bilan tugadi.");
// };
// getFirstSuccess();
// 7 chi topshiriq
// function wrapData<T>(data: T) {
//     return {
//       status: "success",
//       data: data,
//     };
//   }
//   const wrapString = wrapData("Hello, world!");
//   console.log(wrapString);
//   const wrapNumber = wrapData(42);
//   console.log(wrapNumber); 
//   const wrapObject = wrapData({ id: 1, name: "John Doe" });
//   console.log(wrapObject);
// 8 chi topshiriq
// function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.filter(element => arr2.includes(element));
//   }
//   const numbers1 = [1, 2, 3, 4];
//   const numbers2 = [3, 4, 5, 6];
//   const commonNumbers = findCommonElements(numbers1, numbers2);
//   console.log(commonNumbers); 
//   const strings1 = ["apple", "banana", "cherry"];
//   const strings2 = ["banana", "cherry", "date"];
//   const commonStrings = findCommonElements(strings1, strings2);
//   console.log(commonStrings);
