

/**to learn callback hell
 * promise then catch
 * async function await
*/




//CORS PROXY to support Cross-Origin Issue
// const CORS_Proxy = "https://api.allorigins.win/raw?url=";

// //OpenWeatherMap Api key
// const api = "ba19352cf2e348f94afed75938e6a281";
// const place = "";

// //OpenWeatherMap URl
// const OpenWeatherUrl = `${CORS_Proxy}https://www.api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`;

// //MetaWeather does not need APi it work on where on earth
// let woeid = "2487956";
// const MetaWeatherUrl = `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}`;

// // In async it is imp to use the async function to use await
// async function weatherAW() {
//   try {
  
//   const result = await fetch(OpenWeatherUrl);
//   console.log(result);
  
//   const data = await result.json();
//   console.log(data);
    
//   } catch (err) {
//     console.log('i Got an ERR' + err);
    
// }}
// weatherAW();

// function weather() {
//   fetch(OpenWeatherUrl)
//     .then((re) => {
//       console.log(re);
//       return re.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
//weather();

// function getWeather(woeid) {
//   fetch(
//     `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}/`
//   )
//     .then((result) => {
//       console.log(result);
//       return result.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       const today = data.consolidated_weather[0];
//       console.log(
//         `Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
//       );
//     })
//     .catch((error) => console.log(error));
// }
//getWeather(2487956)

// fetch(url)
//   .then((results) => {
//     console.log(results);
//     return results.json();
//   })
//   .then((data) => {
//     console.log(data.consolidated_weather);
//   })
//   .catch((err) => console.log(err));

// let weather = fetch(url)
//   .then((data) => {
//     console.log(data.body);
//     return data.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// function first() {
//   setTimeout(() => {
//     console.log("hey man");
//   }, 2000);

// };
// second()

// function second() {
//   console.log('i am 2')

// //  first()
// third()
//    function third(){
//   console.log ('i am 3rd')

// }
// first()
// }

// call back hell   mtd 1
//func used setTimeout
// function getWeather() {
//   setTimeout(() => {
//     const rec = [234, 634, 745, 235, 436];
//     console.log(rec);

//     setTimeout(
//       (id) => {
//         const recTitle = { title: "pasta Sauce", publisher: "viishesh" };
//         console.log(id, recTitle);

//         setTimeout(
//           (publisher) => {
//             console.log(publisher);
//           },
//           1000,
//           recTitle.publisher
//         );
//       },
//       1000,
//       rec[2]
//     );
//   }, 1500);
// }
// //getWeather();

// //promice function    mtd 2 for callback function
// //func use promice, then, catch
// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([243, 532, 356, 235, 325]);
//   }, 1500);
// });

// const resTitle = (resId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (Id) => {
//         const res = { title: "pasta Sauce", publisher: "viishesh" };
//         resolve([`${Id} : ${res.title}`, res.publisher]);
//       },
//       1500,
//       resId[2]
//     );
//   });
// };

// const publisher = (pub) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (pub) => {
//         resolve(pub);
//       },
//       1000,
//       pub
//     );
//   });
// };

// //then and catch mtd

// // getIDs
// //   .then((ids) => {
// //     console.log(ids);
// //     return resTitle(ids);
// //   })
// //   .then((res) => {
// //     console.log(res[0]);
// //     return publisher(res[1]);
// //   })
// //   .then((pub) => {
// //     console.log(pub);
// //   })
// //   .catch((err) => {
// //     console.log(`I got An ${err}`);
// //   });

// //or
// // mtd 3 async await it is simillar to promise

// // async function getRecipy() {
// //   const ids = await getIDs;
// //   console.log(ids);
// //   const recipy = await resTitle(ids);
// //   console.log(recipy[0]);
// //   const pub = await publisher(recipy[1]);
// //   console.log(pub);

// //   return pub;
// // }

// // //then will help to pass the code after it will be ready as its parameter
// // getRecipy().then(res => console.log(`hey i am diffrent pub ${res}`))
