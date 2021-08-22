const studentsData= new Map();
const uniquePhoneNumber=new Set();
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
event.preventDefault();
const formData =new FormData(this);
const entries = formData.entries();
const data =Object.fromEntries(entries);
console.log(studentsData);
if(studentsData.has(data.adharNumber)) {
 alert('user already exist with given aadhar');
 return false;
} 
else {
 if (studentsData.has(data.adharNumber)&&studentsData.get(data.adharNumber)[`${data.phoneNumber}`]) {
   alert('user already exist with given phone Number');
   return false;
}

    studentsData.set(data.adharNumber,data);
}
alert('you have successfully register');
form.reset();
console.log(Array.from(studentsData.values));
generateTable();
});
function generateTable()
{
    const tablearea = document.getElementById('tablearea');

    const table = document.createElement('table');
    table.border="1";
    const theader=new Array();
    theader.push(['FirstNmae','LastName','FatherNmae','MotherName','Phone Number','AdharNumbeer']);
    var row = table.insertRow(-1);
   for(var i=0;i<theader[0].length;i++)
{    
    
    
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = theader[0][i];
        row.appendChild(headerCell);
      
}    
    Array.from(studentsData.values()).forEach(user=>{ theader.push([user.firstname,user.lastname,user.fathername,user.mothername,user.phonenumber,user.adharnumber]); });
    row = table.insertRow(-1);
    for (var j = 0; j <theader[1].length; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = theader[1][j];
    }
    tablearea.appendChild(table);
}   
