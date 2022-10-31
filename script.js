var actionElement_9_am = $("#button_9_am");
var actionElement_10_am = $("#button_10_am");
var actionElement_11_am = $("#button_11_am");
var actionElement_12_pm = $("#button_12_pm");
var actionElement_1_pm = $("#button_1_pm");
var actionElement_2_pm = $("#button_2_pm");
var actionElement_3_pm = $("#button_3_pm");
var actionElement_4_pm = $("#button_4_pm");
var actionElement_5_pm = $("#button_5_pm");

var inputElement_9_am = $("#9AM");
var inputElement_10_am = $("#10AM");
var inputElement_11_am = $("#11AM");
var inputElement_12_pm = $("#12PM");
var inputElement_1_pm = $("#1PM");
var inputElement_2_pm = $("#2PM");
var inputElement_3_pm = $("#3PM");
var inputElement_4_pm = $("#4PM");
var inputElement_5_pm = $("#5PM");

//12 hour clock
var format = 'hh:mm a'
var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
"1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

var currenttime = moment();
var afterTimeArray = [];
var beforeTimeArray = [];
var between_index = -1;
var betweenTimeArray = [];

console.log("Current Time " + currenttime.toJSON());

for (var index = 0 ; index < time.length; index++)
{
    workTimeMoment = moment(time[index], format);

    console.log("Check Time " + workTimeMoment.toJSON());

    nextindex = index + 1;
    if (nextindex == time.length)
        nextworkTimeMoment = moment("6:00 PM", format);
    else
        nextworkTimeMoment = moment(time[nextindex], format);

    if (currenttime.isAfter(workTimeMoment))
    {
        if (currenttime.isBetween(workTimeMoment, nextworkTimeMoment))
        {
            between_index = index;
            betweenTimeArray.push(time[index]);
            console.log("Between " + workTimeMoment.toJSON() + " --- " + nextworkTimeMoment.toJSON());
        }
        else
        {
            beforeTimeArray.push(time[index]);
            console.log("Before Element: " + workTimeMoment.toJSON());
        }
    }
    else if (currenttime.isBefore(workTimeMoment))
    {
        afterTimeArray.push(time[index]);
        console.log("After Element: " + workTimeMoment.toJSON());
    }
}

//console.log(beforeTimeArray);
//console.log(afterTimeArray);
//console.log(betweenTimeArray);
//console.log(between_index);

changeColor(beforeTimeArray, "grey");
changeColor(afterTimeArray, "green");
changeColor(betweenTimeArray, "red");

function changeColor(inputArray, color)
{
    //Change bgcolor
    for (var index = 0; index < inputArray.length; index++)
    {
        console.log("value " + inputArray[index]);
        if (inputArray[index] == "9:00 AM")
        {
            inputElement_9_am.css('background-color', color);
        }
        else if (inputArray[index] == "10:00 AM")
        {
            inputElement_10_am.css('background-color', color);
        }
        else if (inputArray[index] == "11:00 AM")
        {
            inputElement_11_am.css('background-color', color);
        }
        else if (inputArray[index] == "12:00 PM")
        {
            inputElement_12_pm.css('background-color', color);
        }
        else if (inputArray[index] == "1:00 PM")
        {
            inputElement_1_pm.css('background-color', color);
        }
        else if (inputArray[index] == "2:00 PM")
        {
            inputElement_2_pm.css('background-color', color);
        }
        else if (inputArray[index] == "3:00 PM")
        {
            inputElement_3_pm.css('background-color', color);
        }
        else if (inputArray[index] == "4:00 PM")
        {
            inputElement_4_pm.css('background-color', color);
        }
        else if (inputArray[index] == "5:00 PM")
        {
            inputElement_5_pm.css('background-color', color);
        }
    }
}

$("#currentDay").text(currenttime.format("MMM Do, YYYY"));

function handleSaveProject(event) {
    event.preventDefault();
    console.log("handleSaveProject is called");
    var btnClicked = $(event.target);
    //Get Parent
    var subFormElement = btnClicked.parent();
    //Get Input Text
    var textElement = subFormElement.find('.form-control');
    console.log(textElement.val().trim());
    //Get Label value
    var labelElement = subFormElement.find('#label_text');
    console.log("label text is " + labelElement.text());
    localStorage.setItem(labelElement.text(), textElement.val().trim());
}

function loadValue(key, item)
{
    var value = localStorage.getItem(key);
    item.val(value);
}

function init()
{
    loadValue("9AM", inputElement_9_am);
    loadValue("10AM", inputElement_10_am);
    loadValue("11AM", inputElement_11_am);
    loadValue("12PM", inputElement_12_pm);
    loadValue("1PM", inputElement_1_pm);
    loadValue("2PM", inputElement_2_pm);
    loadValue("3PM", inputElement_3_pm);
    loadValue("4PM", inputElement_4_pm);
    loadValue("5PM", inputElement_5_pm);
}

init();

actionElement_9_am.on('click', handleSaveProject);
actionElement_10_am.on('click', handleSaveProject);
actionElement_11_am.on('click', handleSaveProject);
actionElement_12_pm.on('click', handleSaveProject);
actionElement_1_pm.on('click', handleSaveProject);
actionElement_2_pm.on('click', handleSaveProject);
actionElement_3_pm.on('click', handleSaveProject);
actionElement_4_pm.on('click', handleSaveProject);
actionElement_5_pm.on('click', handleSaveProject);