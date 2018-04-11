// Set the color for each event based on what type it is.
var fullCalTransorm = function(event) {
  var title = event.title;
  if (title.search("COS 320") != -1) {
    event.color = '#b373b3';
  } else if (title.search("ELE 475") != -1) {
    event.color = '#e67399';
  } else if (title.search("ELE 375") != -1) {
    event.color = '#59bfb3';
  } else if (title.search("Research") != -1 || title.search("FPO")   != -1
          || title.search("ASPLOS")   != -1 || title.search("ISCA")  != -1
          || title.search("HPCA")     != -1 || title.search("MICRO") != -1
          || title.search("TECHCON")  != -1) {
    event.color = '#d1051f';
  } else if (title.search("Gym") != -1) {
    event.color = '#4cb052';
  } else if (title.search("SEAS") != -1 || title.search("GEC") != -1) {
    event.color = '#dadada';
  } else if (title.search("AASA") != -1) {
    event.color = '#f9d04a';
  }
  return event;
};

// This changes the display of each event.
var fullCalRender = function(event, element, view) {
  element.attr({'href': '#sched'});
  element.append($('<div class="fc-content">').html(''));
  return element;
};


// This shows "today" while the calendar in progress.
function calendarStartDate() {
  if (moment().isBefore(moment('2018-09-11')) && moment().isAfter(moment('2018-02-05'))) {
    return moment();
  }
  return '2018-02-05';
}

// Setting up the actual calendar.
$(document).ready(function() {
  $('#week-cal').fullCalendar({
    header:
      {
        left:   '',
        center: 'title',
        right:  'today agendaWeek,month prev,next'
      },
    buttonText:
      {
        today: 'Today',
        month: 'Month',
        week:  'Week',
      },
    defaultTimedEventDuration: "00:30:00",
    slotDuration: "00:30:00",
    slotEventOverlap: false,
    allDaySlot: false,
    defaultView: 'agendaWeek',
    titleFormat: 'MMMM YYYY',
    weekends: true,
    timeFormat: 'HH:mm',
    minTime: "09:00:00",
    maxTime: "23:59:59",
    defaultDate: calendarStartDate(),
    height: "auto",

    googleCalendarApiKey: 'AIzaSyB9e_VodK30empB3SGul5lq_YOzB4fN7Po',
    eventDataTransform: fullCalTransorm,
    eventRender: fullCalRender,

    eventSources: [
      {
        googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
        cache: true,
        className: 'holidays',
        color: '#f2a640'
      },
      {
        googleCalendarId: 'chirag.bharadway@gmail.com',
        cache: true,
        className: 'base'
      }
    ],
  });
});
