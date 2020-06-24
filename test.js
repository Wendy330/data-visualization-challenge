// test('findMaxValue function is defined', () => {
//     expect(findMaxValue).toBeDefined();
// });
//
// test('Calling findMaxValue with data json', () => {
//     var data = [{
//         key: 'A',
//         values: [
//             {key: '1', value: 300},
//             {key: '2', value: 220},
//             {key: '3', value: 330}
//         ]
//     }];
//
//     expect(findMaxValue(data)).toEqual(400);
// });
//
// test('parseData function is defined', () => {
//     expect(parseData).toBeDefined();
// });
//
// test('Calling parseData to prepare data', () => {
//     var originalData = [[{
//         AIRLINE: "NK",
//         AIR_TIME: "156",
//         ARRIVAL_DELAY: "43",
//         ARRIVAL_TIME: "0632",
//         CANCELLATION_REASON: "A",
//         CANCELLED: "1",
//         DAY: "1",
//         DAY_OF_WEEK: "4",
//         DEPARTURE_DELAY: "72",
//         DEPARTURE_TIME: "0237",
//         DESTINATION_AIRPORT: "ORD",
//         DISTANCE: "1440",
//         MONTH: "1",
//         ORIGIN_AIRPORT: "PHX",
//         SCHEDULED_ARRIVAL: "0549",
//         SCHEDULED_DEPARTURE: "0125"
//     }, {
//         AIRLINE: "MQ",
//         AIR_TIME: "",
//         ARRIVAL_DELAY: "",
//         ARRIVAL_TIME: "",
//         CANCELLATION_REASON: "B",
//         CANCELLED: "1",
//         DAY: "1",
//         DAY_OF_WEEK: "4",
//         DEPARTURE_DELAY: "",
//         DEPARTURE_TIME: "",
//         DESTINATION_AIRPORT: "DFW",
//         DISTANCE: "539",
//         MONTH: "1",
//         ORIGIN_AIRPORT: "MOB",
//         SCHEDULED_ARRIVAL: "0750",
//         SCHEDULED_DEPARTURE: "0600"
//     }]]
//
//     var formattedData = [{
//         key: 'A',
//         values: [
//             {key: '1', value: 1}
//         ]
//     }, {
//         key: 'B',
//         values: [
//             {key: '1', value: 1}
//         ]
//     }];
//
//     expect(parseData(originalData)).toEqual(formattedData);
// });
//
// test('Calling getXScale to return correct domain and range', () => {
//     var data = [0, 5, 10, 30, 50];
//     var scale = getXScale(data, {top: 0, right: 0, bottom: 0, left: 0}, 100);
//
//     expect(scale.domain()).toEqual([0, 5]);
//     expect(scale.range()).toEqual([0, 100]);
// });
//
// test('Calling getYScale to return correct domain and range', () => {
//     var data = [0, 5, 10, 30, 50];
//     var scale = getYScale(data, 100, {top: 0, right: 0, bottom: 0, left: 0});
//     expect(scale.domain()).toEqual([0, 50]);
//     expect(scale.range()).toEqual([100, 0]);
// });
//
// test('Calling getLineGenerator to return correct domain and range', () => {
//     var xScale = getXScale(data, {top: 0, right: 0, bottom: 0, left: 0}, 100);
//     var yScale = getYScale(data, 100, {top: 0, right: 0, bottom: 0, left: 0});
//     var generator = getLineGenerator(xScale, yScale);
//
//     expect(generator.x({key: 1, value:10})).toEqual(1);
//     expect(generator.y({key: 1, value:10})).toEqual(10);
// });