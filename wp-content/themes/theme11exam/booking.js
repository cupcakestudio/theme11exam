// script.js
// calendar view from geeksforgeeks.com: https://www.geeksforgeeks.org/how-to-create-a-dynamic-calendar-in-html-css-javascript/
// Define an array to store events
let events = [];

// letiables to store event input fields and reminder list
let eventDateInput = document.getElementById("eventDate");
let eventTitleInput = document.getElementById("eventTitle");
let eventDescriptionInput = document.getElementById("eventDescription");
let reminderList = document.getElementById("reminderList");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// ARRAY - tidsbestillinger

// Function to generate a range of
// years for the year select input
function generate_year_range(start, end) {
  let years = "";
  for (let year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

// Initialize date-related letiables
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
SelectedMonth = document.getElementById("month");
SelectedYear = document.getElementById("year");
createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");

let months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
let days = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];

$dataHead = "<tr>";
for (dhead in days) {
  $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

// Function to navigate to the next month
function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

// Function to navigate to the previous month
function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

// Function to display the calendar
function showCalendar(month, year) {
  let firstDay = new Date(year, month, 1).getDay();
  tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";
  monthAndYear.innerHTML = months[month] + " " + year;
  SelectedMonth.value = month;
  SelectedYear.value = year;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span class='circle' style='background-color: " + (days[j] === "Lør" || days[j] === "Søn" ? "darkgray" : "") + "'>" + date + "</span>";

        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.className = "date-picker selected";
          /*  if (cell.className === "date-picker selected") cell.innerHTML = "<span class='circle' style='background-color: transparent" + "'>" + date + "</span>"; */
        }

        if (hasEventOnDate(date, month, year)) {
          // Check if there are events on this date
          cell.classList.add("event-marker");
          cell.appendChild(createEventTooltip(date, month, year));
        }

        // Add click functionality to dates
        cell.addEventListener("click", function () {
          let clickedDate = this.getAttribute("data-date");

          // Remove 'selected' from all other dates
          let allCells = document.querySelectorAll(".date-picker");
          allCells.forEach(function (cell) {
            cell.classList.remove("selected");
          });
                    // Remove 'hidden' class from appointment container so appointments show
document.getElementById("appointment_container").classList.remove("hidden");

          // Adds styling to selected date
          this.classList.add("selected");
          if (cell.className === "date-picker selected") cell.innerHTML = "<span class='circle' style='background-color: transparent" + "'>" + date + "</span>";

          console.log("date clicked", clickedDate);


        });

        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }
}




//Function to go to today's date
function goToToday() {
  today = new Date();
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  showCalendar(currentMonth, currentYear);
}

//Function to jump to selected date in dropdown:
function jump() {
  currentMonth = parseInt(SelectedMonth.value);
  currentYear = parseInt(SelectedYear.value);
  showCalendar(currentMonth, currentYear);
}

// Function to create an event tooltip
function createEventTooltip(date, month, year) {
  let tooltip = document.createElement("div");
  tooltip.className = "event-tooltip";
  let eventsOnDate = getEventsOnDate(date, month, year);
  for (let i = 0; i < eventsOnDate.length; i++) {
    let event = eventsOnDate[i];
    let eventDate = new Date(event.date);
    let eventText = `<strong>${event.title}</strong> - 
			${event.description} on 
			${eventDate.toLocaleDateString()}`;
    let eventElement = document.createElement("p");
    eventElement.innerHTML = eventText;
    tooltip.appendChild(eventElement);
  }
  return tooltip;
}

// Function to get events on a specific date
function getEventsOnDate(date, month, year) {
  return events.filter(function (event) {
    let eventDate = new Date(event.date);
    return eventDate.getDate() === date && eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
}

// Function to check if there are events on a specific date
function hasEventOnDate(date, month, year) {
  return getEventsOnDate(date, month, year).length > 0;
}

// Function to get the number of days in a month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Call the showCalendar function initially to display the calendar
showCalendar(currentMonth, currentYear);


//data for available time slots Appointments
function ListOfTimeSlots () {
const data = [
  {
    timeSlot: "kl. 8" ,
    specialist: "Barbara"
  },
  {
    timeSlot: "kl. 8" ,
    specialist: "Betina"
  },
  {
    timeSlot: "kl. 10" ,
    specialist: "Barbara"
  },
  {
    timeSlot: "kl. 10" ,
    specialist: "Betina"
  },
  {
    timeSlot: "kl. 12" ,
    specialist: "Barbara"
  },
  {
    timeSlot: "kl. 12" ,
    specialist: "Betina"
  },
  {
    timeSlot: "kl. 14" ,
    specialist: "Barbara"
  },
  {
    timeSlot: "kl. 14" ,
    specialist: "Betina"
  }
]

const timeSlotsContainer = document.getElementById("timeSlotsContainer");
const myAppointmentsContainer = document.getElementById("my_appointments");
// placeholder when no appointments
const placeholderNoAppointments = document.createElement("p");
placeholderNoAppointments.classList.add("palceholder_text")
placeholderNoAppointments.textContent = "Du har endnu ingen bookinger. Vælg en dato og en ledig tid. Når du har booked en tid, vil dine tider blive vist her."


data.forEach((item, i) => {
  const timeSlotElement = document.createElement("div");
  timeSlotElement.classList.add('timeSlot');

  const textElement = document.createElement("p");
  textElement.textContent = `Tidspunkt: ${item.timeSlot} - Behandler: ${item.specialist}`;

  const bookBtn = document.createElement("button");
  bookBtn.textContent = "Book";

// When an appointment is added remove the placeholder text
function updatePlaceholder() {
  const appointments = myAppointmentsContainer.querySelectorAll(".appointment_list");
  if (appointments.length === 0) {
    placeholderNoAppointments.style.display = "block"; // Show placeholder text
  } else {
    placeholderNoAppointments.style.display = "none"; // Hide placeholder text
  }
}

  // booking button for available appointment 
  bookBtn.addEventListener("click", function() {
    console.log("Go to confirmation page");

      // Flytter den valgte tid og behandler til "Mine bookinger" container
      const selectedAppointment = document.createElement("div");
      selectedAppointment.classList.add("appointment_list");
      selectedAppointment.textContent = textElement.textContent;
      myAppointmentsContainer.appendChild(selectedAppointment);


    //hide available appointments conatiainer
    document.getElementById("appointment_container").classList.add("hidden");

    updatePlaceholder();
  });


  timeSlotElement.appendChild(textElement);
  timeSlotElement.appendChild(bookBtn);
  myAppointmentsContainer.appendChild(placeholderNoAppointments);

  if (i !== data.length - 1) {
    timeSlotElement.classList.add('timeSlotWithBorder');


  }
  if (i === data.length - 1) {
    timeSlotElement.classList.add('paddingTop');
  }

  timeSlotsContainer.appendChild(timeSlotElement);
});
}

ListOfTimeSlots();

