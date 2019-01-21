var winning = function (cond, turn) {
    if (turn === 9 && (win(cond) === 2 || draw(cond))) {
        return true
    } else if(turn === 9 && win(cond) === 1){
        return false
    } else {
        var index = 0;
        var situation_is_good = true;
        while (situation_is_good) {
            if (cond.indexOf(0, index) !== -1) {
                // ищем пустые клетки
                var i1 = cond.indexOf(0, index);
                // вставляем в них крестик или нолик в зависимости от того чей ход
                if (turn % 2 === 1) {
                    cond[i1] = 2
                } else {
                    cond[i1] = 1
                }
                // если проверяемый ход выигрышный, то выводим его, иначе вовращаем таблицу в исходное состояние
                if (winning(cond, turn + 1) || win(cond) === 2) {
                    return [true, turn, i1]
                } else {cond[i1] = 0}
            } else {
                situation_is_good = false
            }
        }
    }
};

