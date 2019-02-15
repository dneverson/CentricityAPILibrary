/*  \\par new Paragraph line
*   \\fs## FONT SIZE ANY NUMBER
*   \\fs20 Normal Size Font
*   \\fs24 Large font
*   \\i \\i0 italics
*   \\b \\b0 bold
*   \\cb1 Not Highlighted
*   \\cb2 Highlighted Black
*   \\plain sets everything to default
*
*
*
*
*
*/
function addToChartNote(text){
  var form_Id = window.external.FormId;
  var document_variable = "DOCUMENT.TEMPHTML0_" + form_Id;
  var text_translation = text;
  window.external.SetChartValue(document_variable, text_translation);
}

//gets CurrentDatetime Varible
function getCurrentDateTime(){
  var result = new Date().toLocaleString();
  return result;
};

// formats str to bold font for patient chart
function chartBoldText(str){
  return "\\b " + str + "\\b0"
};

// formats str to large font for patient chart
function chartLargeFont(str){
  return "\\fs24\\b " + str + "\\fs20\\b0";
};

var userText = "";
var userTextTranslation = "";
var userNotes = "";
var chartNotes = "";




//ADD to CHART FUNCTION
function updateChartNotes(){
  var formId = getFormId();
  var documentVariable = "DOCUMENT.TEMPHTML0_" + formId;

  userTextTranslation = chartNotes + "\n\n\\b Doctors Notes\\b0 \n" + userNotes + "\n\n" + "Last Updated: " + getCurrentDateTime();
  SetChartValue(documentVariable, userTextTranslation);
};

//USER TEXTBOX ADD TO CHART FUNCTION
function userAddToChartNote(){
  userNotes += (this.userText + "\n");
  this.userText = "";
  updateChartNotes();
};

//This block is to staticly add chart notes behind the scene
//like the normal forms do.
function patientChartNotes(){
  chartNotes = (
    "\\b Patient Information \\b0" + "\n" +
    "    Name: " + this.patient.firstName+" "+this.patient.middleName+" "+this.patient.lastName+"\n"+
    "    Sex: " + this.patient.sex + "\n" +
    "    Race: " + this.patient.race + "\n" +
    "    Ethnicity: " + this.patient.ethnicity + "\n" +
    "    Date Of Birth: " + this.patient.dateOfBirth + "\n" +
    "    Date Of Death: " + this.patient.dateOfDeath + "\n" +
    "    Marital Status: " + this.patient.maritalStatus + "\n" +
    "    Language: " + this.patient.language + "\n" +
    "    SSN: " + this.patient.ssn + "\n\n" +
    "\\b Patient Address \\b0" + "\n" +
    "    Address 1: " + this.patient.address1 + "\n" +
    "    Address 2: " + this.patient.address2 + "\n" +
    "    City: " + this.patient.address.city + "\n" +
    "    State: " + this.patient.address.state + "\n" +
    "    Zip: " + this.patient.address.postCode + "\n" +
    "    Country: " + this.patient.address.country + "\n\n" +
    "\\b Patient Contact Information \\b0" + "\n" +
    "    Home: " + this.patient.phone.home + "\n" +
    "    Business: " + this.patient.phone.business + "\n" +
    "    Mobile: " + this.patient.phone.mobile + "\n" +
    "    Fax: " + this.patient.phone.fax + "\n" +
    "    Email: " + JSON.stringify(usersInCurrentLocation.length)
  );
  updateChartNotes();
};
