regex=/^[A-Za-z]*[/][A-Za-z]*[/][A-Za-z]*$/;
function string(str){
    return regex.test(str);
}
let str="dposds/fsfsj/ewuwe"
if (string(str)) {
    console.log("Hợp lệ");
}else {
    console.log("không hợp lệ");
}
console.log(str.length);