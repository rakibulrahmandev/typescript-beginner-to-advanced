// enum -> Represents a set of named constants. no duplicate data.
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["Red"] = 0] = "Red";
    RequestType[RequestType["Yellow"] = 1] = "Yellow";
    RequestType[RequestType["green"] = 2] = "green";
})(RequestType || (RequestType = {}));
;
console.log(RequestType);
// string enum
var RequestTypeStr;
(function (RequestTypeStr) {
    RequestTypeStr["readData"] = "READ_DATA";
    RequestTypeStr["saveData"] = "SAVE_DATA";
    RequestTypeStr["deleteData"] = "DELETE_DATA";
})(RequestTypeStr || (RequestTypeStr = {}));
;
console.log(RequestTypeStr);
console.log(RequestTypeStr.readData);
console.log(RequestTypeStr["saveData"]);
// heterogeneous enum
var UserDetails;
(function (UserDetails) {
    UserDetails["name"] = "Rahman";
    UserDetails[UserDetails["age"] = 18] = "age";
})(UserDetails || (UserDetails = {}));
;
console.log(UserDetails);
console.log(UserDetails.name);
console.log(UserDetails['age']);
