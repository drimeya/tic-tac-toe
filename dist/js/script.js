document.addEventListener('DOMContentLoaded', function () {
    function start (){
        let i = 0;
        function question(num, numName) {
            const pageParent = document.querySelector('.main'),
                  startPage = document.createElement('div');
            startPage.classList.add('start');
            startPage.innerHTML = `
            <div class="promt ${'promt' + num}"> Введите имя ${numName} игрока:</div>
            <input  class='input ${'input' + num}' type="text">
            `;
            pageParent.append(startPage);
        }
        
        function enterName (player) {
            const playerNum = document.querySelector(player);
            const input = document.querySelector('.input');
    
            input.addEventListener('change', () => {
                playerNum.innerHTML = input.value;
                document.querySelector('.start').remove();

                i++;
                if (i === 1) {
                    question(2, 'второго');
                    enterName('.player-r');
                }
            });
        }
        question('', 'первого');
        enterName('.player-l');
    }
    start();

    const squares = document.querySelectorAll('.square');

    function appendX(item) {
        const X = document.createElement('div');
        X.classList.add('x');
        item.append(X);
        item.classList.add('square-freezed');
    }

    function appendO(item) {
        const O = document.createElement('div');
        O.classList.add('o');
        item.append(O);
        item.classList.add('square-freezed');
    }
    let n = 0;
        squares.forEach((item)=>{
            item.addEventListener('click', () => {
                if (n % 2 === 1) {
                    n++;
                    appendO(item);
                    squares.forEach((i)=>{
                        i.classList.remove('square-r');
                    });
                } else if (item.classList.contains('square-freezed')){
                    console.log('занято');
                } else if (n === 0 || n % 2 === 0){
                    n++;
                    console.log(1);
                    appendX(item);
                    squares.forEach((i)=>{
                        i.classList.add('square-r');
                    });
                }
            });
        });
});
