var ref = new Firebase("https://rollercoaster-2014.firebaseio.com/"); /*Initialize firebase*/

var submitFeedback = function (userFeedback) {
    alert("sending feedback"); /*Popup window*/
    var userFeedback = document.getElementById("feedbackInput").value;
    
 	ref.push({feedback: userFeedback}); /*Pushes data to firebase*/
 	document.getElementById("submitButton").value = "Thank you!";
    return false;
}