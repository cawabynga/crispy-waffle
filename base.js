var ii = 0;
var win = function(conditions){
    var a1 = (conditions[0] && conditions[1] && conditions[2] != 0);
    var a2 = (conditions[3] && conditions[4] && conditions[5] != 0);
    var a3 = (conditions[6] && conditions[7] && conditions[8] != 0);
    var a4 = (conditions[0] && conditions[3] && conditions[6] != 0);
    var a5 = (conditions[1] && conditions[4] && conditions[7] != 0);
    var a6 = (conditions[2] && conditions[5] && conditions[8] != 0);
    var a7 = (conditions[0] && conditions[4] && conditions[8] != 0);
    var a8 = (conditions[2] && conditions[4] && conditions[6] != 0);
    if (a1 || a2 || a3 || a4 || a5 || a6 || a7 || a8){
        console.log('Выигрыш')
        console.log(a1, a2, a3, a4, a5, a6, a7, a8)
        console.log(conditions)
    };
};
var addThumbnailClickHandler = function (thumbnail, n) {
    thumbnail.addEventListener('click', function () {
        console.log(n + ' сработал');
        if (step % 2 === 0 && condition[n] === 0){
            crosses[2*n].classList.remove("show-none");
            crosses[2*n + 1].classList.remove("show-none");
            condition[n] = 1;
            step ++
        }
        else if (condition[n] === 0){
            nots[n].classList.remove("show-none");
            condition[n] = 2;
            step ++
        }
        win(condition)
    });
};
var condition = [0,0,0,0,0,0,0,0,0];
// 0 - ничего 1- крест 2- нолик
var step = 0;
var thumbnails = document.querySelectorAll('td');
var crosses = document.querySelectorAll('.part-cross');
var nots = document.querySelectorAll('.circle');


for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], i);
}