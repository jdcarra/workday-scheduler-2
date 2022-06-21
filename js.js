// laod index and css frist
$(document).ready(function () {

    // VAR FOR DATE FORMANT DAY,MO,DATE
    var todaysDate = moment().format('dddd, MMMM Do');
    $("#currentDay").html(todaysDate);

    //gets.row elements from index
    var rows = document.getElementsByClassName("row");
    var currentHour = parseInt(moment().format('H'));
    // creates an arry from each .row element
    Array.from(rows).forEach(row => {
        // set html ids to rowhour array
    var rowIdString = row.id,
    rowHour;
    if (rowIdString) {
       // converts hour/id string to numbers
       rowHour = parseInt(rowIdString); 
    }
    if (rowHour) {
        // compares row id to currect hour and sets color accordingly 
        if (currentHour === rowHour) {
            // Green
            setColor(row,"#fff6961");
        } else if ((currentHour < rowHour)) {
            //red
            setColor(row,"#77dd77");
            //grey
        } else {
            setColor(row, "#d3d3d3");
        }
         }
});

// function to save text-entry input to localStorage on save button click 
$(".saveBtn").on("click", function () {
    console.log ("error")
// text input to be saved form parent/sibling html text-entry elements
var tasks =$(this).siblings(".text-entry").val();
var hour = $(this).parent().attr("id");
// save tasks to localStorgae 
localStorage.setItem(hour, tasks);
})

// load local storage saved tasks for each row/hour
$("#block8 .text-entry").val(localStorage.getItem("block8"));
$("#block9 .text-entry").val(localStorage.getItem("block9"));
$("#block10 .text-entry").val(localStorage.getItem("block10"));
$("#block11 .text-entry").val(localStorage.getItem("block11"));
$("#block12 .text-entry").val(localStorage.getItem("block12"));
$("#block13.text-entry").val(localStorage.getItem("block13"));
$("#block14.text-entry").val(localStorage.getItem("block14"));
$("#block15 .text-entry").val(localStorage.getItem("block15"));
$("#block16 .text-entry").val(localStorage.getItem("block16"));
$("#block17 .text-entry").val(localStorage.getItem("block17"));

// funtions change row element background colors 
function setColor(element,color) {
    element.style.backgroundColor = color;
}
})
