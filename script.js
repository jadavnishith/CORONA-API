async function getCovidData() {
  const jasonData = await fetch("https://data.covid19india.org/data.json");
  console.log(jasonData);
  const jsData = await jasonData.json();
  data(jsData.cases_time_series);
}
getCovidData();

let data = (jsData) => {
  const tbody = document.getElementById("dataBody");
  tbody.innerHTML = "";
  jsData.forEach((element) => {
    const row = `
    <tr class="table-primary">
      <td>${element.totalconfirmed}</td>
      <td>${element.totaldeceased}</td>
      <td>${element.totalrecovered}</td>
    </tr>
  `;
    tbody.innerHTML += row;
  });
};
