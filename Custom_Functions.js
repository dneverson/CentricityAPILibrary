/*=========================================================================
* Gets the diffrence in days, between two dates.
* date1 in mm/dd/yyyy format AND date2 in mm/dd/yyyy format
* durationDays("11/25/2002","03/06/2003")
* Output: number of days
* Tested: true
*========================================================================*/
function durationDays(date1,date2){
  var d1 = new Date(date1).getTime();
  var d2 = new Date(date2).getTime();
  return (((((d2-d1)/1000)/60)/60)/24);
};

/*=========================================================================
* checks to see if a problems is current or archived
* Output: boolen
* Tested: true
*========================================================================*/
function isObjectCurrent(problem){
  var result;
  if(problem.stopdate == "\/Date(86181955200000)\/" && (problem.stopreason == null || problem.stopreason.replace(" ", "") == "")) result = true;
  else result = false;
  return result;
};

/*=========================================================================
* Gets and parses current patient object given and returns relevent information needed
* Output: JSON
* Tested: true
*========================================================================*/
function getCurrentObjects(object){
  var obj = JSON.parse(window.external[object]);
  var result = [];
  for(i=0;i<obj.length;i++){
    if(isObjectCurrent(obj[i]))result.push(obj[i]);
  };
  return result;
};

/*=========================================================================
* strips "/Date(1549353600000)/" to readable text mm/dd/yyyy
* Output: mm/dd/yyyy
* Tested: true
*========================================================================*/
function parseDate(date){
  var stripedDate = parseInt(date.toLowerCase().replace("date","").replace(/[/()]/g,""));
  var parsedDate = new Date(stripedDate);
  var dd = parsedDate.getDate();
  var mm = parsedDate.getMonth()+1;
  var yyyy = parsedDate.getFullYear();
  if (dd<10)dd='0'+dd;
  if (mm<10)mm='0'+mm;
  return (mm+'/'+dd+'/'+yyyy);
};


/*=========================================================================
* checkDxList(checkDx) checks if a patient has a diagnosis in the submitted ICD10
  group in their current diagnosis list.
* Output: Date of diagnosis if in diagnosis list, FALSE if it is not
* Tested: true
*========================================================================*/
function checkDXList(icd10Code){
  var problems = getCurrentObjects("problems");
  var result;
  for(i=0;i<problems.length;i++){
      if(problems[i].icd10CodeDetail.code == icd10Code) return parseDate(problems[i].onsetdate);
  };
  return false;
};

/*=========================================================================
* checkMedUseGPI(checkGPI) checks if a patient has a medication in the submitted
  GPI group in their current medication list. Medicaitons are grouped in to classes
  based on their Generic Product Identifier (GPI).
  http://centricityusers.com/wp-content/forum-file-uploads/mitch/Drug-Classification-Report.pdf
  Parameters - checkGPI: desired GPI prefix (length of 2-10 digits)
* Output: TRUE if med is in medication list, FALSE if it is not
* Tested: true
*========================================================================*/
function checkMedUseGPI(checkGPI){
  var medications = getCurrentObjects("medications");
  var result;
  for(i=0;i<medications.length;i++){
      if(medications[i].medicationInfoDetail.genericProductIndex.substr(0,checkGPI.length) == checkGPI)
        return parseDate(medications[i].startdate);
  };
  return false;
};

/*=========================================================================
* This function will take in an obs term and return [Value (Date)] of the obs term from the current calendar year.
  Input - obsTerm: Observation Term
* Output: Observation [Value (Date)] if one exists in current calendar year
          -1 if no observation in current calendar year
* Tested: true
*========================================================================*/
function checkObsThisCalYear(obs){
  var curDate = new Date();
  var baseYear = "01/01/"+ curDate.getFullYear();
  var obsDate = LastObsDate(obs);
  var obsVal = LastObsValue(obs);
  var timeSpan = 0;
  if(obsDate) timeSpan = durationDays(baseYear, obsDate);
  if(timeSpan) return obsVal + " ("+obsDate+")"
  else return -1;
};
