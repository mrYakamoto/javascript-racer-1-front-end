var Player = function(playerNum, key) {
    this.playerNum = playerNum;
    this.key = key;

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

    console.log(this.cells);
};

Player.prototype.attachEventHandler = function() {
    var that = this;

    document.addEventListener('keyup', function(evt) {
        if (evt.keyCode === that.key)
            that.moveVehicle();
    });
};

Player.prototype.calculateNextCell = function() {
    for (var i = 0; i < this.cells.length; i++) {
        if (this.cells[i].className.indexOf('active') > -1)
            return i + 1;
    }
};

Player.prototype.moveVehicle = function() {
    var newCellIndex = this.calculateNextCell();

    if (this.cells[newCellIndex])
        this.cells[newCellIndex].className = 'active';
};

var player1 = new Player(1, 81);