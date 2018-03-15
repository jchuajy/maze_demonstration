


window.onload = function() {


//creates maze


function createMaze(numberOfCols, numberOfRows) {
    //easy to reference total cells for cell check later
    var __totalCells = numberOfRows * numberOfCols
    __createCells = [];
    var cellConstruct = [];
    //create the requisite array structure
    for (var i = 0; i < numberOfRows; i++) {
        __createCells[i] = [];
        cellConstruct[i] = [];
    //top left cell with all 4 walls up is __createCells[0][0][0,0,0,0]
    //construct is simply to determine if cell has been checked before(false if it has been checked)
        for (var j = 0; j < numberOfCols; j++) {
            __createCells[i][j] = [0,0,0,0];
            cellConstruct[i][j] = true;
        }
    }

    //random start point (for more variations in maze structure)
    __currentCell = [0, 0];
    //first cell of solution path (where we start building from)
    var solution = [__currentCell];
    //mark the cell as checked
    cellConstruct[__currentCell[0]][__currentCell[1]] = false;
    //mark how many cells have been checked
    var cellsChecked = 1;

    //run through entire maze
    while (cellsChecked < __totalCells) {
        //find all cells around the current cell
        var checkAround = [[__currentCell[0] - 1, __currentCell[1], 0, 2], //find north
                            [__currentCell[0], __currentCell[1] + 1, 1, 3], //find east
                            [__currentCell[0] + 1, __currentCell[1], 2, 0],   //find south
                            [__currentCell[0], __currentCell[1] - 1, 3, 1]];  //find west
        //create array for cells around the __currentCell
        var neighbours = [];

        //for all neighbours, if it isnt one of the outer cells, and has not been checked before, push into neighbour array
        for (var k = 0; k < checkAround.length; k++) {
            if (checkAround[k][0] > -1 && checkAround[k][0] < numberOfCols && checkAround[k][1] > -1 && checkAround[k][1] < numberOfRows && cellConstruct[checkAround[k][0]][checkAround[k][1]]) {
                neighbours.push(checkAround[k]);
            }
        }

        //If at least one cell meets the criteria above,
        if (neighbours.length) {
            // Randomly choose one
            nextCell = neighbours[Math.floor(Math.random() * neighbours.length)];
            
            // Remove the wall between the current cell and nextCell
            __createCells[__currentCell[0]][__currentCell[1]][nextCell[2]] = 1;
            __createCells[nextCell[0]][nextCell[1]][nextCell[3]] = 1;
            
            // Mark the nextCell as visited
            cellConstruct[nextCell[0]][nextCell[1]] = false;
            //add one to cellsChecked counter
            cellsChecked = cellsChecked + 1;
            //mark nextCell as new __currentCell
            __currentCell = [nextCell[0], nextCell[1]];
            //push coordinates into solution array
            solution.push(__currentCell);
        } else {
            //throw cell out of solution 
            __currentCell = solution.pop();
        }    
    }
    console.log(__createCells);
    return __createCells;

};



//creates and prints maze onto mainOverlay, as well as instructional text
    function generateMaze1() {
        //create the maze based on variables. DO IT!
        var doIT = createMaze(1,1);
        for (var i = 0; i < doIT.length; i++) {
            $("#maze").append("<div class='rowContainer'id='row" + i  + "'>");
            for (var j = 0; j < doIT[i].length; j++) {
                var cellID = i+"-"+j;
                //add border if border values = 0
                $("#row" + i).append("<div class='cellDiv' id='" + cellID + "'></div>");
                if (doIT[i][j][0] == 0) { $("#" + cellID).css("border-top", "2px solid black"); }
                if (doIT[i][j][1] == 0) { $("#" + cellID).css("border-right", "2px solid black"); }
                if (doIT[i][j][2] == 0) { $("#" + cellID).css("border-bottom", "2px solid black"); }
                if (doIT[i][j][3] == 0) { $("#" + cellID).css("border-left", "2px solid black"); }
            };
            $("#maze").append("</div>");
        };
    };

    //creates and prints maze onto mainOverlay, as well as instructional text
    function generateMaze2() {
        //create the maze based on variables. DO IT!
        var doIT = createMaze(2,2);
        for (var i = 0; i < doIT.length; i++) {
            $("#maze").append("<div class='rowContainer'id='row" + i  + "'>");
            for (var j = 0; j < doIT[i].length; j++) {
                var cellID = i+"-"+j;
                //add border if border values = 0
                $("#row" + i).append("<div class='cellDiv' id='" + cellID + "'></div>");
                if (doIT[i][j][0] == 0) { $("#" + cellID).css("border-top", "2px solid black"); }
                if (doIT[i][j][1] == 0) { $("#" + cellID).css("border-right", "2px solid black"); }
                if (doIT[i][j][2] == 0) { $("#" + cellID).css("border-bottom", "2px solid black"); }
                if (doIT[i][j][3] == 0) { $("#" + cellID).css("border-left", "2px solid black"); }
            };
            $("#maze").append("</div>");
        };
    };

    //creates and prints maze onto mainOverlay, as well as instructional text
    function generateMaze3() {
        //create the maze based on variables. DO IT!
        var doIT = createMaze(3,3);
        for (var i = 0; i < doIT.length; i++) {
            $("#maze").append("<div class='rowContainer'id='row" + i  + "'>");
            for (var j = 0; j < doIT[i].length; j++) {
                var cellID = i+"-"+j;
                //add border if border values = 0
                $("#row" + i).append("<div class='cellDiv' id='" + cellID + "'></div>");
                if (doIT[i][j][0] == 0) { $("#" + cellID).css("border-top", "2px solid black"); }
                if (doIT[i][j][1] == 0) { $("#" + cellID).css("border-right", "2px solid black"); }
                if (doIT[i][j][2] == 0) { $("#" + cellID).css("border-bottom", "2px solid black"); }
                if (doIT[i][j][3] == 0) { $("#" + cellID).css("border-left", "2px solid black"); }
            };
            $("#maze").append("</div>");
        };
    };
    //creates and prints maze onto mainOverlay, as well as instructional text
    function generateMaze5() {
        //create the maze based on variables. DO IT!
        var doIT = createMaze(5,5);
        for (var i = 0; i < doIT.length; i++) {
            $("#maze").append("<div class='rowContainer'id='row" + i  + "'>");
            for (var j = 0; j < doIT[i].length; j++) {
                var cellID = i+"-"+j;
                //add border if border values = 0
                $("#row" + i).append("<div class='cellDiv' id='" + cellID + "'></div>");
                if (doIT[i][j][0] == 0) { $("#" + cellID).css("border-top", "2px solid black"); }
                if (doIT[i][j][1] == 0) { $("#" + cellID).css("border-right", "2px solid black"); }
                if (doIT[i][j][2] == 0) { $("#" + cellID).css("border-bottom", "2px solid black"); }
                if (doIT[i][j][3] == 0) { $("#" + cellID).css("border-left", "2px solid black"); }
            };
            $("#maze").append("</div>");
        };
    };
    //creates and prints maze onto mainOverlay, as well as instructional text
    function generateMaze15() {
        //create the maze based on variables. DO IT!
        var doIT = createMaze(15,15);
        for (var i = 0; i < doIT.length; i++) {
            $("#maze").append("<div class='rowContainer'id='row" + i  + "'>");
            for (var j = 0; j < doIT[i].length; j++) {
                var cellID = i+"-"+j;
                //add border if border values = 0
                $("#row" + i).append("<div class='cellDiv' id='" + cellID + "'></div>");
                if (doIT[i][j][0] == 0) { $("#" + cellID).css("border-top", "2px solid black"); }
                if (doIT[i][j][1] == 0) { $("#" + cellID).css("border-right", "2px solid black"); }
                if (doIT[i][j][2] == 0) { $("#" + cellID).css("border-bottom", "2px solid black"); }
                if (doIT[i][j][3] == 0) { $("#" + cellID).css("border-left", "2px solid black"); }
            };
            $("#maze").append("</div>");
        };
    };

$("#button1").click(function() {
    $("#maze").empty();
    generateMaze1()
   
});

$("#button2").click(function() {
    $("#maze").empty();
    generateMaze2()
   
});

$("#button3").click(function() {
    $("#maze").empty();
    generateMaze3()
   
});

$("#button5").click(function() {
    $("#maze").empty();
    generateMaze5()
   
});

$("#button15").click(function() {
    $("#maze").empty();
    generateMaze15()
   
});

$("#buttonreset").click(function() {
    $("#maze").empty();
   
});

}