// нумерация такова :
// 0 1 2
// 3 4 5
// 6 7 8
var win = function(conditions){
    if((conditions[0] === conditions[1]) && (conditions[1] === conditions[2]) &&  (conditions[0] !== 0)){return true}
    if((conditions[3] === conditions[4]) && (conditions[4] === conditions[5]) &&  (conditions[3] !== 0)){return true}
    if((conditions[6] === conditions[7]) && (conditions[7] === conditions[8]) &&  (conditions[6] !== 0)){return true}
    if((conditions[0] === conditions[3]) && (conditions[3] === conditions[6]) &&  (conditions[0] !== 0)){return true}
    if((conditions[1] === conditions[4]) && (conditions[4] === conditions[7]) &&  (conditions[1] !== 0)){return true}
    if((conditions[2] === conditions[5]) && (conditions[5] === conditions[8]) &&  (conditions[2] !== 0)){return true}
    if((conditions[0] === conditions[4]) && (conditions[4] === conditions[8]) &&  (conditions[0] !== 0)){return true}
    if((conditions[2] === conditions[4]) && (conditions[4] === conditions[6]) &&  (conditions[2] !== 0)){return true}
};
var addThumbnailClickHandler = function (thumbnail, n) {
    thumbnail.addEventListener('click', function () {
        console.log(n + ' сработал');
        if (step === 1 && condition[n] === 0){
            crosses[2*n].classList.remove("show-none");
            crosses[2*n + 1].classList.remove("show-none");
            condition[n] = 1;
            if (win(condition)){console.log(step + " выиграл!");
                var banner1 = document.querySelector('.banner_1');
                banner1.classList.remove("show-none");
            }
            step ++
        }
        else if (condition[n] === 0){
            nots[n].classList.remove("show-none");
            condition[n] = 2;
            if (win(condition)){console.log(step + " выиграл!");
                var banner2 = document.querySelector('.banner_2');
                banner2.classList.remove("show-none");
            }
            step -= 1
        }
    });
};
var condition = [0,0,0,0,0,0,0,0,0];
// 0 - ничего 1- крест 2- нолик
var step = 1;
var thumbnails = document.querySelectorAll('td');
var crosses = document.querySelectorAll('.part-cross');
var nots = document.querySelectorAll('.circle');


for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], i);
}
