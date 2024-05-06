"use strict";
import $ from "jquery";
import _ from "lodash";

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count">0 clicks on the button</p>'); 
$("body").append("<p>Copyright - Holberton School</p>");

const updateCounter = () => {
  let times = parseInt($("#count").html()) || 0; 
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500)();

updateCounter();

