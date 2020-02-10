var foundPharmacy = JSON.parse(tmp9)[0];
//var pharmacySymbol2 =  "DOCUMENT.TEMPHTML0_" + window.external.FormId;
var pharmacySymbol = 'DOCUMENT.' + window.external.FormId + "RxCurrentPharmacy";
var result = getChartValue("DOCUMENT." + window.external.FormId + "recentPharmacy");
var pharmacy = {id: foundPharmacy.pharmacyId,name: "Franks Crack House",address1: foundPharmacy.address1,address2: foundPharmacy.address2,city: foundPharmacy.city,state: foundPharmacy.state,zip: foundPharmacy.zip,phone: foundPharmacy.phone1,fax: "",prescribingMethodCode: foundPharmacy.prescribingMethodCode,pharmacyTypeCode: foundPharmacy.pharmacyTypeCode,erxServiceLevel: foundPharmacy.erxServiceLevel,rxmeds: [],renewalrequests: [],changerequests: []};
var savedPharmacy = JSON.stringify(pharmacy);
//window.external.setChartValue(pharmacySymbol, savedPharmacy);
//document.write(savedPharmacy + "<br>");
//window.external.ShowErrorMessageBox(pharmacySymbol, "asdasd");
//window.external.LogError('TESTING', false);
//window.external.legacySelectPharmacy(this.$scope, 'legacySelectPharmacyCallback = "succeeded"');

//document.write(JSON.stringify(window.external.LegacySelectPharmacy(133)));
//var sqlQuery = "SELECT * FROM dbo.Custom_ValleyMedical_Guarantor"
document.write(window.external.GetPharmaciesForPatient(JSON.parse(window.external.Demographics).patientKey,10));
var tmp9 = window.external.GetPharmaciesForPatient(1700475965036620,10)
var tmp10 = window.external.EvaluateMel("{LASTOBSVALUEUNIT('WEIGHT (KG)')}", false);
// *********** Testing for change current pharmacy ********************* //
// var pharmacySymbol = 'DOCUMENT.' + window.external.FormId + "RxCurrentPharmacy";
// var pharmacy = {
//     id: 999,
//     name: "Franks Cookin buissness",
//     address1: "No where",
//     address2: "Nunyah",
//     city: "Crackston",
//     state: "WA",
//     zip: "83501",
//     phone: "2087658901",
//     fax: '',
//     prescribingMethodCode: "E",
//     pharmacyTypeCode: "O",
//     erxServiceLevel: 3,
//     rxmeds: ?? - [],
//     renewalrequests: ?? - [],
//     changerequests: ?? - []
// };
// var savedPharmacy = JSON.stringify(pharmacy);
// window.external.setChartValue(pharmacySymbol, savedPharmacy);
//
//
// // emrapiaccess-service.js !!!!!!!!
// function setDocumentChartValue(symbolName, value) {
//     var pharmacySymbol = 'DOCUMENT.' + centricityEmrNativeFactory.getFormId() + symbolName;
//     // Writing of the chart value to database needs to occur outside of a digest cycle
//     _.defer(function () {
//         centricityEmrNativeFactory.setChartValue(pharmacySymbol, value);
//     };);
// };
//
// // patient-service.js !!!!!!
// var DOCUMENTCHARTSYMBOL = "RxCurrentPharmacy";
// $scope.pharmacyList;
// var pharmacy = {
//     id: foundPharmacy.Id,
//     name: foundPharmacy.Name,
//     address1: foundPharmacy.Address1,
//     address2: foundPharmacy.Address2,
//     city: foundPharmacy.City,
//     state: foundPharmacy.State,
//     zip: foundPharmacy.Zip,
//     phone: foundPharmacy.Phone1,
//     fax: '',
//     prescribingMethodCode: foundPharmacy.PrescribingMethod,
//     pharmacyTypeCode: foundPharmacy.PharmacyType,
//     erxServiceLevel: foundPharmacy.ErxServiceLevel,
//     rxmeds: ?? - [],
//     renewalrequests: ?? - [],
//     changerequests: ?? - []
// };
// $scope.pharmacyList.push(pharmacy);
//
// function setCurrentPharmacy(index) {
//   if (index < 0) {
//     return;
//   };
//   if (pharmacyList.length > 0 && index < pharmacyList.length) {
//     currentPharmacy = pharmacyList[index];
//     // Set the current pharmacy for the document
//     // Create a simple prescription object that does not include the rxmeds list (causes overflow in service call)
//     var pharmacyInfo = {
//       id: currentPharmacy.id,
//       name: currentPharmacy.name,
//       address1: currentPharmacy.address1,
//       address2: currentPharmacy.address1,
//       city: currentPharmacy.city,
//       state: currentPharmacy.state,
//       zip: currentPharmacy.zip,
//       phone: currentPharmacy.phone,
//       fax: currentPharmacy.fax,
//       prescribingMethodCode: currentPharmacy.prescribingMethodCode,
//       pharmacyTypeCode: currentPharmacy.pharmacyTypeCode,
//       erxServiceLevel: currentPharmacy.erxServiceLevel
//     };
//     var savedPharmacy = JSON.stringify(pharmacyInfo);
//     emrApiAccessService.setDocumentChartValue(DOCUMENTCHARTSYMBOL, savedPharmacy);
//   };
// };
