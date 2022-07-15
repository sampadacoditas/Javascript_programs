//object destructuring 
const band={
    bandName:"led zepplin",
    famousSong:'stairway to heavan',
    year:1968,
    anotherFamousSong:"Kashmir",
};
let {bandName,famousSong,...restprops}=band;
console.log(bandName);
console.log(restprops);