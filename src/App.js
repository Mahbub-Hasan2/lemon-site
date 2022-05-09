import './App.css';
// import Plot from 'react-plotly.js'
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function App() {
  Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
  }

  function getFakeDatesAndValue(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      const sliptCurrentDate = currentDate.toISOString().split("T")[0];
      const createNewDateObj = {
        date: sliptCurrentDate,
        value: 0
      }
      dateArray.push(createNewDateObj)
      currentDate = currentDate.addDays(1);
    }

    const convertToJson = JSON.parse(JSON.stringify(dateArray))
    return convertToJson;
  }

  var dateArray = getFakeDatesAndValue(new Date('2021-05-03'), (new Date()));

  // console.log(dateArray);


  const testData = [
    { display: "1", name: "TEST1" },
    { display: "1", name: "TEST1" },
    { display: "2", name: "TEST2" }
  ];

  const customData = [
    { value: 3, date: "2021-05-03", custom: "YES" },
    { value: 8, date: "2021-05-08", custom: "YES" },
    { value: 5, date: "2021-05-05", custom: "YES" }
  ];

  let map = {};
  dateArray.forEach(item => map[item.date] = item);
  customData.forEach(item => map[item.date] = item);
  const result = Object.values(map);

  // console.log(result);

  return (
    <div className="App">
      <Plot
        data={[{
          x: ['2021-10-10 22:20:00', '2021-10-16 22:45:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00', '2021-12-13 15:30:00'],
          y: [1, 3, 6],
          type: 'scatter'
        }]}
      />
    </div>
  );
}

export default App;
