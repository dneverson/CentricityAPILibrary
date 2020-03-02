/*=========================================================================
* [HTMLEFS][1][RxRefillTest][Enterprise][RxRefillTest][RxRefillTest] [//localserver/EncounterForms/IntegrationTestRunner/index.html][Arial]
* [HTMLEFS][1][HCCSearch][Enterprise, VMC, Test][HCCSearch; Created by Derry Everson 11/05/2018][HCCSearch][//localserver/EncounterForms/HCCSearch/index.html][Arial]
* encounterforms/common/centricityemr/centricityemr-min-1.1
* @author Derry Everson
*
* Work:
** https://www.catalystmedicalgroup.com
** deverson@valleymedicalcenter.com
* Personal:
** https://www.arachnidserver.com
** dneverson@lcmail.lcsc.edu
*
* Sources for this can be found at:
** https://github.com/dneverson/CentricityAPILibrary
* Date: 03/28/2019
*========================================================================*/

/**************************************************************************
*     **** CENTRICITY FUNCTIONS ****
**************************************************************************/

/*=========================================================================
* Decodes a string from retrieval via getChartValue
* Output: string
* Tested: true
*========================================================================*/
function DecodeFromGetChartValue(value){
  var decodedResult = value;
  if (decodedResult != null) {
    decodedResult = decodedResult.replace(/&#123;/g, '{');
    decodedResult = decodedResult.replace(/&#125;/g, '}');
    decodedResult = decodedResult.replace(/&quot;/g, '"');
    decodedResult = decodedResult.replace(/&#58;/g, ':');
    decodedResult = decodedResult.replace(/&#44;/g, ',');
  }
  return decodedResult;
};

/*=========================================================================
* Encodes a string for storage via setChartValue
* Output: string
* Tested: true
*========================================================================*/
function EncodeForSetChartValue(value){
  var encodedResult = value;
  if (encodedResult != null) {
    encodedResult = encodedResult.replace(/{/g, '&#123;');
    encodedResult = encodedResult.replace(/}/g, '&#125;');
    encodedResult = encodedResult.replace(/\"/g, '&quot;');
    encodedResult = encodedResult.replace(/:/g, '&#58;');
    encodedResult = encodedResult.replace(/,/g, '&#44;');
  }
  return encodedResult;
};


/**************************************************************************
*     **** EXTERNAL VARIBLE FUNCTIONS ****
**************************************************************************/

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetActiveDocuments(){
  return JSON.parse(window.external.ActiveDocuments);
};

/*=========================================================================
* Output: number
* Tested: true
*========================================================================*/
function GetActiveSdid(){
  return window.external.ActiveSdid;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetAllergies(){
  return JSON.parse(window.external.Allergies);
};

/*=========================================================================
* NEEDS TESTING
* Output: unknown - madcapall.js
* Tested: true
*========================================================================*/
function Getattached(){
  return window.external.attached();
};

/*=========================================================================
* Output: https://npcps02.valleymedicalcenter.com:9443/npcentricityps/ws/Services
* Tested: true
*========================================================================*/
function GetBaseServicesUrl(){
  return window.external.BaseServicesUrl;
};

/*=========================================================================
* Output: https://epcs.gehealthcare.com
* Tested: true
*========================================================================*/
function GetBaseEpcsServicesUrl(){
  return window.external.BaseEpcsServicesUrl;
};

/*=========================================================================
* Output: unknown - Not used any more ver 1.0
* Tested: true
*========================================================================*/
function GetCareAlert(){
  return JSON.parse(window.external.CareAlert);
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetCareAlerts(){
  return JSON.parse(window.external.CareAlerts);
};

/*=========================================================================
* Output: unknown - JSON or Array
* Tested: true
*========================================================================*/
function GetCloudServicesKey(){
  return window.external.CloudServicesKey;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetCorrelationId(){
  return window.external.CorrelationId;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetCurrentCookie(){
  return window.external.CurrentCookie;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetCurrentUserInfo(){
  return JSON.parse(window.external.CurrentUserInfo);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDDID(){
  return window.external.DDID;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetDemographics(){
  return JSON.parse(window.external.Demographics);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugAgeInteractions(){
  return window.external.DrugAgeInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugAlcoholInteractions(){
  return window.external.DrugAlcoholInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugAllergyInteractions(){
  return window.external.DrugAllergyInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugDrugInteractions(){
  return window.external.DrugDrugInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugFoodInteractions(){
  return window.external.DrugFoodInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugGenderInteractions(){
  return window.external.DrugGenderInteractions;
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDrugProblemInteractions(){
  return window.external.DrugProblemInteractions;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetDirectives(){
  return JSON.parse(window.external.Directives);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetDocuments(){
  return window.external.Documents;
};

/*=========================================================================
* Output: unknown - Error: Object Ref not set to Inst of an Object
* Tested: true
*========================================================================*/
function GetEntitlementTokenOrgId(){
  return window.external.EntitlementTokenOrgId;
};

/*=========================================================================
* Output: unknown - Error: Object Ref not set to Inst of an Object
* Tested: true
*========================================================================*/
function GetEntitlementTokenUserId(){
  return window.external.EntitlementTokenUserId;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetFamilyHealthHistories(){
  return JSON.parse(window.external.FamilyHealthHistories);
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetFlags(){
  return JSON.parse(window.external.Flags);
};

/*=========================================================================
* Output: number
* Tested: true
*========================================================================*/
function GetFormId(){
  return window.external.FormId;
};

/*=========================================================================
* Output: Array
* Tested: true
*========================================================================*/
function GetErxUnitOfMeasureData(){
  return window.external.GetErxUnitOfMeasureData;
};

/*=========================================================================
* Output: https://accessgudid.nlm.nih.gov/api/v1/devices/lookup.json
* Tested: true
*========================================================================*/
function GetImplantableDeviceLookupSiteUrl(){
  return window.external.GetImplantableDeviceLookupSiteUrl;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetImmunizations(){
  return JSON.parse(window.external.Immunizations);
};

/*=========================================================================
* Output: unknown - []
* Tested: true
*========================================================================*/
function GetImplantableDevices(){
  return window.external.ImplantableDevices;
};

/*=========================================================================
* Output: unknown - []
* Tested: true
*========================================================================*/
function GetInteractionOverrides(){
  return window.external.InteractionOverrides;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetInteractionsDetails(){
  return JSON.parse(window.external.InteractionsDetails);
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetIsDebugMode(){
  return window.external.IsDebugMode;
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetIsInCemrMode(){
  return window.external.IsInCemrMode;
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetIsInstrumentationEnabled(){
  return window.external.IsInstrumentationEnabled;
};

/*=========================================================================
* Output: unknown - []
* Tested: true
*========================================================================*/
function GetMedicationAdministrationRequests(){
  return window.external.MedicationAdministrationRequests;
};

/*=========================================================================
* Output: unknown - []
* Tested: true
*========================================================================*/
function GetMedicationAdministrations(){
  return window.external.MedicationAdministrations;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetMedications(){
  return JSON.parse(window.external.Medications);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetNotificationClientId(){
  return window.external.NotificationClientId;
};

/*=========================================================================
* Output: 70196a73-212a-4332-b981-b4384a0cc3e7 - ActiveXObject(ObjectName).SetPasscode
* Tested: true
*========================================================================*/
function GetPasscode(){
  return window.external.Passcode;
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetPrescriptions(){
  return JSON.parse(window.external.Prescriptions);
};

/*=========================================================================
* Output: JSON
* Tested: true
*========================================================================*/
function GetProblems(){
  return JSON.parse(window.external.Problems);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetSigValue(){
  return window.external.SigValue;
};


/*=========================================================================
*     **** EXTERNAL FUNCTIONS ****
*========================================================================*/

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function AddImplantableDevice(serializedData){
  window.external.AddImplantableDevice(serializedData);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function AddErxRefillData(newRefillData){
  window.external.AddErxRefillData(newRefillData);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function ArchiveEpcsMedications(meds, requestId){
  window.external.ArchiveEpcsMedications(meds, requestId);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function CancelTrace(workflowDescription){
  window.external.CancelTrace(workflowDescription);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function CancelTwoFactorAuthentication(){
  window.external.CancelTwoFactorAuthentication();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function CanDoTwoFactorAuthentication(){
  return window.external.CanDoTwoFactorAuthentication();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function CanUserSignDocType(){
  return window.external.CanUserSignDocType();
};

/*=========================================================================
* CheckCurrentUserPermission("ACCESS Activity Log");
* Output: boolean
* Tested: true
*========================================================================*/
function CheckCurrentUserPermission(permission){
  return window.external.CheckCurrentUserPermission(permission);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function CheckPendingRxForClinicalMessages(){
  return window.external.CheckPendingRxForClinicalMessages();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function CheckUserPermission(permissionTypeId, pvid){
  return window.external.CheckUserPermission(permissionTypeId, pvid);
};

/*=========================================================================
* Strips off common suffixes
* var commonSuffixes = " DO DPM FNP FNP-C LNP LPN MD MLT MSN NP OD PA PA-C RN RPA-C RTR M.D. ARNP JR SR I II III MA MS APRN ";
* CleanNamePartForArchive("SR MD DO Frank the Tank JR", commonSuffixes)
* Output: string
* Tested: true
*========================================================================*/
function CleanNamePartForArchive(cleanName, commonSuffixes){
  return window.external.CleanNamePartForArchive(cleanName, commonSuffixes);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function ClearAllNotificationCallbacks(){
  window.external.ClearAllNotificationCallbacks();
};

/*=========================================================================
* foo-controller.js
* Output: unknown
* Tested: false
*========================================================================*/
function CloudCommandResponseCallback(){
  window.external.CloudCommandResponseCallback();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function DeleteCurrentUserPreference(summaryPreferenceKey){
  window.external.DeleteCurrentUserPreference(summaryPreferenceKey);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function DeleteErxRefillRequest(pvid){
  window.external.DeleteErxRefillRequest(pvid);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function DoMandatoryDrugInteractionOverridesForSign(){
  window.external.DoMandatoryDrugInteractionOverridesForSign();
};

/*=========================================================================
* EvaluateHTMLQuickText(".test");
* Output: string, from quick text symbol used
* Tested: true
*========================================================================*/
function EvaluateHTMLQuickText(str){
  if (typeof window.external.EvaluateHTMLQuickText == undefined || str == null || str == undefined || str == "") {
    return "";
  } else {
    return window.external.EvaluateHTMLQuickText(str);
  };
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function EvaluateMedInstructionsSig(ddid, medicationName, medicationGPI, instructionSig, callback){
  window.external.EvaluateMedInstructionsSig(ddid, medicationName, medicationGPI, instructionSig, callback);
};

/*=========================================================================
* Output: number
* Tested: true
*========================================================================*/
function FetchCurrentPubTime(){
  return window.external.FetchCurrentPubTime();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function FreeHtmlFormLock(){
  return window.external.FreeHtmlFormLock();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function FreeHtmlFormPatientLock(){
  window.external.FreeHtmlFormPatientLock();
};

/*=========================================================================
* NEEDS TESTING
* Output: unknown - System Error
* Tested: true
*========================================================================*/
function GetActiveUserList(){
  return JSON.parse(window.external.GetActiveUserList());
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetBarcodeFromImage(image){
  return window.external.GetBarcodeFromImage(image);
};

/*=========================================================================
* GetBasicFormularyStateAndStatus(213);
* Output: JSON
* Tested: true
*========================================================================*/
function GetBasicFormularyStateAndStatus(ddid){
  return window.external.GetBasicFormularyStateAndStatus(ddid);
};

/*=========================================================================
* GetBasicProviderInfo(pvid);
* Output: JSON
* Tested: true
*========================================================================*/
function GetBasicProviderInfo(pvid){
  return window.external.GetBasicProviderInfo(pvid);
};

/*=========================================================================
* GetCarePlan(pid,true,true);
* Output: JSON
* Tested: true
*========================================================================*/
function GetCarePlan(pid, onlySigned, onlyActive){
  return window.external.GetCarePlan(pid, onlySigned, onlyActive);
};

/*=========================================================================
* GetChartData(patient.pid, true, true, true, true, true);
* Replaces getPatient() //data gathered by window.external.Demographics
* Output: JSON
* Tested: true
*========================================================================*/
function GetChartData(pid, incActiveChartDoc, incFlagsAndCareAlerts, incMedAdminReq, incImmunizationList, incFamilyHealthHistoryList){
  return window.external.GetChartData(pid, incActiveChartDoc, incFlagsAndCareAlerts, incMedAdminReq, incImmunizationList, incFamilyHealthHistoryList);
};

/*=========================================================================
* GetChartValue("DOCUMENT.INITRUN" + window.external.FormId);
* Output: JSON
* Tested: true
*========================================================================*/
function GetChartValue(chartVariableName){
  window.alert(chartVariableName)
  var result = window.external.GetChartValue(chartVariableName);
  window.alert(result)
  return decodeFromGetChartValue(result);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetCurrentUserPreference(preferenceKey){
  return window.external.GetCurrentUserPreference(preferenceKey);
};

/*=========================================================================
* GetDetailedFormularyInfo(213,-1);
* Note: Pass -1 for rxformularystatus to retrieve it if not known
* Output: JSON
* Tested: true
*========================================================================*/
function GetDetailedFormularyInfo(ddid, rxformularystatus){
  return window.external.GetDetailedFormularyInfo(ddid, rxformularystatus);
};

/*=========================================================================
* Output: unknown
* Tested: true
*========================================================================*/
function GetEntitlementTokenCallback(){
  var result;
  window.external.GetEntitlementTokenCallback(function(response){result = response});
  return result;
};

/*=========================================================================
* GetERXEligibilityInfo(patient.pid);
* Output: JSON
* Tested: true
*========================================================================*/
function GetERXEligibilityInfo(pid){
  return window.external.GetERXEligibilityInfo(pid);
};

/*=========================================================================
* 1e18 is a number literal using E-notation 1 × 1018 (i.e. 1,000,000,000,000,000,000)
* Output: number
* Tested: true
*========================================================================*/
function GetExpirationId(){
  return 1e18;
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetFeatureSwitchEnabled(featureName){
  return window.external.GetFeatureSwitchEnabled(featureName);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetFilteredErxUnitOfMeasureDataCSV(ddid){
  return window.external.GetFilteredErxUnitOfMeasureDataCSV(ddid);
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetHtmlFormLock(){
  return window.external.GetHtmlFormLock();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetHtmlFormPatientLock(){
  return window.external.GetHtmlFormPatientLock();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetImplantableDevice(clinicalItemId){
  return window.external.GetImplantableDevice(clinicalItemId);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetIncidentReports(startDate, endDate){
  return window.external.GetIncidentReports(startDate, endDate);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetJwtTokenForAadResource(resource){
  return window.external.GetJwtTokenForAadResource(resource);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetLastReceivedUdiValue(){
  return window.external.GetLastReceivedUdiValue();
};

/*=========================================================================
* Output: DO DPM FNP FNP-C LNP LPN MD MLT MSN NP OD PA PA-C RN RPA-C RTR M.D.
  ARNP JR SR I II III MA MS APRN D.O. FAAP F.A.A.P. P.T. D.P.M. P.A. N.P. O.D.
  CPNP C.P.N.P. CDN CDE C.D.N. C.D.E.
* Tested: true
*========================================================================*/
function GetMandatorySuffixes(){
  return window.external.GetMandatorySuffixes();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function GetMedicationClinicalListLock(){
  return window.external.GetMedicationClinicalListLock();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetMedicationClinicalListLockAndCallback(callback){
  return window.external.GetMedicationClinicalListLockAndCallback(callback);
};

/*=========================================================================
* GetPharmaciesForPatient(pid, 10);
* Output: JSON
* Tested: true
*========================================================================*/
function GetPharmaciesForPatient(pid, num){
  return window.external.GetPharmaciesForPatient(pid, num);
};

/*=========================================================================
* GetPrescriptionRefillData(pid);
* Output: JSON
* Tested: true
*========================================================================*/
function GetPrescriptionRefillData(pid){
  return window.external.GetPrescriptionRefillData(pid);
};

/*=========================================================================
* var patientPrescriptionInfos = [{"patientid": pid,"medicationId": 1234,"drugDescriptionId": 1234,"prescriptionId": 1234}];
* Output: unknown
* Tested: false
*========================================================================*/
function GetPrescriptionRefillDataByList(patientPrescriptionInfos){
  return window.external.GetPrescriptionRefillDataByList(patientPrescriptionInfos);
};

/*=========================================================================
* GetRecentPharmaciesForPatient(ppid,10);
* Output: JSON
* Tested: true
*========================================================================*/
function GetRecentPharmaciesForPatient(pid, num){
  return window.external.GetRecentPharmaciesForPatient(pid, num);
};

/*=========================================================================
* GetUserDeas(pvid);
* Output: JSON
* Tested: true
*========================================================================*/
function GetUserDeas(pvid){
  return window.external.GetUserDeas(pvid);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function GetVisitSummaryCcda(pid, documentId, pvid, visitSummaryText){
  return window.external.GetVisitSummaryCcda(pid, documentId, pvid, visitSummaryText);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function IncomingAndPendingInteralRenewalRequests(pvid){
  window.external.IncomingAndPendingInteralRenewalRequests(pvid);
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function IsFaxAvailable(){
  return window.external.IsFaxAvailable();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function IsEpcsEnabled(){
  return window.external.IsEpcsEnabled();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function IsNonCSAuthenticationRequired(){
  return window.external.IsNonCSAuthenticationRequired();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function IsPMPConfigured(){
  return window.external.IsPMPConfigured();
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function IsPMPRolePresent(){
  return window.external.IsPMPRolePresent();
};

/*=========================================================================
* Launches the legacy select patient dialog. Result is stored in lastSelectPatientResult.
* Output: unknown
* Tested: false - (centricityemr-service-1.1.js)
*========================================================================*/
function LegacyFindMedication(callback, medDescription, printReqHandouts){
  window.external.LegacyFindMedication(callback, medDescription, printReqHandouts);
};

/*=========================================================================
* Launches the legacy select patient dialog. Result is stored in lastSelectPatientResult.
* Output: unknown
* Tested: false - (centricityemr-service-1.1.js)
*========================================================================*/
function LegacySelectPatient(callback){
  window.external.LegacySelectPatient(callback);
};

/*=========================================================================
* Launches the legacy select pharmacy dialog. Result is stored in lastSelectPharmacyResult.
* Output: unknown
* Tested: false - (centricityemr-service-1.1.js)
*========================================================================*/
function LegacySelectPharmacy(scope, callback){
  window.external.LegacySelectPharmacy(scope, callback);
};

/*=========================================================================
* Launches the legacy select user dialog. Result is stored in lastSelectUserResult.
* Output: unknown
* Tested: false - (centricityemr-service-1.1.js)
*========================================================================*/
function LegacySelectUser(callback){
  window.external.LegacySelectUser(callback);
};

/*=========================================================================
* NOTE: LOOK INTO THIS FOR SWITCHING DOC TYPE?
* Output: unknown
* Tested: false
*========================================================================*/
function LegacySelectUserGroup(callback){
  window.external.LegacySelectUserGroup(callback);
};

/*=========================================================================
* Launches CPS system error window with text submitted
* LogError("hello", true);
* Output: N/A
* Tested: true
*========================================================================*/
function LogError(errMsg, showExceptionHandlerDialog){
  try{
    window.external.LogError(errMsg, showExceptionHandlerDialog);
  }catch(err){
    // swallow exception from trying to log an error so we don't get in an
    // infinite recursion
  };
};

/*=========================================================================
* Output: boolean
* Tested: true
*========================================================================*/
function NoOtherExistingClinicalListLock(){
  return window.external.NoOtherExistingClinicalListLock();
};

/*=========================================================================
* Launches Renewal form
* Output: N/A
* Tested: true
*========================================================================*/
function OpenRenewals(pvid, pid){
  window.external.OpenRenewals(pvid, pid);
};

/*=========================================================================
* Launches Patient chart
* Output: N/A
* Tested: true
*========================================================================*/
function OpenChart(pid){
  window.external.OpenChart(pid);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function PauseTrace(workflowDescription){
  window.external.PauseTrace(workflowDescription);
};

/*=========================================================================
* Output: unknown - Authentication for your request has failed. Please check
  your credentials and retry.
* Tested: false
*========================================================================*/
function PMPGetReport(currentPatientId, buttonState){
  window.external.PMPGetReport(currentPatientId, buttonState);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function PostOnAbort(){
  window.external.PostOnAbort();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function PostOnCancel(){
  window.external.PostOnCancel();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function PostOnOk(){
  window.external.PostOnOk();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function PostOnRetry(){
  window.external.PostOnRetry();
};

/*=========================================================================
* PreviousAndNextAppointmentListForPatient(pid,10,10);
* Output: unknown
* Tested: true
*========================================================================*/
function PreviousAndNextAppointmentListForPatient(pid, numOfPrevApt, numOfNextApt){
  window.external.PreviousAndNextAppointmentListForPatient(pid, numOfPrevApt, numOfNextApt);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterCallbackAndDoTwoFactorAuthentication(emrAuthorizaitonRequirement, callback){
  window.external.RegisterCallbackAndDoTwoFactorAuthentication(emrAuthorizaitonRequirement, callback);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterClientNotification(notification){
  window.external.RegisterClientNotification(notification);
};

/*=========================================================================
* foo-controller.js
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterCloudNotificationCallback(){
  window.external.RegisterCloudNotificationCallback();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterHtmlDialogClosedCallback(callback){
  window.external.RegisterHtmlDialogClosedCallback(callback);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RecordViewedInstructionId(prescriptionID, rxRequestID, rxInstructionID){
  window.external.RecordViewedInstructionId(prescriptionID, rxRequestID, rxInstructionID);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterMedicationClinicalMessageCallback(callback){
  window.external.RegisterMedicationClinicalMessageCallback(callback);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterNotificationCallback(notifications, callback){
  window.external.RegisterNotificationCallback(notifications, callback);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RegisterOkToCloseCallback(callback){
  window.external.RegisterOkToCloseCallback(callback);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function ResumeTrace(workflowDescription){
  window.external.ResumeTrace(workflowDescription);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function RemoveImplantableDevice(removeImplantData){
  window.external.RemoveImplantableDevice(removeImplantData);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function S(){
  window.external.s();
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SaveCareRequest(request){
  window.external.SaveCareRequest(JSON.stringify(request));
};

/*=========================================================================
* SetChartValue("DOCUMENT.INITRUN" + window.external.FormId, "Hello")
* NOTE: SetChartValue(): 1 Million+ CHAR Working;
* NOTE: SetTextTranslation() (WORKS BETTER): 1 Million+ CHAR Working;
* Output: N/A
* Tested: true
*========================================================================*/
function SetChartValue(chartVariableName, value){
  var variableValue = encodeForSetChartValue(value);
  if (variableValue.length <= 4000) {
    window.external.SetChartValue(chartVariableName, variableValue);
  } else {
    window.alert("Value length exceeds limit of 4000 characters.", true);
  }
  window.external.SetChartValue(chartVariableName, value);
};

/*=========================================================================
* SetTextTranslation("<h1>Hello</h1>", "html");
* NOTE: SetChartValue(): 1 Million+ CHAR Working;
* NOTE: SetTextTranslation() (WORKS BETTER): 1 Million+ CHAR Working;
* Output: Chart Notes
* Tested: true
*========================================================================*/
function SetTextTranslation(text, isHtml){
  var isHtmlText = isHtml ? "html" : "text";
  window.external.SetTextTranslation(text, isHtmlText);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetCurrentUserPreference(summaryPreferenceKey, serializedData){
  window.external.SetCurrentUserPreference(summaryPreferenceKey, serializedData);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetDisableRefreshCallbacks(bool){
  window.external.SetDisableRefreshCallbacks(bool);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetEncounterFormInputBindingsEnabled(enabled){
  window.external.SetEncounterFormInputBindingsEnabled(enabled);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetEncounterFormIsNavPaneExpanded(isExpanded){
  window.external.SetEncounterFormIsNavPaneExpanded(isExpanded);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetEncounterFormWindowState(windowState){
  window.external.SetEncounterFormWindowState(windowState);
};

/*=========================================================================
* Launches Help documantation ID# for TOC Viewer
* Output: N/A
* Tested: false
*========================================================================*/
function SetHelpContextId(contextId){
  window.external.SetHelpContextId(contextId);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SetReviewedElectronicRxSignTime(pubTimeTicks, deaNumber, spi){
  window.external.SetReviewedElectronicRxSignTime(pubTimeTicks, deaNumber, spi);
};

/*=========================================================================
* Launches Error Message Box with text, window.alert works also
* Output: Error Message
* Tested: true
*========================================================================*/
function ShowErrorMessageBox(errMsg, title){
  window.external.ShowErrorMessageBox(errMsg, title);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function SignAndSendPrescriptions(pubTimeTicks, deaNumber, spi, callback, isPrintOptionsClicked, isTwoFactorAuthentication){
  window.external.SignAndSendPrescriptions(pubTimeTicks, deaNumber, spi, callback, isPrintOptionsClicked, isTwoFactorAuthentication);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function StartTrace(workflowCategory, workflowDescription){
  window.external.StartTrace(workflowCategory, workflowDescription);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function StopTrace(workflowDescription){
  window.external.StopTrace(workflowDescription);
};

/*=========================================================================
* var sqlQuery = "DELETE FROM dbo.ErxRefillRequest WHERE ErxNetworkRequestId = '" + testErxNetworkRequestId + "'";
* var sqlQuery = "DELETE FROM dbo.MEDICATE WHERE SDID = " + activeSdid;
* window.external.TestOnlyIntegrationSQLQuery(sqlQuery, 0);
* Output: unknown
* Tested: false - Only for when debug mode is on
*========================================================================*/
function TestOnlyIntegrationSQLQuery(sqlQuery, num){
  window.external.TestOnlyIntegrationSQLQuery(sqlQuery, num);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function UnmatchedRenewalRequests(pvid){
  window.external.UnmatchedRenewalRequests(pvid);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function UpdateImplantableDevice(serializedData){
  window.external.UpdateImplantableDevice(serializedData);
};

/*=========================================================================
* Output: unknown
* Tested: false
*========================================================================*/
function UpdateMatchedPatient(patientInfo){
  window.external.UpdateMatchedPatient(patientInfo);
};

/*=========================================================================
* Launches Pharmacy Benifit Eligibitity form
* Output: unknown
* Tested: false
*========================================================================*/
function ViewEligibilityDlg(pid, pvid){
  window.external.ViewEligibilityDlg(pid, pvid);
};


/**************************************************************************
*     **** Testing Functions ****
**************************************************************************/
// window.external.CloseWindow; ??nothing / error
// window.external.PrintGrowthChart(0); ??error / nothing

/*=========================================================================
* Output: number
* Tested: true
*========================================================================*/
function GetPatientId(){
  return JSON.parse(window.external.Demographics).patientKey;
};

/*=========================================================================
* Output: number
* Tested: true
*========================================================================*/
function GetProviderId(){
  return JSON.parse(window.external.CurrentUserInfo).PVID;
};
