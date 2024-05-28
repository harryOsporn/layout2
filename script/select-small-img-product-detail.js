var productImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img"); //array

smallImg[0].onClick = function() {
    productIm.src = smallImg[0].src;
}
smallImg[1].onClick = function() {
    productIm.src = smallImg[1].src;
}
smallImg[2].onClick = function() {
    productIm.src = smallImg[2].src;
}
smallImg[3].onClick = function() {
    productIm.src = smallImg[3].src;
}