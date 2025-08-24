// enum -> Represents a set of named constants. no duplicate data.

// numeric enum
enum RequestType {
    Red,
    Yellow,
    green
};

console.log(RequestType);

// string enum
enum RequestTypeStr {
    readData = 'READ_DATA',
    saveData = 'SAVE_DATA',
    deleteData = 'DELETE_DATA'
};

console.log(RequestTypeStr);
console.log(RequestTypeStr.readData);
console.log(RequestTypeStr["saveData"]);

// heterogeneous enum
enum UserDetails {
    name = 'Rahman',
    age = 18,
};

console.log(UserDetails);
console.log(UserDetails.name);
console.log(UserDetails['age']);