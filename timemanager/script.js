let schedules = [
  { name: "John Smith", date: "2026-04-05", time: "9:00 AM" },
  { name: "Mary Jones", date: "2026-04-06", time: "1:00 PM" },
  { name: "David Lee", date: "2026-04-07", time: "3:30 PM" }
];

const searchBtn = document.querySelector("#searchBtn");
const resultDiv = document.querySelector("#result");
const addBtn = document.querySelector("#addBtn");
const scheduleList = document.querySelector("#scheduleList");


//search button
if (searchBtn) {
    searchBtn.addEventListener("click", searchSchedule); 
}
if (addBtn) {
  addBtn.addEventListener("click", addSchedule);
  renderScheduleList();
}

function searchSchedule() {
    let nameQuery = document.querySelector('#searchName').value;

    let foundSchedule = schedules.find(function(schedule) {
        return schedule.name.toLowerCase() === nameQuery.toLowerCase();
    });

    resultDiv.innerHTML = "";

    if (foundSchedule) {
        renderSchedule(foundSchedule);
    } else {
        resultDiv.innerHTML = "<p>No schedule found for that name.</p>";
    }
}

function scheduleTemplate(schedule) {
    return `
    <div>
        <h3>${schedule.name}</h3>
        <p>Date: ${schedule.date}</p>
        <p>Time: ${schedule.time}</p>
    </div>
    `;
}

function adminScheduleTemplate(schedule) {
  return `
    <div>
      <h3>${schedule.name}</h3>
      <p>Date: ${schedule.date}</p>
      <p>Time: ${schedule.time}</p>
    </div>
  `;
}

function renderSchedule(schedule) {
  resultDiv.innerHTML = scheduleTemplate(schedule);
}

function renderScheduleList() {
    scheduleList.innerHTML = "";

    schedules.forEach(function(schedule) {
    scheduleList.innerHTML += adminScheduleTemplate(schedule);
  });
}

function addSchedule() {
    let adminName = document.querySelector("#adminName").value;
    let adminDate = document.querySelector("#adminDate").value;
    let adminTime = document.querySelector("#adminTime").value;

    let newSchedule = {
        name: adminName,
        date: adminDate,
        time: adminTime
    };

        schedules.push(newSchedule);

        renderScheduleList();

        document.querySelector("#adminName").value = "";
        document.querySelector("#adminDate").value = "";
        document.querySelector("#adminTime").value = "";
}