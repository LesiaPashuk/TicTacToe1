var area1 = document.getElementById("area1");
var area2 = document.getElementById("area2");
var area3 = document.getElementById("area3");
var area4 = document.getElementById("area4");
var area5 = document.getElementById("area5");
var area6 = document.getElementById("area6");
var area7 = document.getElementById("area7");
var area8 = document.getElementById("area8");
var area9 = document.getElementById("area9");

var arr = [area1, area2, area3, area4, area5, area6, area7, area8, area9];
var gameOver = false;

arr.forEach(function(area) {
    area.addEventListener("click", function() {
        if (area.innerHTML === "" && !gameOver) {
            AddCross(area);
            if (winCheck()) {
                setTimeout(function() {
                alert("You win!!!");
                gameOver = true;
                },2000);
            } else {
                setTimeout(function() {
                AddCircleRandom();
                if (winCheck()) {
                    setTimeout(function() {
                    alert("You lose!!!");

                    gameOver = true;
                    },2000);
                }
            }, 1000);
            }
        }
    });
});

function AddCross(element) {
    element.innerHTML = "<img src=\"https://www.pinclipart.com/picdir/big/100-1008816_png-file-cross-white-icon-png-clipart.png\" id=\"imgCross\">";
}

function AddCircleRandom() {
    var newArr = arr.filter(function(area) {
        return area.innerHTML === "";
    });
    if (newArr.length > 0) {
        var randomArea = randomaizer(newArr.length);
        newArr[randomArea].innerHTML = "<img src=\"https://www.pinclipart.com/picdir/big/9-99434_borders-and-frames-decorative-borders-picture-frames-fancy.png\" id=\"imgCircle\">";
    }
}

function randomaizer(max) {
    var rand = Math.floor(Math.random() * max);
    return rand;
}

function winCheck() {
    var winArr = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
        [0, 4, 8], [2, 4, 6] // Диагонали
    ];
    for (var i = 0; i < winArr.length; i++) {
        var [a, b, c] = winArr[i];
        if (arr[a].innerHTML !== "" && arr[a].innerHTML === arr[b].innerHTML && arr[a].innerHTML === arr[c].innerHTML) {
            return true;
        }
    }
    return false;
}
