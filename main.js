var request = new XMLHttpRequest();
 
request.onreadystatechange = function () {
    if(this.readyState === 4){
        var flights = JSON.parse(request.responseText);
        var statusHTML = '';
        for(var i = 0; i < flights.length; i++){
           statusHTML += '<tr>';
           statusHTML +=  '<td>' + flights[i].time + '</td>';
           statusHTML +=  '<td>' + flights[i].destination + '</td>';
           statusHTML +=  '<td>' + flights[i].gate + '</td>';
           

           if(flights[i].status === 'Boarding'){

            statusHTML +=  '<td class = "status">' + flights[i].status + '</td>';
           } 
            else if (flights[i].status === 'on Time'){
                statusHTML +=  '<td class = "status onTime">' + flights[i].status + '</td>';
            }

            else if(flights[i].status === 'Delayed'){

                statusHTML +=  '<td class = "status delayed">' + flights[i].status + '</td>';
            }

            else{

                statusHTML += '<td class = "status cancelled">' + flights[i].status + '</td>';
            }

           statusHTML +=   '</tr>';
           document.querySelector('.flighStatus tbody').innerHTML = statusHTML;
        
    }
}
}


request.open("get","flight.json");
request.send();