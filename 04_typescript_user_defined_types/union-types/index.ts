let userId: number | string;

userId = 12; // no error
userId = "102"; // no error

console.log(userId);

function printUserId(userId: number | string): void {
    console.log(userId);
};

printUserId(userId);