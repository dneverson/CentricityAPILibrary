/*=========================================================================
* @author Derry Everson
*
* Personal:
** https://www.arachnidserver.com
** dneverson@lcmail.lcsc.edu
*
* Sources for this can be found at:
** https://github.com/dneverson/CentricityAPILibrary
* Date: 03/28/2019
*========================================================================*/

/*=========================================================================
*     **** FUNCTIONS ****
*========================================================================*/

/*=========================================================================
* ActiveObservations();
* Output: "Observations"
* Tested: true
*========================================================================*/
function ActiveObservations(){
  return EvaluateMel('{ACTIVE_OBSERVATIONS}');
};

/*=========================================================================
* Example: {MEL_ADD_ALLERGY("ADVIL","severe vomiting",str(._TODAYSDATE),"557", 40,"","","C","Drug")}
* AddAllergy("ADVIL","severe vomiting","01/21/2019","557", 40,"","","C","Drug");
* (desc, (256 char)), (ID, DDID),
* code: reaction code(RASH = 1, SHOCK = 2, RESP = 4, GI = 8, HEME = 16, OTHER = 32) NOTE: Rash and GI = 1 + 8 = 9
* crit: severe reaction = S, moderate reaction = N, mild reaction = I
* Output: N/A
* Tested: true
*========================================================================*/
function AddAllergy(name, desc, startDate, ID, code, stopDate, crit, classification){
  var result = EvaluateMel("{MEL_ADD_ALLERGY('"+name+"','"+desc+"','"+startDate+"','"+ID+"',"+code+",'"+stopDate+"','"+crit+"','"+classification+"')}", true);
  if(result=="")  ErrorMessage("Success","MEL_ADD_ALLERGY");
  else            ErrorMessage("Error: unsuccessful in adding the new allergy OR unable to acquire the allergy lock","MEL_ADD_ALLERGY");
};

/*=========================================================================
* Example: {MEL_ADD_ASSESSMENT(‘DX OF’,’CHOLERA’,’ICD10-S34.9’,’C’,’Pt traveled abroad recently’)}
* AddAssessment("DX OF","CHOLERA","ICD10-A00.9","C","Pt traveled abroad recently");
* type: DX OF = Diagnosis of (DEFAULT), MDXOF = Minor Diagnosis of (only for historical references)
*       H/F = Hospitalized for, HX OF = History of, S/P = Status Post, R/O = Rule out, ? OF = Question of
*       SX OF = Symptom of, RS OF = Risk of, NOTE: = Take Note of, FH OF = Family History of
* asmt: New or N, Improved or I, Unchanged or U, Deteriorated or D, Comment only or C
* Output: N/A
* Tested: true
*========================================================================*/
function AddAssessment(type, desc, codeIcd10, asmt, comm){
  var result = EvaluateMel("{MEL_ADD_ASSESSMENT('"+type+"','"+desc+"','"+codeIcd10+"','"+asmt+"','"+comm+"')}", true);
  if(result>="0")         ErrorMessage("Success","MEL_ADD_ASSESSMENT");
  else if(result=="-1")   ErrorMessage("Problem type not provided","MEL_ADD_ASSESSMENT");
  else if(result=="-2")   ErrorMessage("Problem description not provided","MEL_ADD_ASSESSMENT");
  else if(result=="-3")   ErrorMessage("Assessment not provided or invalid","MEL_ADD_ASSESSMENT");
  else if(result=="-4")   ErrorMessage("The assessment is N (new), but the problem is not a new problem","MEL_ADD_ASSESSMENT");
  else if(result=="-5")   ErrorMessage("Can't match the problem for this assessment","MEL_ADD_ASSESSMENT");
  else if(result=="-6")   ErrorMessage("Can't get the clinical list lock","MEL_ADD_ASSESSMENT");
  else if(result=="-7")   ErrorMessage("Assessment comment exceeds maximum length","MEL_ADD_ASSESSMENT");
  else if(result=="-8")   ErrorMessage("Can't add the assessment for some other reason","MEL_ADD_ASSESSMENT");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_ADD_ASSESSMENT");
};

/*=========================================================================
* Example: {MEL_ADD_CARE_PLAN("Exercise to lose weight","289169006","Reduce 20 pounds","Walk daily for one hour. Have a light dinner.","2013/05/10","","123|234")}
* AddCarePlan("Exercise to lose weight","289169006","Reduce 20 pounds","Walk daily for one hour. Have a light dinner.","2013/05/10","","1848065703239670");
* optional: (SNOMEDCTCODE, (20 char)), (target,(255 char)), (instruct, (2000 char)), (endDate)
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* Output: N/A
* Tested: true
*========================================================================*/
function AddCarePlan(goal, SNOMEDCTCODE, target, instruct, setDate, endDate, PRID){
  var result = EvaluateMel("{MEL_ADD_CARE_PLAN('"+goal+"','"+SNOMEDCTCODE+"','"+target+"','"+instruct+"','"+setDate+"','"+endDate+"','"+PRID+"')}", true);
  if(result>="0")         ErrorMessage("Success","MEL_ADD_CARE_PLAN");
  else if(result=="-1")   ErrorMessage("Description is blank or too long","MEL_ADD_CARE_PLAN");
  else if(result=="-2")   ErrorMessage("Code is too long","MEL_ADD_CARE_PLAN");
  else if(result=="-3")   ErrorMessage("Target is too long","MEL_ADD_CARE_PLAN");
  else if(result=="-4")   ErrorMessage("Instruction is too long","MEL_ADD_CARE_PLAN");
  else if(result=="-5")   ErrorMessage("GoalSetDate is invalid","MEL_ADD_CARE_PLAN");
  else if(result=="-6")   ErrorMessage("GoalMetDate is invalid or less than GoalSetDate","MEL_ADD_CARE_PLAN");
  else if(result=="-7")   ErrorMessage("Invalid PRID","MEL_ADD_CARE_PLAN");
  else if(result=="-8")   ErrorMessage("Cannot add Care Plan for some other reason","MEL_ADD_CARE_PLAN");
  else if(result=="-21")  ErrorMessage("Service layer error","MEL_ADD_CARE_PLAN");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_ADD_CARE_PLAN");
};

/*=========================================================================
* Example: {MEL_ADD_DIRECTIVE("Donor-Cornea",str(._TODAYSDATE))}
* AddDirective("Donor-Cornea TEST","10/12/2018");
* Date formats: MM/DD/YYYY
* Output: N/A
* Tested: true
*========================================================================*/
function AddDirective(desc, startDate, endDate){
  EvaluateMel("{MEL_ADD_DIRECTIVE('"+desc+"','"+startDate+"','"+endDate+"')}", true);
};

/*=========================================================================
* Example: {MEL_ADD_FHX("FH: Mitral Valve Regurgitation","1", "430730004","Had this for 2 years and then repaired through surgical procedure")}
* AddFHX("FH: Mitral Valve Regurgitation","1", "","Had this for 2 years and then repaired through surgical procedure");
* (desc, (255 char)), (ID, relationship code), (SNOMEDCTCODE, optional), (comm, (4000 char))
* Output: N/A
* Tested: true
*========================================================================*/
function AddFHX(desc, ID, SNOMEDCTCODE, comm){
  var result = EvaluateMel("{MEL_ADD_FHX('"+desc+"','"+ID+"','"+SNOMEDCTCODE+"','"+comm+"')}", true);
  if(result>="0")         ErrorMessage("Success","MEL_ADD_FHX");
  else if(result=="-1")   ErrorMessage("Description is blank or too long","MEL_ADD_FHX");
  else if(result=="-2")   ErrorMessage("Relationship ID is invalid, empty, or too long","MEL_ADD_FHX");
  else if(result=="-3")   ErrorMessage("Invalid code or code is too long","MEL_ADD_FHX");
  else if(result=="-4")   ErrorMessage("Comment is too long","MEL_ADD_FHX");
  else if(result=="-5")   ErrorMessage("Cannot get the clinical list lock","MEL_ADD_FHX");
  else if(result=="-6")   ErrorMessage("Cannot add FHX for some other reason","MEL_ADD_FHX");
  else if(result=="-21")  ErrorMessage("Service layer error","MEL_ADD_FHX");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_ADD_FHX");
};

