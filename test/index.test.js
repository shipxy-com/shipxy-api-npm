const shipxy = require('../index');

const key = "484db43a65ec4f87b5b4dcc69e586bf7";

test('SearchShip', async () => {
  let params = {
    key: key, keywords: "coco", max: 2
  }
  let result = await shipxy.SearchShip(params)
  console.log(result);
});

// test('GetSingleShip', async () => {
//   let params = {
//     key: key, mmsi: 413961925
//   }
//   let result = await shipxy.GetSingleShip(params)
//   console.log(result);
// });

// test('GetManyShip', async () => {
//   let params = {
//     key: key, mmsis: "413961925,477232800,477172700"
//   }
//   let result = await shipxy.GetManyShip(params)
//   console.log(result);
// });

// test('GetFleetShip', async () => {
//   let params = {
//     key: key, fleet_id: "72efa1dc-dc1d-45a6-9090-880835105363"
//   }
//   let result = await shipxy.GetFleetShip(params)
//   console.log(result);
// });

// test('GetSurRoundingShip', async () => {
//   let params = {
//     key: key, mmsi: 413881597
//   }
//   let result = await shipxy.GetSurRoundingShip(params)
//   console.log(result);
// });

// test('GetAreaShip', async () => {
//   let params = {
//     key: key,
//     region: "121.289063,35.424868-122.783203,35.281501-122.167969,33.979809",
//     output: 1,
//   }
//   let result = await shipxy.GetAreaShip(params)
//   console.log(result);
// });

// test('GetShipRegistry', async () => {
//   let params = {
//     key: key, mmsi: 477172700
//   }
//   let result = await shipxy.GetShipRegistry(params)
//   console.log(result);
// });

// test('SearchShipParticular', async () => {
//   let params = { key: key, mmsi: 477172700 }
//   let result = await shipxy.SearchShipParticular(params)
//   console.log(result);
// });

// test('SearchPort', async () => {
//   let params = { key, keywords: "qingdao", max: 2 }
//   let result = await shipxy.SearchPort(params)
//   console.log(result);
// });

// test('GetBerthShips', async () => {
//   let params = { key, port_code: "CNSHG" }
//   let result = await shipxy.GetBerthShips(params)
//   console.log(result);
// });

// test('GetAnchorShips', async () => {
//   let params = { key, port_code: "CNSHG" }
//   let result = await shipxy.GetAnchorShips(params)
//   console.log(result);
// });

// test('GetETAShips', async () => {
//   let params = { key, port_code: "CNSHG", start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.GetETAShips(params)
//   console.log(result);
// });

// test('GetShipTrack', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.GetShipTrack(params)
//   console.log(result);
// });

// test('SearchshipApproach', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.SearchshipApproach(params)
//   console.log(result);
// });

// test('GetPortofCallByShip', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1751007589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByShip(params)
//   console.log(result);
// });

// test('GetPortofCallByShipPort', async () => {
//   let params = { key, mmsi: 477172700, port_code: 'CNSHG', start_time: 1751007589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByShipPort(params)
//   console.log(result);
// });

// test('GetShipStatus', async () => {
//   let params = { key, mmsi: 477172700}
//   let result = await shipxy.GetShipStatus(params)
//   console.log(result);
// });

// test('GetPortofCallByPort', async () => {
//   let params = { key, port_code: 'CNSHG', start_time: 1751407589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByPort(params)
//   console.log(result);
// });

// test('PlanRouteByPoint', async () => {
//   let params = { key, start_point: '113.571144,22.844316', end_point: "121.58414,31.37979" }
//   let result = await shipxy.PlanRouteByPoint(params)
//   console.log(result);
// });

// test('PlanRouteByPort', async () => {
//   let params = { key, start_port_code: 'CNGZG', end_port_code: "CNSHG" }
//   let result = await shipxy.PlanRouteByPort(params)
//   console.log(result);
// });

// test('GetSingleETAPrecise', async () => {
//   let params = { key, mmsi: 477172700, port_code: "CNSHG", speed: 20 }
//   let result = await shipxy.GetSingleETAPrecise(params)
//   console.log(result);
// });

// test('GetWeatherByPoint', async () => {
//   let params = { key, lng: 123.58414, lat: 27.37979 }
//   let result = await shipxy.GetWeatherByPoint(params)
//   console.log(result);
// });

// test('GetWeather', async () => {
//   let params = { key, weather_type: 1 }
//   let result = await shipxy.GetWeather(params)
//   console.log(result);
// });

// test('GetAllTyphoon', async () => {
//   let params = { key}
//   let result = await shipxy.GetAllTyphoon(params)
//   console.log(result);
// });

// test('GetSingleTyphoon', async () => {
//   let params = { key, typhoon_id: 2477927 }
//   let result = await shipxy.GetSingleTyphoon(params)
//   console.log(result);
// });

// test('GetTides', async () => {
//   let params = { key }
//   let result = await shipxy.GetTides(params)
//   console.log(result);
// });

// test('GetTideData', async () => {
//   let params = { key, port_code: 8000005, start_date: '2025-03-01', end_date: '2025-03-05' }
//   let result = await shipxy.GetTideData(params)
//   console.log(result);
// });


// test('GetNavWarning', async () => {
//   let params = { key, start_time: '2024-07-21 20:00', end_time: '2024-09-21 20:00' }
//   let result = await shipxy.GetNavWarning(params)
//   console.log(result);
// });
