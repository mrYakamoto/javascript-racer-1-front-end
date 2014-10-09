var Player = function(playerNum, key) {
    this.playerNum = playerNum;
    this.key = key;

    this.cells = null;

    this.initialize();
};

Player.prototype.initialize = function() {
    this.locateCells();

    this.attachEventHandler();
};

Player.prototype.locateCells = function() {
    // note that children is not supported in older IE; use childNodes and filter out text nodes
    //  instead, if old IE support is required
    this.cells = document.getElementById('player' + this.playerNum + '-strip').children;
};

Player.prototype.attachEventHandler = function() {
    var that = this;

    document.addEventListener('keyup', function(evt) {
        if (evt.keyCode === that.key)
            that.moveVehicle();
    });
};

Player.prototype.findActiveCell = function() {
    for (var i = 0; i < this.cells.length; i++) {
        // we use indexOf just in case the element has multiple classes
        if (this.cells[i].className.indexOf('active') > -1)
            return i;
    }
};

Player.prototype.findNextCell = function() {
    var nextCellIndex = this.findActiveCell() + 1;

    // if the next cell exists, return its index; otherwise, return null
    return this.cells[nextCellIndex] ? nextCellIndex : null;
};

Player.prototype.moveVehicle = function() {
    var activeCellIndex = this.findActiveCell(),
        newCellIndex = this.findNextCell();

    this.cells[activeCellIndex].className = '';

    if (newCellIndex)
        // use concatenation just in case the element has existing classes
        this.cells[newCellIndex].className += 'active';
    else {
        alert('Player ' + this.playerNum + ' wins!');

        window.location.reload();
    }
};

var player1 = new Player(1, 81);
var player2 = new Player(2, 80);