/*=========================================================================
* Example: {MEL_ADD_MEDICATION("Aspirin 500mg Tab", "1 po tid","03/01/2004",1926,"06/30/2006",250,3,"Y","Must use specific brand as indicated","ICD10-R45.8|ICD-401.1","ACUTE MI|HYPERTENSION","false","4005742")}
* AddMedication("Aspirin 500mg Tab", "1 po tid","03/01/2004",1926,"06/30/2006",250,3,"Y","Must use specific brand as indicated","ICD10-R45.8|ICD-401.1","ACUTE MI|HYPERTENSION","false","4005742");
* (ID, (DDID or NDCNUM)), (comm, (2000 char))
* Date formats: MM/DD/YYYY
* Output: N/A
* Tested: true
*========================================================================*/
function AddMedication(desc, instruct, startDate, ID, endDate, quanity, refills, BMN, comm, diagCode, codeDesc, printDx, RxNorm){
  var result = EvaluateMel("{MEL_ADD_MEDICATION('"+desc+"','"+instruct+"','"+startDate+"','"+ID+"','"+endDate+"','"+quanity+"','"+refills+"','"+BMN+"','"+comm+"','"+diagCode+"','"+codeDesc+"','"+printDx+"','"+RxNorm+"')}", true);
  if(result=="")  ErrorMessage("Success","MEL_ADD_MEDICATION");
  else            ErrorMessage("Error: unable to acquire the medication lock OR unsuccessful in inserting the new medication","MEL_ADD_ALLERGY");
};

/*=========================================================================
Type ID Description
1 Provide TOC Referral Summary
2 Provide Clinical Visit Summary to Patient
3 Patient Reminder Sent
4 Initiated TOC with Patient
5 Patient Declined Clinical Visit Summary
12 Provide Patient Education
13 Reconciled TOC Medications
509 Successful unlink of patient validation from Patient Portal
510 Patient Portal Access Available
511 Chart summary viewed in Patient Portal
512 Chart summary downloaded from Patient Portal
513 Chart summary transmitted from Patient Portal
514 TOC/Referral Summary received by HISP
519 Clinical Visit Summary Sent to Patient
520 Secure Message sent by patient
521 Patient Care Reminder Sent
//  window.alert(EvaluateMel('{GET_MUACTIVITY_LOG()}'));
*========================================================================*/
function AddMUActivityLog(activityID, loginName, description){
  var result = EvaluateMel('{ADD_MUACTIVITY_LOG('+activityID+',"'+loginName+'","'+description+'")}', true);
  if(result=="")         ErrorMessage("Success","ADD_MUACTIVITY_LOG");
  else if(result=="-1")   ErrorMessage("Not enough parameters","ADD_MUACTIVITY_LOG");
  else if(result=="-2")   ErrorMessage("Invalid type for a parameter","ADD_MUACTIVITY_LOG");
  else if(result=="-3")   ErrorMessage("Too many parameters","ADD_MUACTIVITY_LOG");
  else if(result=="-4")   ErrorMessage("Invalid mu activity type log id","ADD_MUACTIVITY_LOG");
  else if(result=="-5")   ErrorMessage("Not in an active document","ADD_MUACTIVITY_LOG");
  else if(result=="-6")   ErrorMessage("There is not a current patient","ADD_MUACTIVITY_LOG");
  else if(result=="-7")   ErrorMessage("Invalid loginname","ADD_MUACTIVITY_LOG");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"ADD_MUACTIVITY_LOG");
};

