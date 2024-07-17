
function isFrom(regNo, regLoc) {
    return regNo.startsWith(regLoc);
}

console.log(isFrom("CA 759 WC", "WC")); 
console.log(isFrom("CA 900 WC", "WC")); 
console.log(isFrom("L 324 WC", "WC")); 
console.log(isFrom("NL 585 N", "N")); 
console.log(isFrom("NL 676 N", "N")); 

