$('#valamiForm').validate();

const sugarElem=document.querySelector("#sugar");
const magassagElem=document.querySelector("#magassag");
const szamitGomb=document.querySelector("#szamitTerfogat");
const terfogatElem=document.querySelector("#terfogat");

szamitGomb.addEventListener('click',()=>{
    let sugar=Number(sugarElem.value);
    let magassag=Number(magassagElem.value);
    let terfogat = szamitTerfogat(sugar, magassag);
    console.log(terfogat)
    terfogatElem.value=terfogat;
    // console.log(sugarElem.value)
});

var szamitTerfogat = (sugar, magassag) => {
return 1.0/3.0 *
Math.pow(sugar, 2) *
Math.PI * magassag;
};

function szamitTerfogat2(){
}