/*=========================================================================
* Needs Work: Error: Invalid order category
* Example: {MEL_ADD_ORDER("S","Cardiology Fee Ticket","Dual Chamber Electronic Analysis with reprogramming","26","ICD10-R45.8|ICD-401.1","ACUTE MI|HYPERTENSION","Include interpretation","1","S","smitchell","08/22/2003")}
* AddOrder("S","Cardiology Fee Ticket","Dual Chamber Electronic Analysis with reprogramming","26","ICD10-R45.8|ICD-401.1","ACUTE MI|HYPERTENSION","Include interpretation","1","S","smitchell","08/22/2003");
* (type: T = Test, S = Service), (comm, (2000 char)), (units, optional)
* (priority, optional | N = normal, U = urgent, or S = stat)
* (auth: authorizing provider's login user name), (date, optional), (NDC, optional)
* Output: N/A
* Tested: true
*========================================================================*/
function AddOrder(type, cat, desc, mod, diagCode, codeDesc, comm, units, priority, auth, date, NDC){
  var result = EvaluateMel("{MEL_ADD_ORDER('"+type+"','"+cat+"','"+desc+"','"+mod+"','"+diagCode+"','"+codeDesc+"','"+comm+"','"+units+"','"+priority+"','"+auth+"','"+date+"','"+NDC+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_ADD_ORDER");
  else if(result=="-1")   ErrorMessage("Invalid Order Type","MEL_ADD_ORDER");
  else if(result=="-2")   ErrorMessage("Invalid order category","MEL_ADD_ORDER");
  else if(result=="-3")   ErrorMessage("Invalid Description","MEL_ADD_ORDER");
  else if(result=="-4")   ErrorMessage("Order obsolete","MEL_ADD_ORDER");
  else if(result=="-5")   ErrorMessage("Invalid Diagnosis Code","MEL_ADD_ORDER");
  else if(result=="-6")   ErrorMessage("Comments field too long","MEL_ADD_ORDER");
  else if(result=="-7")   ErrorMessage("Invalid Priority","MEL_ADD_ORDER");
  else if(result=="-8")   ErrorMessage("Invalid or obsolete authorizing provider","MEL_ADD_ORDER");
  else if(result=="-9")   ErrorMessage("Invalid order date","MEL_ADD_ORDER");
  else if(result=="-10")  ErrorMessage("Invalid Modifier","MEL_ADD_ORDER");
  else if(result=="-11")  ErrorMessage("Additional information is required for this order","MEL_ADD_ORDER");
  else if(result=="-12")  ErrorMessage("Unequal number of diagnosis codes and diagnosis code descriptions","MEL_ADD_ORDER");
  else if(result=="-13")  ErrorMessage("Invalid quantity or units","MEL_ADD_ORDER");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_ADD_ORDER");
};

/*=========================================================================
* Example: {MEL_ADD_PROBLEM(‘DX OF’,’Cholera’,’ICD-001.9’,str(._todaysdate),’’,’Pt. traveled in Africa’,’N’,’monitor for improvement’)}
* AddProblem("DX OF","Cholera", "ICD-001.9", "09/15/2012", "", "Pt. traveled in Africa" , "N", "monitor for improvement");
* type: DX OF = Diagnosis of (DEFAULT), MDXOF = Minor Diagnosis of (only for historical references)
*       H/F = Hospitalized for, HX OF = History of, S/P = Status Post, R/O = Rule out, ? OF = Question of
*       SX OF = Symptom of, RS OF = Risk of, NOTE: = Take Note of, FH OF = Family History of
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* asmt: New or N, Improved or I, Unchanged or U, Deteriorated or D, Comment only or C
* comm, optional (2000 char)
* Output: N/A
* Tested: true
*========================================================================*/
function AddProblem(type, desc, code, startDate, endDate, annotate, asmt, comm){
  var result = EvaluateMel("{MEL_ADD_PROBLEM('"+type+"','"+desc+"','"+code+"','"+startDate+"','"+endDate+"','"+annotate+"','"+asmt+"','"+comm+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_ADD_PROBLEM");
  else if(result=="-1")   ErrorMessage("PRID is not valid","MEL_ADD_PROBLEM");
  else if(result=="-2")   ErrorMessage("description is too long","MEL_ADD_PROBLEM");
  else if(result=="-3")   ErrorMessage("code is not valid or the wrong code type","MEL_ADD_PROBLEM");
  else if(result=="-4")   ErrorMessage("startDate is not in the correct format","MEL_ADD_PROBLEM");
  else if(result=="-5")   ErrorMessage("startDate is not valid (for example, the date represents a future date)","MEL_ADD_PROBLEM");
  else if(result=="-6")   ErrorMessage("approxStart argument is not valid","MEL_ADD_PROBLEM");
  else if(result=="-7")   ErrorMessage("stopDate is not valid (for example, the date is earlier than the onset date)","MEL_ADD_PROBLEM");
  else if(result=="-8")   ErrorMessage("approxStop argument is not valid","MEL_ADD_PROBLEM");
  else if(result=="-9")   ErrorMessage("comment is not valid or too long","MEL_ADD_PROBLEM");
  else if(result=="-10")  ErrorMessage("clinical list lock cannot be obtained","MEL_ADD_PROBLEM");
  else if(result=="-11")  ErrorMessage("problem cannot be changed for some other reason","MEL_ADD_PROBLEM");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_ADD_PROBLEM");
};

/*=========================================================================
* Example: {MEL_CHANGE_ALLERGY("1684162535020210","severe vomiting", "str(._TODAYSDATE)","","S","DRUG")}
* ChangeAllergy('1848734265874110','severe vomiting', '01/12/2019','','S','DRUG');
* (ID, Allergy ID), (desc, optional, reation description (256 char))
* crit: C = Critical, S = Severe, N = Moderate, I = Mild
* classification: Drug, Food, Environmental
* Output: N/A
* Tested: true
*========================================================================*/
function ChangeAllergy(ID, desc, startDate, stopDate, crit, classification){
  var result = EvaluateMel("{MEL_CHANGE_ALLERGY('"+ID+"','"+desc+"','"+startDate+"','"+stopDate+"','"+crit+"','"+classification+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_CHANGE_ALLERGY");
  else if(result=="-1")   ErrorMessage("ID is not valid","MEL_CHANGE_ALLERGY");
  else if(result=="-2")   ErrorMessage("description is too long","MEL_CHANGE_ALLERGY");
  else if(result=="-4")   ErrorMessage("startDate is not in the correct format","MEL_CHANGE_ALLERGY");
  else if(result=="-5")   ErrorMessage("startDate is not valid (for example, the date represents a future date)","MEL_CHANGE_ALLERGY");
  else if(result=="-6")   ErrorMessage("stopDate is not in the correct format","MEL_CHANGE_ALLERGY");
  else if(result=="-7")   ErrorMessage("stopDate is not valid (for example, the date is earlier than the onset date)","MEL_CHANGE_ALLERGY");
  else if(result=="-8")   ErrorMessage("crit is not valid","MEL_CHANGE_ALLERGY");
  else if(result=="-9")   ErrorMessage("classification not valid","MEL_CHANGE_ALLERGY");
  else if(result=="-10")  ErrorMessage("clinical list lock cannot be obtained","MEL_CHANGE_ALLERGY");
  else if(result=="-11")  ErrorMessage("allergy cannot be changed for some other reason","MEL_CHANGE_ALLERGY");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_CHANGE_ALLERGY");
};

/*=========================================================================
* Needs Work: Error MID is not valid.
* Example: {MEL_CHANGE_MEDICATION ('1778144549000730', 'NITROGLYCERIN','Take 1 every hour', '2013/05/07', '2013/05/10', '51', '3', 'Y', 'Must use as indicated','ICD-253.9|ICD10-E23.3', 'ICD-253.9|ICD10-E23.3',True,5,"dispense as written","P",1225652472001060,"NY",'2013/05/06', "00590032496")}
* ChangeMedication("1848298730224840","NITROGLYCERIN","Take 1 every hour","2013/05/07","2013/05/10","51","3","Y","Must use as indicated","ICD-253.9|ICD10-E23.3","ICD-253.9|ICD10-E23.3",true,5,"dispense as written","P",1225652472001060,"NY","2013/05/06", "00590032496");
* (MID, medication ID), (desc, optional (80 char)), (instruct, optional), (quanity, optional), (refills, optional), (BMN, optional(Y = This prescription requires a brand medically necessary medication.
* (medComm, (2000 char)), (diagCode, optional), (codeDesc, optional), (printDx, required (true, false)), (pharmID, optional), (pharmComm, optional)
* (authID, optional), (RxState, optional), (RxDate, optional), (ID, DDID or NDCNUM)
* RxType: E = Electronic, W = Handwritten, H = Historical, F = Fax to Pharmacy, Q = Print then Fax to Pharmacy, P = Print then Give to Patient
*         M = Print then Mail to Patient, L = Print then Mail to Pharmacy, S = Samples Given, T = Telephone, R = Reprint
* Date formats: MM/DD/YYYY
* Output: N/A
* Tested: true
*========================================================================*/
function ChangeMedication(MID, desc, instruct, startDate, stopDate, quanity, refills, BMN, medComm, diagCode, codeDesc, printDx, pharmID, pharmComm, RxType, authID, RxState, RxDate, ID){
  var result = EvaluateMel("{MEL_CHANGE_MEDICATION('"+MID+"','"+desc+"','"+instruct+"','"+startDate+"','"+stopDate+"','"+quanity+"','"+refills+"','"+BMN+"','"+medComm+"','"+diagCode+"','"+codeDesc+"',"+printDx+",'"+pharmID+"','"+pharmComm+"','"+RxType+"','"+authID+"','"+RxState+"','"+RxDate+"','"+ID+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_CHANGE_MEDICATION");
  else if(result=="-1")   ErrorMessage("MID is not valid","MEL_CHANGE_MEDICATION");
  else if(result=="-2")   ErrorMessage("description is too long","MEL_CHANGE_MEDICATION");
  else if(result=="-3")   ErrorMessage("code is not valid or wrong code type used","MEL_CHANGE_MEDICATION");
  else if(result=="-4")   ErrorMessage("startDate is not in the correct format","MEL_CHANGE_MEDICATION");
  else if(result=="-5")   ErrorMessage("startDate is not valid (for example, the date represents a future date)","MEL_CHANGE_MEDICATION");
  else if(result=="-6")   ErrorMessage("stopDate is not in the correct format","MEL_CHANGE_MEDICATION");
  else if(result=="-7")   ErrorMessage("stopDate is not valid (for example, the date is earlier than the onset date)","MEL_CHANGE_MEDICATION");
  else if(result=="-8")   ErrorMessage("quantity, refills, or BMN is not valid","MEL_CHANGE_MEDICATION");
  else if(result=="-9")   ErrorMessage("medication comment is too long","MEL_CHANGE_MEDICATION");
  else if(result=="-10")  ErrorMessage("clinical list lock cannot be obtained","MEL_CHANGE_MEDICATION");
  else if(result=="-11")  ErrorMessage("medication cannot be changed for some other reason","MEL_CHANGE_MEDICATION");
  else if(result=="-12")  ErrorMessage("invalid NDCNUM","MEL_CHANGE_MEDICATION");
  else if(result=="-13")  ErrorMessage("invalid DDID","MEL_CHANGE_MEDICATION");
  else if(result=="-14")  ErrorMessage("medication not in reference list","MEL_CHANGE_MEDICATION");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_CHANGE_MEDICATION");
};

/*=========================================================================
* Example: {MEL_CHANGE_PROBLEM(PRID, “Hypercholesterolemia”, “ICD10-E78.8”, “09/15/2012”, false, , , “Diet controlled”)}
* ChangeProblem(PRID, “Hypercholesterolemia”, “ICD10-E78.8”, “09/15/2012”, false, , , “Diet controlled”);
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* Output: N/A
* Tested: true
*========================================================================*/
function ChangeProblem(ID, desc, code, startDate, approxStart, stopDate, approxStop, comm){
  var result = EvaluateMel("{MEL_CHANGE_PROBLEM("+ID+",'"+desc+"','"+code+"','"+startDate+"',"+approxStart+",'"+stopDate+"',"+approxStop+",'"+comm+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_CHANGE_PROBLEM");
  else if(result=="-1")   ErrorMessage("PRID is not valid","MEL_CHANGE_PROBLEM");
  else if(result=="-2")   ErrorMessage("description is too long","MEL_CHANGE_PROBLEM");
  else if(result=="-3")   ErrorMessage("code is not valid or the wrong code type","MEL_CHANGE_PROBLEM");
  else if(result=="-4")   ErrorMessage("startDate is not in the correct format","MEL_CHANGE_PROBLEM");
  else if(result=="-5")   ErrorMessage("startDate is not valid (for example, the date represents a future date)","MEL_CHANGE_PROBLEM");
  else if(result=="-6")   ErrorMessage("approxStart argument is not valid","MEL_CHANGE_PROBLEM");
  else if(result=="-7")   ErrorMessage("stopDate is not valid (for example, the date is earlier than the onset date)","MEL_CHANGE_PROBLEM");
  else if(result=="-8")   ErrorMessage("approxStop argument is not valid","MEL_CHANGE_PROBLEM");
  else if(result=="-9")   ErrorMessage("comment is not valid or too long","MEL_CHANGE_PROBLEM");
  else if(result=="-10")  ErrorMessage("clinical list lock cannot be obtained","MEL_CHANGE_PROBLEM");
  else if(result=="-11")  ErrorMessage("problem cannot be changed for some other reason","MEL_CHANGE_PROBLE");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_CHANGE_PROBLEM");
};

/*=========================================================================
* ErrorMessage("Invalid format specified","MEL_LIST_CARE_PLAN");
* Output: Launches error message box
* Tested: true
*========================================================================*/
function ErrorMessage(message, title){
  //window.external.ShowErrorMessageBox(message, title);
};

/*=========================================================================
* Example: EvaluateMel("{GET_UNIQUE_WORLDID()};", true);
* Output: Varies
* Tested: true
*========================================================================*/
function EvaluateMel(melStatement, showWait, callback){
  if(showWait){
    if(callback) return window.external.EvaluateMelCallback(melStatement, showWait, callback);
    else return window.external.EvaluateMel(melStatement, showWait);
  }else{
    if(callback) return window.external.EvaluateMelCallback(melStatement, false, callback);
    else return window.external.EvaluateMel(melStatement, false);
  }
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function EvaluateMelCallback(melStatement, showWait, callback){
  window.external.EvaluateMelCallback(melStatement, showWait, callback);
};

/*=========================================================================
* Output: object array
* Tested: true
*========================================================================*/
function GetFormList(){
  var ls = EvaluateMel("{GET_FORM_LIST()}");
  var result = ParseDelimList2(ls);
  return result;
};

/*=========================================================================
* Get the value of the observation
* GetObsNow("BMI");
* Output: string
* Tested: true
*========================================================================*/
function GetObsNow(obs){
  return EvaluateMel('{OBSNOW("' + obs.replace(/\\([\s\S])|(")/g, "\\$1$2") + '")}');
};

/*=========================================================================
* Output: "Arizona"
* Tested: true
*========================================================================*/
function GetPharmacyState(pharmacyId){
  return EvaluateMel('{MEL_PHARM_STATE('+pharmacyId+')}');
};

/*=========================================================================
* Output: "5131-32973-7145"
* Tested: true
*========================================================================*/
function GetWorldID(pid){
  return EvaluateMel('{GET_UNIQUE_WORLDID()}');
};

/*=========================================================================
* Output: "42"
* Tested: true
*========================================================================*/
function GetServerID(pid){
  return EvaluateMel('{GET_UNIQUE_SERVERID()}');
};

/*=========================================================================
* Output: String - needs to be parsed to JSON
* Tested: true
*========================================================================*/
function ListCarePlan(){
  var result = EvaluateMel("{MEL_LIST_CARE_PLAN ('delim','all','all')}", true);
  if(result=="-1")         ErrorMessage("Invalid format specified","MEL_LIST_CARE_PLAN");
  else if(result=="-2")   ErrorMessage("Invalid type specified","MEL_LIST_CARE_PLAN");
  else return result;
};

/*=========================================================================
* Output: String - needs to be parsed to JSON
* Tested: true
*========================================================================*/
function ListFHX(){
  var result = EvaluateMel("{MEL_LIST_FHX ('delim','all')}", true);
  if(result=="-1")         ErrorMessage("Invalid format specified","MEL_LIST_FHX");
  else if(result=="-2")   ErrorMessage("Invalid type specified","MEL_LIST_FHX");
  else return result;
};

/*=========================================================================
* Output: String - needs to be parsed to JSON
* Tested: true
*========================================================================*/
function ListFHXAfter(){
  var result = EvaluateMel("{MEL_LIST_FHX_AFTER ('delim','all')}", true);
  if(result=="-1")         ErrorMessage("Invalid format specified","MEL_LIST_FHX_AFTER");
  else if(result=="-2")   ErrorMessage("Invalid type specified","MEL_LIST_FHX_AFTER");
  else return result;
};

/*=========================================================================
* Output: String - needs to be parsed to JSON
* Tested: true
*========================================================================*/
function ListFHXNew(){
  var result = EvaluateMel("{MEL_LIST_FHX_NEW ('delim')}", true);
  if(result=="-1")         ErrorMessage("Invalid format specified","MEL_LIST_FHX");
  else return result;
};

/*=========================================================================
* LastSignedObsDate("BMI");
* Output: 09/12/2018
* Tested: true
*========================================================================*/
function LastSignedObsDate(obs){
  return EvaluateMel('{LAST_SIGNED_OBS_DATE("'+obs+'")}');
};

/*=========================================================================
* LastSignedObsDate("BMI");
* Output: 09/12/2018 9:04:21 AM
* Tested: true
*========================================================================*/
function LastSignedObsDateTime(obs){
  return EvaluateMel('{LAST_SIGNED_OBS_DATETIME("'+obs+'")}');
};

/*=========================================================================
* LastSignedObsValue("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function LastSignedObsValue(obs){
  return EvaluateMel('{LAST_SIGNED_OBS_VALUE("'+obs+'")}');
};

/*=========================================================================
* LastSignedObsValue("BMI");
* Output: 16.93 (09/12/2018 9:04:21 AM)
* Tested: true
*========================================================================*/
function LastSignedObsValueDate(obs){
  return EvaluateMel('{LAST_SIGNED_OBS_VALUEDATE("'+obs+'")}');
};

/*=========================================================================
* LastObsDate("BMI");
* Output: 09/12/2018
* Tested: true
*========================================================================*/
function LastObsDate(obs){
  return EvaluateMel('{LASTOBSDATE("'+obs+'")}');
};

/*=========================================================================
* LastObsDateTime("BMI");
* Output: 09/12/2018 9:04:21 AM
* Tested: true
*========================================================================*/
function LastObsDateTime(obs){
  return EvaluateMel('{LASTOBSDATETIME("'+obs+'")}');
};

/*=========================================================================
* LastObsValue("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function LastObsValue(obs){
  return EvaluateMel('{LASTOBSVALUE("'+obs+'")}');
};

/*=========================================================================
* LastObsValueByLoc("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function LastObsValueByLoc(obs){
  return EvaluateMel('{LASTOBSVALUEBYLOC("'+obs+'")}');
};

/*=========================================================================
* LastObsValueByUser("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function LastObsValueByUser(obs){
  return EvaluateMel('{LASTOBSVALUEBYUSER("'+obs+'")}');
};

/*=========================================================================
* LastObsValueDate("BMI");
* Output: 16.93 (09/12/2018 9:04:21 AM)
* Tested: true
*========================================================================*/
function LastObsValueDate(obs){
  return EvaluateMel('{LASTOBSVALUEDATE("'+obs+'")}');
};

/*=========================================================================
* ListObsValueByLoc("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function ListObsValueByLoc(obs){
  return EvaluateMel('{LISTOBSVALUEBYLOC("'+obs+'")}');
};

/*=========================================================================
* ListObsValueByUser("BMI");
* Output:
* Tested: true
*========================================================================*/
function ListObsValueByUser(obs){
  return EvaluateMel('{LISTOBSVALUEBYUSER("'+obs+'")}');
};

/*=========================================================================
* ObsAny("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function ObsAny(obs){
  return EvaluateMel('{OBSANY("'+obs+'")}');
};

/*=========================================================================
* ObsListChanges();
* Output: "Added new observation of BMI:  (03/08/2019 9:05)"
* Tested: true
*========================================================================*/
function ObsListChanges(){
  return EvaluateMel('{OBS_LIST_CHANGES()}');
};

/*=========================================================================
* ObsModifierAny("BMI");
* Output: 16.93
* Tested: true
*========================================================================*/
function ObsModifierAny(obs){
  return EvaluateMel('{OBSMODIFIERANY("'+obs+'")}');
};

/*=========================================================================
* ObsModifierNow("BMI","19.63");
* Output: 16.93
* Tested: true
*========================================================================*/
function ObsModifierNow(obs,val){
  if(!val) return EvaluateMel('{OBSMODIFIERNOW("'+obs+'")}');
  else return EvaluateMel('{OBSMODIFIERNOW("'+obs+'","'+val+'")}');
};

/*=========================================================================
* ObsModifierPrev("BMI");
* Output:
* Tested: true
*========================================================================*/
function ObsModifierPrev(obs){
  return EvaluateMel('{OBSMODIFIERPREV("'+obs+'")}');
};

/*=========================================================================
* ObsNow("weight","155","02/01/2001");
* Output: 16.93
* Tested: true
*========================================================================*/
function ObsNow(obs,val,date){
  return EvaluateMel('{OBSNOW("'+obs+'","'+val+'","'+date+'")}');
};

/*=========================================================================
* ObsModifierPrev("BMI");
* Output:
* Tested: true
*========================================================================*/
function ObsPrev(obs){
  return EvaluateMel('{OBSPREV("'+obs+'")}');
};

/*=========================================================================
* ObsTagAny("BMI");
* Output:
* Tested: true
*========================================================================*/
function ObsTagAny(obs){
  return EvaluateMel('{OBSTAGANY("'+obs+'")}');
};

/*=========================================================================
* ObsTagNow("BMI","high");
* Output: high
* Tested: true
*========================================================================*/
function ObsTagNow(obs,val){
  return EvaluateMel('{OBSTAGNOW("'+obs+'","'+val+'")}');
};

/*=========================================================================
* ObsTagPrev("BMI");
* Output:
* Tested: true
*========================================================================*/
function ObsTagPrev(obs){
  return EvaluateMel('{OBSTAGPREV("'+obs+'")}');
};

/*=========================================================================
* ObsUnit("BMI");
* Output: kg/m2
* Tested: true
*========================================================================*/
function ObsUnit(obs){
  return EvaluateMel('{OBSUNIT("'+obs+'")}');
};

/*=========================================================================
* Output: Opens Update Alleriegs or Adverse Reactions Dialog Window
* Tested: true
*========================================================================*/
function OpenAllergiesDiag(){
  return EvaluateMel('{ADD_ALLERGIES}');
};

/*=========================================================================
* Output: Opens Update Directives Dialog Window
* Tested: true
*========================================================================*/
function OpenDirectivesDiag(){
  return EvaluateMel('{ADD_DIRECTIVES}');
};

/*=========================================================================
* Output: Opens the specified form component in the current update
* tab = open indicated tab on form component, blank = default first tab
* Tested: true
*========================================================================*/
function OpenFormComp(path,tab){
  if(!tab) EvaluateMel('{OPEN_FORM_COMP("'+path+'")}');
  else return EvaluateMel('{OPEN_FORM_COMP("'+path+'","'+tab+'")}');
};

/*=========================================================================
* Output: Opens the specified handout specified by the str
* Tested: true
* Returns: url for the description in AddMUActivityLog
*========================================================================*/
function OpenHandout(str){
  var desc = ("Handout - " + str);
  var url = "https://www.micromedexsolutions.com/carenotes/librarian/accessv3?mainSearchCriteria.v.c=&mainSearchCriteria.v.cs=&mainSearchCriteria.v.dn="+str+"&holder.assignedEntity.n=GEC&holder.assignedEntity.certificateText=T46020";
  //showHtmlFormDialog(url,desc);
  window.open(url,desc,"menubar=1,location=1,toolbar=1,titlebar=1,status=1,scrollbars=1,resizable=1");
  return url;
};

/*=========================================================================
* Output: Opens New Medication Dialog Window
* Tested: true
*========================================================================*/
function OpenMedicationDiag(str){
  if(typeof str == 'undefined') return EvaluateMel('{NEWMED("")}');
  else return EvaluateMel('{NEWMED('+str+')}');
};

/*=========================================================================
* Output: Opens Drug Interactions and Contraindications Dialog Window
* Tested: true
*========================================================================*/
function OpenOverridesDiag(){
  return EvaluateMel('{MEL_SHOW_INTERACTIONOVERRIDE_DLG()}', false);
};

/*=========================================================================
* Output: Opens New Problem Dialog Window
* Tested: true
*========================================================================*/
function OpenProblemDiag(str){
  if(typeof str == 'undefined') return EvaluateMel('{NEWPROBLEM("DX OF","")}');
  else return EvaluateMel('{NEWPROBLEM("DX OF",'+str+')}');
};

/*=========================================================================
* Output: Opens New QMAF Dialog Window
* Tested: true
*========================================================================*/
function OpenQMAFDiag(){
  return EvaluateMel('{SHOW_HTML_FORM("//localserver/EncounterForms/HtmlForms/QualityMeasures/QualityMeasures.html","Quality Measures - Valley Medical Center, PLLC")}', true);
};

/*=========================================================================
* PotentObservations();
* Output: ViewPencilObs
* Tested: true
*========================================================================*/
function PotentObservations(){
  return EvaluateMel('{POTENT_OBSERVATIONS}');
};

/*=========================================================================
* Example: {MEL_REMOVE_ALLERGY("1226006769001060", "03/12/2013","Allergy disproved")}
* RemoveAllergy(1863698602852300, '01/21/2019','Allergy disproved');
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* reason: Entered in error, Patient corrected, Allergy disproved, Other
* Output: N/A
* Tested: true
*========================================================================*/
function RemoveAllergy(ID, stopDate, reason){
  var result = EvaluateMel("{MEL_REMOVE_ALLERGY('"+ID+"','"+stopDate+"','"+reason+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_REMOVE_ALLERGY");
  else if(result=="-1")   ErrorMessage("Allergy not found","MEL_REMOVE_ALLERGY");
  else if(result=="-2")   ErrorMessage("Allergy found, but already inactive","MEL_REMOVE_ALLERGY");
  else if(result=="-3")   ErrorMessage("The end_date is not valid (for example, the date is earlier than the startDate)","MEL_REMOVE_ALLERGY");
  else if(result=="-5")   ErrorMessage("Reason is Invalid","MEL_REMOVE_ALLERGY");
  else if(result=="-6")   ErrorMessage("clinical list lock cannot be obtained","MEL_CHANGE_ALLERGY");
  else if(result=="-7")   ErrorMessage("allergy cannot be removed for some other reason","MEL_REMOVE_ALLERGY");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_REMOVE_ALLERGY");
};

/*=========================================================================
* Example: {MEL_REMOVE_FHX (FHXID,"Entered in Error")}
* RemoveFHX("1863774213861820", "Testing");
* (reason, (25 char))
* Output: N/A
* Tested: true
*========================================================================*/
function RemoveFHX(FHXID, reason){
  var result = EvaluateMel("{MEL_REMOVE_FHX('"+FHXID+"','"+reason+"')}", true);
  if(result=="0")         ErrorMessage("Successfully removed","MEL_REMOVE_FHX");
  else if(result=="-1")   ErrorMessage("FHXID contains an invalid numeric value, the value is empty, or too long","MEL_REMOVE_FHX");
  else if(result=="-2")   ErrorMessage("Removal reason is too long, or empty","MEL_REMOVE_FHX");
  else if(result=="-3")   ErrorMessage("Cannot acquire clinical list lock","MEL_REMOVE_FHX");
  else if(result=="-4")   ErrorMessage("Cannot remove FHx due to unknown reason","MEL_REMOVE_FHX");
  else if(result=="-21")  ErrorMessage("Service layer error","MEL_REMOVE_FHX");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_REMOVE_FHX");
};

/*=========================================================================
* Example: {MEL_REMOVE_PROBLEM(PRID, “09/15/2012”, false, “Resolved”)}
* RemoveProblem(1830777798699680, "09/15/2018", false, "Correction");
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* Reasons: "Resolved", "Inactive", "Ruled out" or "Correction". Default is "Resolved".
* Output: N/A
* Tested: true
*========================================================================*/
function RemoveProblem(PRID, endDate, approx, reason){
  var result = EvaluateMel("{MEL_REMOVE_PROBLEM("+PRID+",'"+endDate+"','"+approx+"','"+reason+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_REMOVE_PROBLEM");
  else if(result=="-1")   ErrorMessage("problem is not found","MEL_REMOVE_PROBLEM");
  else if(result=="-2")   ErrorMessage("problem is found and it is already inactive","MEL_REMOVE_PROBLEM");
  else if(result=="-3")   ErrorMessage("endDate is not valid","MEL_REMOVE_PROBLEM");
  else if(result=="-4")   ErrorMessage("approx argument is not either true or false","MEL_REMOVE_PROBLEM");
  else if(result=="-5")   ErrorMessage("Reason is Invalid","MEL_REMOVE_PROBLEM");
  else if(result=="-6")   ErrorMessage("data symbol cannot obtain the clinical list lock","MEL_REMOVE_PROBLEM");
  else if(result=="-7")   ErrorMessage("other problem is encountered","MEL_REMOVE_PROBLEM");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_REMOVE_PROBLEM");
};

/*=========================================================================
* SetObsValue("BMI","99");
* Output: N/A
* Tested: true
*========================================================================*/
function SetObsValue(obs, value) {
  EvaluateMel('{OBSNOW("' + obs + '","' + value.replace(/\\([\s\S])|(")/g, "\\$1$2") + '")}');
};

/*=========================================================================
* PotentObservations();
* Output: "Observations"
* Tested: true
*========================================================================*/
function SumActiveObservations(){
  return EvaluateMel('{SUM_ACTIVE_OBSERVATIONS}');
};

/*=========================================================================
* ISSUE: documentation is wrong about intake varibles
* Example: {MEL_UPDATE_CARE_PLAN(123,"Exercise to lose weight","289169006","Reduce 20 pounds","Walk daily for one hour. Eat a light dinner.","2013/05/10","","123|234")}
* optional: (SNOMEDCTCODE, (20 char)), (target,(255 char)), (instruct, (2000 char)), (endDate)
* Date formats: MM/DD/YYYY or YYYY/MM/DD
* Output: N/A
* Tested: true
*========================================================================*/
function UpdateCarePlan(ID, date, goal, SNOMEDCTCODE, target, instruct, setDate, endDate, PRID){
  var result = EvaluateMel("{MEL_UPDATE_CARE_PLAN('"+ID+"','"+date+"','"+goal+"','"+SNOMEDCTCODE+"','"+target+"','"+instruct+"','"+setDate+"','"+endDate+"','"+PRID+"')}", true);
  if(result=="0")         ErrorMessage("Success","MEL_UPDATE_CARE_PLAN");
  else if(result=="-1")   ErrorMessage("Invalid care plan ID","MEL_UPDATE_CARE_PLAN");
  else if(result=="-2")   ErrorMessage("Description is blank or too long","MEL_UPDATE_CARE_PLAN");
  else if(result=="-3")   ErrorMessage("Instruction is too long","MEL_UPDATE_CARE_PLAN");
  else if(result=="-4")   ErrorMessage("Code is too long","MEL_UPDATE_CARE_PLAN");
  else if(result=="-5")   ErrorMessage("Target is too long","MEL_UPDATE_CARE_PLAN");
  else if(result=="-6")   ErrorMessage("GoalSetDate is invalid","MEL_UPDATE_CARE_PLAN");
  else if(result=="-7")   ErrorMessage("GoalMetDate is invalid or less than GoalSetDate","MEL_UPDATE_CARE_PLAN");
  else if(result=="-9")   ErrorMessage("Invalid PRID","MEL_UPDATE_CARE_PLAN");
  else if(result=="-10")  ErrorMessage("Cannot add care plan for some other reason","MEL_UPDATE_CARE_PLAN");
  else if(result=="-11")  ErrorMessage("Another user is updating this care plan. You cannot update until the changes are saved or cancelled.","MEL_UPDATE_CARE_PLAN");
  else if(result=="-12")  ErrorMessage("The care plan being modified is NOT CURRENT.","MEL_UPDATE_CARE_PLAN");
  else if(result=="-21")  ErrorMessage("Service layer error","MEL_UPDATE_CARE_PLAN");
  else                    ErrorMessage("Error: unkown reason, returned value: "+ result,"MEL_UPDATE_CARE_PLAN");
};

/*=========================================================================
* Invoke the Update Medications dialog
* Utilize $timeout since this displays a modal dialog and shouldn't be done during digest cycle
* Output: N/A
* Tested: true
*========================================================================*/
function UpdateMedications() {
  EvaluateMel("{UPDATE_MEDS(true)}");
};

/*=========================================================================
* Invoke the Update Orders dialog
* Utilize $timeout since this displays a modal dialog and shouldn't be done during digest cycle
* Output: N/A
* Tested: true
*========================================================================*/
function UpdateOrders() {
  EvaluateMel("{UPDATE_ORDERS(true)}");
};

/*=========================================================================
* Invoke the Update Problems dialog
* Utilize $timeout since this displays a modal dialog and shouldn't be done during digest cycle
* Output: N/A
* Tested: true
*========================================================================*/
function UpdateProblems() {
  EvaluateMel("{UPDATE_PROBLEMS(true)}");
};


/*=========================================================================
*     **** NEEDS TESTING / FURTHER TESTING ****
*========================================================================*/

/*=========================================================================
* Arguments: 1 - medicationId, 2 - Parmacy Name, 3 - RxType, 4 - Quantity,
  5 - Refill, 6 - DAW.
* Output: returns 0
* Tested: needs further testing
*========================================================================*/
function approveERXRequest(request){
  return EvaluateMel('{MEL_ERX_APPROV("'+request+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function changePrescriptionPharmacy(ptid, pharmacyId, rxType){
  return EvaluateMel('{MEL_CHANGE_MEDICATION_RX('+ptid+','+pharmacyId+',"'+rxType+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function changePrescriptionOrderNumber(prescriptionId, prescriptionOrderNumber){
  return EvaluateMel('{MEL_UPDATE_PRESCRIPTIONORDERNUMBER('+prescriptionId+',"'+prescriptionOrderNumber+'")}', true);
};

/*=========================================================================
* Arguments: 1 - medicationId, 2 - Parmacy Id, 3 - RxType, 4 - Quantity,
  5 - Refill, 6 - DAW., 7 - PrintDx, 8 - Rx Comments, 9 - Force Create New Rx,
  10 - clinical date, 11 - ptid, 12 - prescriberid, 13 - ShouldLockacquire,
  14 - displayUnit
* Output:
* Tested: needs further testing
*========================================================================*/
function changePrescription(medicationId, pharmacyId, rxType, quantity, refills, daw, prescriptionComments, createNewRx, ShouldLockAcquire, clinicalDate, prescriptionId, prescriberId, displayUnit){
  return EvaluateMel('{MEL_ADD_RX("'+medicationId+'","'+pharmacyId+'","'+rxType+'",\"'+quantity+'\",\"'+refills+'\","'+daw+'",false,\"'+formatDataForMEL(prescriptionComments)+'\",'+forceCreate+',"'+rxClinicalDate+'","'+ptid+'","'+authProvider+'",'+ShouldLockAcquire+',"'+displayUnitLookup+'")}', true);
};

/*=========================================================================
* Arguments: 1 - medicationId, 2 - Parmacy Name, 3 - RxType, 4 - Quantity,
  5 - Refill, 6 - DAW.
* Output: returns 0
* Tested: needs further testing
*========================================================================*/
function denyERXRequest(request){
  return EvaluateMel('{MEL_ERX_DENY("'+request+'")}', true);
};

/*=========================================================================
* Arguments: 1 - medicationId, 2 - Parmacy Name, 3 - RxType, 4 - Quantity,
  5 - Refill, 6 - DAW.
* Output: returns 0
* Tested: needs further testing
*========================================================================*/
function dntfERXRequest(request, modifiedRequest){
  return EvaluateMel('{MEL_ERX_DNTF("'+request+'","'+modifiedRequest+'")}', true);
};

/*=========================================================================
* Arguments: 1 - medicationId, 2 - Parmacy Name, 3 - RxType, 4 - Quantity,
  5 - Refill, 6 - DAW.
* Output: returns 0
* Tested: needs further testing
*========================================================================*/
function dnERXRequest(request, modifiedRequest){
  return EvaluateMel('{MEL_ERX_DN("'+request+'","'+modifiedRequest+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function doPatientEducationLookup(sdid, genericName, ddid, desc){
  return EvaluateMel('{MEL_PATIENTEDUCATION_FORMEDICATION("'+sdid+'","'+genericName+'","'+ddid+'","'+desc+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function doClinicalDecisionSupportLookup(sdid, genericName, ddid, desc){
  return EvaluateMel('{MEL_CDS_FORMEDICATION("'+sdid+'","'+genericName+'","'+ddid+'","'+desc+'")}', true);
};

/*=========================================================================
* Output: "T"
* Tested: true
*========================================================================*/
function eRxEnabled(){
  return EvaluateMel('{Clinic._EnableOnlineRx}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function formatDataForMEL(formatData){
  if(formatData != null){
    formatData = formatData.replace(/\\/g, '\\\\');
    formatData = formatData.replace(/"/g, '\\"');
    formatData = formatData.replace(/'/g, '\\\'');
  }
  return formatData;
};

/*=========================================================================
* Output: ??
* Tested: true
*========================================================================*/
function getPrescriptionState(){
  return EvaluateMel('{DOCUMENT._ML_RX_STATE}', true);
};

/*=========================================================================
* Output: "FLASE"
* Tested: true
*========================================================================*/
function gotoChartModule(pid){
  return EvaluateMel('{GOTO_CHART_MODULE("'+pid+'")}', true);
};

/*=========================================================================
* Output: returns 0
* Tested: needs further testing
*========================================================================*/
function removeMedication(medId){
  return EvaluateMel('{MEL_UNDO_MEDICATION('+medId+')}', true);
};

/*=========================================================================
* Delete the prescription. If this is a renewal request do not ignore rxType so
  cleanup of any DN rows can be performed
* Output: returns -3
* Tested: needs further testing
*========================================================================*/
function removePrescription(ptid, ignoreRxType){
  if(ignoreRxType) return EvaluateMel('{MEL_DELETE_ERX("'+ptid+'",true)}', true);
  else return EvaluateMel('{MEL_DELETE_ERX("'+ptid+'",false)}', true);
};

/*=========================================================================
* sdid == $window.external.ActiveSdid
* Output:
* Tested: true
*========================================================================*/
function showHtmlFormDialog(formUrl, formName, sdid, width, height, parentFormId){
  return EvaluateMel('{SHOW_HTML_FORM("'+formUrl+'","'+formName+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function techincalFailureForEpcs(prescriptionId, errorCode, errorMessage){
  return EvaluateMel('{MEL_ERROR_TRANSMIT_ERX('+prescriptionId+','+errorCode+',"'+formatDataForMEL(errorMessage)+'")}', true);
};

/*=========================================================================
* Output:
* Tested: needs testing
*========================================================================*/
function validateScheduledRx(ddid, refills, quantity, rxtype, classcode, pvid){
  return EvaluateMel('{MEL_VALIDATE_RX('+ddid+',"'+refills+'","'+quantity+'","'+rxtype+','+classcode+'",'+pvid+')}', true);
};


/*=========================================================================
*     **** CUSTOM FUNCTIONS ****
*========================================================================*/

/*=========================================================================
* Version 01 - Help parse delimited Lists from example ListObs()
* Output: JSON
* Tested: true
*========================================================================*/
function _defineProperty(obj, key, value){
  if(key in obj) Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  else obj[key] = value;
  return obj;
};
// Above function is required for ParseDelimList1() *!
function ParseDelimList1(str){
  return str.split(/[|]+/).reduce(function (op, inp, index) {
    op[index] = inp.split(/[\^]+/).map(function (e, i) {
      return _defineProperty({}, i, e);
    });
    return op;
  }, {});
};

/*=========================================================================
* Version 02 - Help parse delimited Lists from example ListObs()
* Output: JSON
* Tested: true
*========================================================================*/
function ParseDelimList2(str){
  return str.split('|').map(function (a) {
    return a.split('^').map(function (b) {
      return b.split('~').map(function (c) {
        return c.split(',');
      });
    });
  });
};


/*=========================================================================
* Searches forms list for a form indicated by string search value
* Output: Form file path
* Tested: true
*========================================================================*/
function SearchFormList(str){
  var result = "";
  var ls = GetFormList();
  for(var i=0; i< ls.length; i++){
    var found = JSON.stringify(ls[i][1]).match(new RegExp('".*'+ str +'.*"' ,'gi'));
    if(found){
      result = ls[i][0]+ls[i][1];
      break;
    }
  };
  return result;
};


/*=========================================================================
* Searches string by string search value
* Output: boolen
* Tested: true
*========================================================================*/
function SearchString(val,str){
  var result = "";
  var found = JSON.stringify(str.toLowerCase()).match(new RegExp('".*'+ val.toLowerCase() +'.*"' ,'gi'));
  found?result = true:result = false;
  return result;
};


/*=========================================================================
* List all observation values, optionally with the date, of the specified
  observation term.
* Output:
* Tested: true
*========================================================================*/
function ListObs(obs,status,format){
  var ls = EvaluateMel('{LIST_OBS("'+obs+'","'+status+'","delimited","'+format+'")}');
  ls = ParseDelimList2(ls);
  var result = [];
  for(var i=0; i<ls.length; i++){
    result[i] = {
      obsVal: ls[i][0],
      obsDate: ls[i][1],
      obsTime: ls[i][2],
      signingUser: ls[i][3],
      enteringUser: ls[i][4],
      flags: ls[i][5],
      comment: ls[i][6],
      state: ls[i][7],
      loc: ls[i][8],
      docType: ls[i][9],
      docID: ls[i][10]
    };
  };
  return result;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetUserList(){
  var data = EvaluateMel("{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, '','delimited', true)}", true);
  var result = data.split('|');
  for(i = 0; i < result.length; i++){
    if(result[i].length == 0)result.splice(i, 1);
  }
  for(i = 0; i < result.length; i++){
    var data = result[i].split('^');
    var datLen = data.length;
    result[i] = {
      loginName: ((datLen>0)?data[0]:""),
      searchName: ((datLen>1)?data[1]:""),
      phoneNumber: ((datLen>2)?data[2]:""),
      homeLocation: ((datLen>3)?data[3]:""),
      group: ((datLen>4)?data[4]:""),
      jobTitle: ((datLen>5)?data[5]:""),
      specialty: ((datLen>6)?data[6]:""),
      npi: ((datLen>7)?data[7]:""),
      prescriberId: ((datLen>8)?data[8]:""),
      DEANumber: ((datLen>9)?data[9]:""),
      LICNumber: ((datLen>10)?data[10]:""),
      memberLogin: ((datLen>11)?data[11]:""),
      data2000: ((datLen>12)?data[12]:""),
      uniquePhysicianId: ((datLen>13)?data[13]:""),
      activationDate: ((datLen>14)?data[14]:""),
      expirationDate: ((datLen>15)?data[15]:""),
    };
  }
  return result;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetCurrentUser(){
  var data = JSON.parse(window.external.CurrentUserInfo);
  var result = (typeof data != "undefined")?parseCurrentUser():"";
  function parseCurrentUser(){
    var result = {
      pvid: data.PVID,
      doctorFacilityId: data.DoctorFacilityId,
      firstName: data.FirstName,
      middleName: data.MiddleName,
      lastName: data.LastName,
      loginName: data.LoginName,
      fullName: data.FullName,
      DEANumber: data.DEANumber,
      LICNumber: data.LICNumber,
      homeLocationId: data.HomeLocationId,
      homeLocationAbbreviatedName: data.HomeLocationAbbreviatedName,
      currentLocationName: data.CurrentLocationName,
      currentLocationId: data.CurrentLocationId,
      currentLocationAbbreviatedName: data.CurrentLocationAbbreviatedName,
      preferenceGroupId: data.PreferenceGroupId,
      authorizedLocationIds: data.AuthorizedLocationIds,
      MQICUserName: data.MQICUserName,
      groupList: data.GroupList,
      roleList: data.RoleList,
      pidList: data.PidList,
      pidInfo: data.MruPatientsInfo,
      PrescriberId: data.PrescriberId,
      memberId: data.MemberId,
      UPIN: data.UPIN,
      NPI: data.NPI,
      homeLocAddress: data.HomeLocAddress,
      PMPRoleName: data.PMPRoleName,
      orgName: data.OrgName,
      currentLocState: data.CurrentLocState
    };
    return result;
  };
  return result;
};

/*=========================================================================
* Same as GetChartData(patientId, includeActiveChartDocument,
  includeFlagsAndCareAlerts, includeMedAdministrationRequests,
  includeImmunizationList, includeFamilyHealthHistoryList)
* Output: JSON
* Tested: true
*========================================================================*/
function GetPatient(){
  var data = JSON.parse(window.external.Demographics);
  var result = (typeof data != "undefined")?parsePatient():"";
  function parsePatient(){
    var perLen = (data.person.personNameList.length > 0)?true:false;
    var mailLen = (data.person.mailingAddressList.length > 0)?true:false;
    var result = {
      pcp: EvaluateMel('{PATIENT.PCP}'),
      pid: data.patientKey,
      printId: ((data.identifierList.length > 1)?data.identifierList[1].idValue:""),
      patientId: ((data.identifierList.length > 1)?data.identifierList[1].idValue:""),
      lastOfficeVisitDate: data.lastOfficeVisitDate,
      firstName: ((perLen)?data.person.personNameList[0].givenName:""),
      middleName: ((perLen)?data.person.personNameList[0].middleName:""),
      lastName: ((perLen)?data.person.personNameList[0].familyName:""),
      prefixName: ((perLen)?data.person.personNameList[0].prefixName:""),
      suffixName: ((perLen)?data.person.personNameList[0].suffixName:""),
      titleName: ((perLen)?data.person.personNameList[0].titleName:""),
      fullName:
      ((perLen)?((data.person.personNameList[0].prefixName != null)?data.person.personNameList[0].prefixName:""):"")+" "+
      ((perLen)?data.person.personNameList[0].givenName:"")+" "+
      ((perLen)?data.person.personNameList[0].middleName:"")+" "+
      ((perLen)?data.person.personNameList[0].familyName:"")+" "+
      ((perLen)?((data.person.personNameList[0].suffixName != null)?data.person.personNameList[0].suffixName:""):""),
      ageInYears: data.personAge.AgeInYears,
      ageInMonths: data.personAge.AgeInMonths,
      ageString: data.personAge.AgeString,
      dateOfBirth:
      data.person.birthDate.substr(4,2)+"/"+
      data.person.birthDate.substr(6,2)+"/"+
      data.person.birthDate.substr(0,4),
      dateOfDeath: data.person.deceaseTime,
      sex: data.person.genderCode,
      race: EvaluateMel('{PATIENT.RACE}'),
      ethnicity: EvaluateMel('{PATIENT.ETHNICITY}'),
      religion: data.person.religionCode,
      language: data.languageList,
      preferredLanguage: data.preferredLanguage,
      maritalStatus: data.person.maritalStatusCode,
      electronicAddressList: data.person.electronicAddressList,
      address1: ((mailLen)?data.person.mailingAddressList[0].line1Addr:""),
      address2: ((mailLen)?data.person.mailingAddressList[0].line2Addr:""),
      city: ((mailLen)?data.person.mailingAddressList[0].cityName:""),
      zipCode: ((mailLen)?data.person.mailingAddressList[0].postalCode:""),
      state: ((mailLen)?data.person.mailingAddressList[0].stateCode:""),
      POBox: ((mailLen)?data.person.mailingAddressList[0].postalBoxId:""),
      insuranceSetList: data.person.insuranceSetList,
    };
    return result;
  };
  return result;
};
