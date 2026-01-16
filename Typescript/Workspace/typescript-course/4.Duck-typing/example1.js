var complexType = {
    name: "myName",
    id: 1
};
//No problem in missing properties or changing propery values
complexType = {
    id: 2,
    name: "anotherName"
};

complexType = {
    id: 3
};

console.log(complexType);