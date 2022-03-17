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
    

    const squares = document.querySelectorAll('.square'),
          message = document.querySelector(".message");

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
                if (item.classList.contains('square-freezed')){
                    showMessage('Занято!');
                } else if (n % 2 === 1) {
                    n++;
                    appendO(item);
                    item.classList.add('o');
                    message.classList.add("disappear");
                    winnerCheck('o');
                    squares.forEach((i)=>{
                        i.classList.remove('square-r');
                    });
                } else if (n === 0 || n % 2 === 0){
                    n++;
                    console.log(1);
                    appendX(item);
                    item.classList.add('x');
                    message.classList.add("disappear");
                    winnerCheck('x');
                    squares.forEach((i)=>{
                        i.classList.add('square-r');
                    });
                }
            });
        });

    const sq1 = document.querySelector('.sq1'),
        sq2 = document.querySelector('.sq2'),
        sq3 = document.querySelector('.sq3'),
        sq4 = document.querySelector('.sq4'),
        sq5 = document.querySelector('.sq5'),
        sq6 = document.querySelector('.sq6'),
        sq7 = document.querySelector('.sq7'),
        sq8 = document.querySelector('.sq8'),
        sq9 = document.querySelector('.sq9');
    
    function squareCheck (item, icon) {
        return item.classList.contains(icon);
    }

    function winnerCheck (icon) {
        if ( (squareCheck(sq1, icon) && squareCheck(sq2, icon) && squareCheck(sq3, icon)) || (squareCheck(sq4, icon) && squareCheck(sq5, icon) && squareCheck(sq6, icon)) || (squareCheck(sq7, icon) && squareCheck(sq8, icon) && squareCheck(sq9, icon)) || (squareCheck(sq1, icon) && squareCheck(sq4, icon) && squareCheck(sq7, icon)) || (squareCheck(sq2, icon) && squareCheck(sq5, icon) && squareCheck(sq8, icon)) || (squareCheck(sq3, icon) && squareCheck(sq6, icon) && squareCheck(sq9, icon)) || (squareCheck(sq1, icon) && squareCheck(sq5, icon) && squareCheck(sq9, icon)) || (squareCheck(sq3, icon) && squareCheck(sq5, icon) && squareCheck(sq7, icon))) {
            console.log('победа');

            if (icon === 'x') {
                const winner = document.querySelector('.player-l').innerHTML;
                showMessage(`Победил игрок ${winner}!`);
                squares.forEach(item => {
                    
                });
            } else {
                const winner = document.querySelector('.player-r').innerHTML;
                showMessage(`Победил игрок ${winner}!`);
            }
            
        }
    }
    function showMessage (mess) {
        message.innerHTML = mess;
        message.classList.remove("disappear"); 
    }
});
