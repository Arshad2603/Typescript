var complexType = {
    name: "myName",
    id: 1,
};
var sundi = {
    id: 2,
    name: "anotherName",
    address : "myAddress"
};
sundi = {
    name: "newName",
    id: 4,
    address: "newAddress",
}
complexType = {
    name: "nameOnly",
    id: 0,
};

complexType = {
    name: "thirdName",
    id: 3
};

console.log(complexType);

//overall once an object is initialized we can only assign objects that  have the same properties. This is called duck typing. If it looks like a duck and quacks like a duck, then it must be a duck.
//If we try to append or miss properties that are not defined in the original object, we will get an error.