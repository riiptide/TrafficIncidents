class incident {
    constructor(brcYear,dayOfWeek,streetName,incidentType,timeDispatched) {
        this.brcYear = brcYear
            this.dayOfWeek=dayOfWeek;
        this.streetName=streetName;
        this.incidentType=incidentType;
        this.timeDispatched=timeDispatched;

    }
}


function loadIncidents(url){

var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null);

var csvData = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
    lines = jsonObject[i].split(',');
    csvData.push(new incident(lines[0],lines[1],lines[2],lines[3],lines[4]));
}
// Retrived data from csv file content
console.log(csvData);
}
