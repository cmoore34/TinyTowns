function checkBuilding(row, col, firstResource) {
    let nav = new navPatterns(row,col);
    let pat = new buildingPatterns(row, col, nav)

    checkTavern(firstResource, nav, pat, false);
    checkWell(firstResource, nav, pat, false);
    checkCottage(firstResource, nav, pat, false);
    checkChapel(firstResource, nav, pat, false);
    checkTheater(firstResource, nav, pat, false);
    checkFarm(firstResource, nav, pat, false);
    checkFactory(firstResource, nav, pat, false);
}
function placeBuilding(row, col, firstResource, building) {
    let nav = new navPatterns(row,col);
    let pat = new buildingPatterns(row, col, nav)
    
    if(building=="wellFound"){
        checkWell(firstResource, nav, pat, true);
    }
    else if(building=="factoryFound"){
        checkFactory(firstResource, nav, pat, true);
    }
    else if(building=="farmFound"){
        checkFarm(firstResource, nav, pat, true);
    }
    else if(building=="theaterFound"){
        checkTheater(firstResource, nav, pat, true);
    }
    else if(building=="chapelFound"){
        checkChapel(firstResource, nav, pat, true);
    }
    else if(building=="cottageFound"){
        checkCottage(firstResource, nav, pat, true);
    }
    else if(building=="tavernFound"){
        checkTavern(firstResource, nav, pat, true);
    }
}
function checkWell(firstResource, nav, pat, place) {
    var patternMatch = false;
    
    var checkArray = [];
    if (firstResource === "wood") {
        checkArray = [pat.wellWoodP1,pat.wellWoodP2,pat.wellWoodP3,pat.wellWoodP4];
    } else if (firstResource === "stone") {
        checkArray = [pat.wellStoneP1,pat.wellStoneP2,pat.wellStoneP3,pat.wellStoneP4];
    }
    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (!place) {
                        nav.currentLocation.addClass("wellFound");
                        checkCmd[1][0].addClass("wellFound");
                    }
                    else if (place) {
                        nav.currentLocation.removeClass("wellFound");
                        nav.currentLocation.removeClass(firstResource);
                        nav.currentLocation.addClass("well");
                        nav.currentLocation.append("<img src='BuildingSVG/Well.svg' />")
                        nav.currentLocation.data("resource","");
                        nav.currentLocation.data("building","well");
                        checkCmd[1][0].removeClass("wellFound");
                        checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                        checkCmd[1][0].data("resource","");
                    }
                    patternMatch = true;
                }
            }
        })
    }
}
function checkTavern(firstResource, nav, pat, place) {
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "brick") {
        checkArray = [pat.tavernBrickP1,pat.tavernBrickP2,pat.tavernBrickP3,pat.tavernBrickP4,pat.tavernBrick2P1,pat.tavernBrick2P2,pat.tavernBrick2P3,pat.tavernBrick2P4];
    } else if (firstResource === "glass") {
        checkArray = [pat.tavernGlassP1,pat.tavernGlassP2,pat.tavernGlassP3,pat.tavernGlassP4];
    }
    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if (!place)
                        {
                            nav.currentLocation.addClass("tavernFound");
                            checkCmd[1][0].addClass("tavernFound");
                            checkCmd[2][0].addClass("tavernFound");
                        }
                        else if (place) {
                            nav.currentLocation.removeClass("tavernFound");
                            nav.currentLocation.removeClass(firstResource);
                            nav.currentLocation.addClass("tavern");
                            nav.currentLocation.append("<img src='BuildingSVG/Tavern.svg' />")
                            nav.currentLocation.data("resource","");
                            nav.currentLocation.data("building","tavern");
                            checkCmd[1][0].removeClass("tavernFound");
                            checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                            checkCmd[1][0].data("resource","");
                            checkCmd[2][0].removeClass("tavernFound");
                            checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                            checkCmd[2][0].data("resource","");
                        }
                        patternMatch = true;
                    }
                }
            }
        })
    }
}
function checkCottage(firstResource, nav, pat, place) {
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "brick") {
        checkArray = [pat.cottageBrickP1,pat.cottageBrickP2,pat.cottageBrickP3,pat.cottageBrickP4];
    } else if (firstResource === "glass") {
        checkArray = [pat.cottageGlassP1,pat.cottageGlassP2,pat.cottageGlassP3,pat.cottageGlassP4];
    } else if (firstResource === "wheat") {
        checkArray = [pat.cottageWheatP1,pat.cottageWheatP2,pat.cottageWheatP3,pat.cottageWheatP4];
    }

    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if(!place)
                        {
                            nav.currentLocation.addClass("cottageFound");
                            checkCmd[1][0].addClass("cottageFound");
                            checkCmd[2][0].addClass("cottageFound");
                        }
                        else if (place) {
                            nav.currentLocation.removeClass("cottageFound");
                            nav.currentLocation.removeClass(firstResource);
                            nav.currentLocation.addClass("cottage");
                            nav.currentLocation.append("<img src='BuildingSVG/Cottage.svg' />")
                            nav.currentLocation.data("resource","");
                            nav.currentLocation.data("building","cottage");
                            checkCmd[1][0].removeClass("cottageFound");
                            checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                            checkCmd[1][0].data("resource","");
                            checkCmd[2][0].removeClass("cottageFound");
                            checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                            checkCmd[2][0].data("resource","");
                        }
                        patternMatch = true;
                    }
                }
            }
        })
    }
}
function checkChapel(firstResource, nav, pat, place) {
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "stone") {
        checkArray = [pat.chapelStoneP1,pat.chapelStoneP2,pat.chapelStoneP3,pat.chapelStoneP4,pat.chapelStoneP5,pat.chapelStoneP6,pat.chapelStoneP7,pat.chapelStoneP8,pat.chapelStone2P1,pat.chapelStone2P2,pat.chapelStone2P3,pat.chapelStone2P4,pat.chapelStone2P5,pat.chapelStone2P6,pat.chapelStone2P7,pat.chapelStone2P8];
    } else if (firstResource === "glass") {
        checkArray = [pat.chapelGlassP1,pat.chapelGlassP2,pat.chapelGlassP3,pat.chapelGlassP4,pat.chapelGlassP5,pat.chapelGlassP6,pat.chapelGlassP7,pat.chapelGlassP8,pat.chapelGlass2P1,pat.chapelGlass2P2,pat.chapelGlass2P3,pat.chapelGlass2P4,pat.chapelGlass2P5,pat.chapelGlass2P6,pat.chapelGlass2P7,pat.chapelGlass2P8];
    }

    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if (checkCmd[3][0].data("resource") === checkCmd[3][1]) {
                            if(!place){
                                nav.currentLocation.addClass("chapelFound");
                                checkCmd[1][0].addClass("chapelFound");
                                checkCmd[2][0].addClass("chapelFound");
                                checkCmd[3][0].addClass("chapelFound");
                            }
                            else if (place) {
                                nav.currentLocation.removeClass("chapelFound");
                                nav.currentLocation.removeClass(firstResource);
                                nav.currentLocation.addClass("chapel");
                                nav.currentLocation.append("<img src='BuildingSVG/Chapel.svg' />")
                                nav.currentLocation.data("resource","");
                                nav.currentLocation.data("building","chapel");
                                checkCmd[1][0].removeClass("chapelFound");
                                checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                                checkCmd[1][0].data("resource","");
                                checkCmd[2][0].removeClass("chapelFound");
                                checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                                checkCmd[2][0].data("resource","");
                                checkCmd[3][0].removeClass("chapelFound");
                                checkCmd[3][0].removeClass(checkCmd[3][0].data("resource"));
                                checkCmd[3][0].data("resource","");
                            }
                            patternMatch = true;
                        }
                    }
                }
            }
        })
    }
}
function checkTheater(firstResource, nav, pat, place){
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "wood") {
        checkArray = [pat.theaterWoodP1,pat.theaterWoodP2,pat.theaterWoodP3,pat.theaterWoodP4,pat.theaterWood2P1,pat.theaterWood2P2,pat.theaterWood2P3,pat.theaterWood2P4];
    } else if (firstResource === "glass") {
        checkArray = [pat.theaterGlassP1,pat.theaterGlassP2,pat.theaterGlassP3,pat.theaterGlassP4];
    } else if (firstResource === "stone") {
        checkArray = [pat.theaterStoneP1,pat.theaterStoneP2,pat.theaterStoneP3,pat.theaterStoneP4];
    }

    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if (checkCmd[3][0].data("resource") === checkCmd[3][1]) {
                            if(!place){
                                nav.currentLocation.addClass("theaterFound");
                                checkCmd[1][0].addClass("theaterFound");
                                checkCmd[2][0].addClass("theaterFound");
                                checkCmd[3][0].addClass("theaterFound");
                            }
                            else if (place) {
                                nav.currentLocation.removeClass("theaterFound");
                                nav.currentLocation.removeClass(firstResource);
                                nav.currentLocation.addClass("theater");
                                nav.currentLocation.append("<img src='BuildingSVG/Theater.svg' />")
                                nav.currentLocation.data("resource","");
                                nav.currentLocation.data("building","theater");
                                checkCmd[1][0].removeClass("theaterFound");
                                checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                                checkCmd[1][0].data("resource","");
                                checkCmd[2][0].removeClass("theaterFound");
                                checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                                checkCmd[2][0].data("resource","");
                                checkCmd[3][0].removeClass("theaterFound");
                                checkCmd[3][0].removeClass(checkCmd[3][0].data("resource"));
                                checkCmd[3][0].data("resource","");
                            }
                            patternMatch = true;
                        }
                    }
                }
            }
        })
    }
}
function checkFarm(firstResource, nav, pat, place){
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "wheat") {
        checkArray = [pat.farmWheatP1,pat.farmWheatP2,pat.farmWheatP3,pat.farmWheatP4,pat.farmWheat2P1,pat.farmWheat2P2,pat.farmWheat2P3,pat.farmWheat2P4];
    } else if (firstResource === "wood") {
        checkArray = [pat.farmWoodP1,pat.farmWoodP2,pat.farmWoodP3,pat.farmWoodP4,pat.farmWood2P1,pat.farmWood2P2,pat.farmWood2P3,pat.farmWood2P4];
    }

    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if (checkCmd[3][0].data("resource") === checkCmd[3][1]) {
                            if(!place){
                                nav.currentLocation.addClass("farmFound");
                                checkCmd[1][0].addClass("farmFound");
                                checkCmd[2][0].addClass("farmFound");
                                checkCmd[3][0].addClass("farmFound");
                            }
                            else if (place) {
                                nav.currentLocation.removeClass("farmFound");
                                nav.currentLocation.removeClass(firstResource);
                                nav.currentLocation.addClass("farm");
                                nav.currentLocation.append("<img src='BuildingSVG/Farm.svg' />")
                                nav.currentLocation.data("resource","");
                                nav.currentLocation.data("building","farm");
                                checkCmd[1][0].removeClass("farmFound");
                                checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                                checkCmd[1][0].data("resource","");
                                checkCmd[2][0].removeClass("farmFound");
                                checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                                checkCmd[2][0].data("resource","");
                                checkCmd[3][0].removeClass("farmFound");
                                checkCmd[3][0].removeClass(checkCmd[3][0].data("resource"));
                                checkCmd[3][0].data("resource","");
                            }
                            patternMatch = true;
                        }
                    }
                }
            }
        })
    }
}
function checkFactory(firstResource, nav, pat, place){
    var patternMatch = false;

    var checkArray = [];
    if (firstResource === "wood") {
        checkArray = [pat.factoryWoodP1,pat.factoryWoodP2,pat.factoryWoodP3,pat.factoryWoodP4,pat.factoryWoodP5,pat.factoryWoodP6,pat.factoryWoodP7,pat.factoryWoodP8];
    } else if (firstResource === "brick") {
        checkArray = [pat.factoryBrickP1,pat.factoryBrickP2,pat.factoryBrickP3,pat.factoryBrickP4,pat.factoryBrickP5,pat.factoryBrickP6,pat.factoryBrickP7,pat.factoryBrickP8,pat.factoryBrick2P1,pat.factoryBrick2P2,pat.factoryBrick2P3,pat.factoryBrick2P4,pat.factoryBrick2P5,pat.factoryBrick2P6,pat.factoryBrick2P7,pat.factoryBrick2P8];
    } else if (firstResource === "stone") {
        checkArray = [pat.factoryStoneP1,pat.factoryStoneP2,pat.factoryStoneP3,pat.factoryStoneP4,pat.factoryStoneP5,pat.factoryStoneP6,pat.factoryStoneP7,pat.factoryStoneP8,pat.factoryStone2P1,pat.factoryStone2P2,pat.factoryStone2P3,pat.factoryStone2P4,pat.factoryStone2P5,pat.factoryStone2P6,pat.factoryStone2P7,pat.factoryStone2P8];
    }

    if (checkArray.length > 0) {
        checkArray.forEach(function(checkCmd) {
            //if we do not have a patternMatch, and we are in the row/col bounds,
            //we can check down the grid without exceeding the bounds of the grid
            if (checkCmd[0] && !patternMatch) {
                //if we find the next resource, we can continue checking that direction, otherwise we continue through the algorithm
                if (checkCmd[1][0].data("resource") === checkCmd[1][1]) {
                    if (checkCmd[2][0].data("resource") === checkCmd[2][1]) {
                        if (checkCmd[3][0].data("resource") === checkCmd[3][1]) {
                            if (checkCmd[4][0].data("resource") === checkCmd[4][1]) {
                                debugger;
                                if(!place){
                                    nav.currentLocation.addClass("factoryFound");
                                    checkCmd[1][0].addClass("factoryFound");
                                    checkCmd[2][0].addClass("factoryFound");
                                    checkCmd[3][0].addClass("factoryFound");
                                    checkCmd[4][0].addClass("factoryFound");
                                }
                                else if (place) {
                                    nav.currentLocation.removeClass("factoryFound");
                                    nav.currentLocation.removeClass(firstResource);
                                    nav.currentLocation.addClass("factory");
                                    nav.currentLocation.append("<img src='BuildingSVG/Factory.svg' />")
                                    nav.currentLocation.data("resource","");
                                    nav.currentLocation.data("building","factory");
                                    checkCmd[1][0].removeClass("factoryFound");
                                    checkCmd[1][0].removeClass(checkCmd[1][0].data("resource"));
                                    checkCmd[1][0].data("resource","");
                                    checkCmd[2][0].removeClass("factoryFound");
                                    checkCmd[2][0].removeClass(checkCmd[2][0].data("resource"));
                                    checkCmd[2][0].data("resource","");
                                    checkCmd[3][0].removeClass("factoryFound");
                                    checkCmd[3][0].removeClass(checkCmd[3][0].data("resource"));
                                    checkCmd[3][0].data("resource","");
                                    checkCmd[4][0].removeClass("factoryFound");
                                    checkCmd[4][0].removeClass(checkCmd[4][0].data("resource"));
                                    checkCmd[4][0].data("resource","");
                                }
                                patternMatch = true;
                            }
                        }
                    }
                }
            }
        })
    }
}
function navPatterns(row,col) {
    this.currentLocation = $('#r' + row + 'c' + col);
    this.downOneRow = $('#r' + (row + 1) + 'c' + col);
    this.downTwoRows = $('#r' + (row + 2) + 'c' + col);
    this.downThreeRows = $('#r' + (row + 3) + 'c' + col);
    this.upOneRow = $('#r' + (row - 1) + 'c' + col);
    this.upTwoRows = $('#r' + (row - 2) + 'c' + col);
    this.upThreeRows = $('#r' + (row - 3) + 'c' + col);
    this.leftOneCol = $('#r' + row + 'c' + (col - 1));
    this.leftTwoCols = $('#r' + row + 'c' + (col - 2));
    this.leftThreeCols = $('#r' + row + 'c' + (col - 3));
    this.rightOneCol = $('#r' + row + 'c' + (col + 1));
    this.rightTwoCols = $('#r' + row + 'c' + (col + 2));
    this.rightThreeCols = $('#r' + row + 'c' + (col + 2));
    this.upRightDiag = $('#r' + (row - 1) + 'c' + (col + 1));
    this.upLeftDiag = $('#r' + (row - 1) + 'c' + (col - 1));
    this.downRightDiag = $('#r' + (row + 1) + 'c' + (col + 1));
    this.downLeftDiag = $('#r' + (row + 1) + 'c' + (col - 1));
    this.rightTwoUpOne = $('#r' + (row - 1) + 'c' + (col + 2));
    this.rightThreeUpOne = $('#r' + (row - 1) + 'c' + (col + 3));
    this.leftTwoUpOne = $('#r' + (row - 1) + 'c' + (col - 2));
    this.leftThreeUpOne = $('#r' + (row - 1) + 'c' + (col - 3));
    this.rightTwoDownOne = $('#r' + (row + 1) + 'c' + (col + 2));
    this.rightThreeDownOne = $('#r' + (row + 1) + 'c' + (col + 3));
    this.leftTwoDownOne = $('#r' + (row + 1) + 'c' + (col - 2));
    this.leftThreeDownOne = $('#r' + (row + 1) + 'c' + (col - 3));
    this.downTwoLeftOne = $('#r' + (row + 2) + 'c' + (col - 1));
    this.downThreeLeftOne = $('#r' + (row + 3) + 'c' + (col - 1));
    this.downTwoRightOne = $('#r' + (row + 2) + 'c' + (col + 1));
    this.downThreeRightOne = $('#r' + (row + 3) + 'c' + (col + 1));
    this.upTwoLeftOne = $('#r' + (row - 2) + 'c' + (col - 1));
    this.upThreeLeftOne = $('#r' + (row - 3) + 'c' + (col - 1));
    this.upTwoRightOne = $('#r' + (row - 2) + 'c' + (col + 1));
    this.upThreeRightOne = $('#r' + (row - 3) + 'c' + (col + 1));
}
function buildingPatterns(row,col,nav) {
    this.wellWoodP1 = [col <= 2, [nav.rightOneCol, "stone"]];
    this.wellWoodP2 = [row <= 2, [nav.downOneRow, "stone"]];
    this.wellWoodP3 = [col >= 1, [nav.leftOneCol, "stone"]];
    this.wellWoodP4 = [row >= 1, [nav.upOneRow, "stone"]];
    this.wellStoneP1 = [col <= 2, [nav.rightOneCol, "wood"]];
    this.wellStoneP2 = [row <= 2, [nav.downOneRow, "wood"]];
    this.wellStoneP3 = [col >= 1, [nav.leftOneCol, "wood"]];
    this.wellStoneP4 = [row >= 1, [nav.upOneRow, "wood"]];
    this.cottageBrickP1 = [col <= 2 && row >=1, [nav.rightOneCol, "glass"],[nav.upRightDiag, "wheat"]];
    this.cottageBrickP2 = [col <=2 && row <=2, [nav.downOneRow, "glass"],[nav.downRightDiag, "wheat"]];
    this.cottageBrickP3 = [col >=1 && row<=2, [nav.leftOneCol, "glass"],[nav.downLeftDiag, "wheat"]];
    this.cottageBrickP4 = [col >=1  && row >=1, [nav.upOneRow, "glass"],[nav.upLeftDiag, "wheat"]];
    this.cottageGlassP1 = [col <= 2 && row >=1, [nav.upOneRow, "wheat"],[nav.leftOneCol, "brick"]];
    this.cottageGlassP2 = [col>=2 && row >=1, [nav.rightOneCol, "wheat"],[nav.upOneRow, "brick"]];
    this.cottageGlassP3 = [col>=2 && row<=2, [nav.downOneRow, "wheat"],[nav.rightOneCol, "brick"]];
    this.cottageGlassP4 = [col >=1 && row<=2, [nav.leftOneCol, "wheat"],[nav.downOneRow, "brick"]];
    this.cottageWheatP1 = [col >=1 && row<=2, [nav.downOneRow, "glass"],[nav.downLeftDiag, "brick"]];
    this.cottageWheatP2 = [col <= 2 && row >=1, [nav.leftOneCol, "glass"],[nav.upLeftDiag, "brick"]];
    this.cottageWheatP3 = [col>=2 && row >=1, [nav.upOneRow, "glass"],[nav.upRightDiag, "brick"]];
    this.cottageWheatP4 = [col>=2 && row<=2, [nav.rightOneCol, "glass"],[nav.downRightDiag, "brick"]];
    this.tavernBrickP1 = [col <= 1, [nav.rightOneCol, "brick"],[nav.rightTwoCols, "glass"]];
    this.tavernBrickP2 = [row <= 1, [nav.downOneRow, "brick"],[nav.downTwoRows, "glass"]];
    this.tavernBrickP3 = [col >= 2, [nav.leftOneCol, "brick"],[nav.leftTwoCols, "glass"]];
    this.tavernBrickP4 = [row >= 2, [nav.upOneRow, "brick"],[nav.upTwoRows, "glass"]];
    this.tavernBrick2P1 = [col >= 1 && col <= 2, [nav.rightOneCol, "glass"],[nav.leftOneCol, "brick"]];
    this.tavernBrick2P2 = [row >= 1 && row <= 2, [nav.downOneRow, "glass"],[nav.upOneRow, "brick"]];
    this.tavernBrick2P3 = [col >= 1 && col <= 2, [nav.leftOneCol, "glass"],[nav.rightOneCol, "brick"]];
    this.tavernBrick2P4 = [row >= 1 && row <= 2, [nav.upOneRow, "glass"],[nav.downOneRow, "brick"]];
    this.tavernGlassP1 = [col >= 2, [nav.leftOneCol, "brick"],[nav.leftTwoCols, "brick"]];
    this.tavernGlassP2 = [row >= 2, [nav.upOneRow, "brick"],[nav.upTwoRows, "brick"]];
    this.tavernGlassP3 = [col <= 1, [nav.rightOneCol, "brick"],[nav.rightTwoCols, "brick"]];
    this.tavernGlassP4 = [row <= 1, [nav.downOneRow, "brick"],[nav.downTwoRows, "brick"]];
    this.farmWheatP1 = [col <= 2 && row <=2, [nav.rightOneCol, "wheat"],[nav.downOneRow, "wood"],[nav.downRightDiag, "wood"]];
    this.farmWheatP2 = [col >= 1 && row <=2, [nav.downOneRow, "wheat"],[nav.leftOneCol, "wood"],[nav.downLeftDiag, "wood"]];
    this.farmWheatP3 = [col >= 1 && row >=1, [nav.leftOneCol, "wheat"],[nav.upOneRow, "wood"],[nav.upLeftDiag, "wood"]];
    this.farmWheatP4 = [col <= 2 && row <=2, [nav.downOneRow, "wheat"],[nav.rightOneCol, "wood"],[nav.downRightDiag, "wood"]];
    this.farmWheat2P1 = [col >= 1 && row <=2, [nav.leftOneCol, "wheat"],[nav.downOneRow, "wood"],[nav.downLeftDiag, "wood"]];
    this.farmWheat2P2 = [col >= 1 && row >=1, [nav.upOneRow, "wheat"],[nav.leftOneCol, "wood"],[nav.upLeftDiag, "wood"]];
    this.farmWheat2P3 = [col <= 2 && row >=1, [nav.rightOneCol, "wheat"],[nav.upOneRow, "wood"],[nav.upRightDiag, "wood"]];
    this.farmWheat2P4 = [col >= 1 && row >=1, [nav.upOneRow, "wheat"],[nav.rightOneCol, "wood"],[nav.upRightDiag, "wood"]];
    this.farmWoodP1 = [col <= 2 && row <=2, [nav.rightOneCol, "wood"],[nav.downOneRow, "wheat"],[nav.downRightDiag, "wheat"]];
    this.farmWoodP2 = [col >= 1 && row <=2, [nav.downOneRow, "wood"],[nav.leftOneCol, "wheat"],[nav.downLeftDiag, "wheat"]];
    this.farmWoodP3 = [col >= 1 && row >=1, [nav.leftOneCol, "wood"],[nav.upOneRow, "wheat"],[nav.upLeftDiag, "wheat"]];
    this.farmWoodP4 = [col <= 2 && row <=2, [nav.downOneRow, "wood"],[nav.rightOneCol, "wheat"],[nav.downRightDiag, "wheat"]];
    this.farmWood2P1 = [col >= 1 && row <=2, [nav.leftOneCol, "wood"],[nav.downOneRow, "wheat"],[nav.downLeftDiag, "wheat"]];
    this.farmWood2P2 = [col >= 1 && row >=1, [nav.upOneRow, "wood"],[nav.leftOneCol, "wheat"],[nav.upLeftDiag, "wheat"]];
    this.farmWood2P3 = [col <= 2 && row >=1, [nav.rightOneCol, "wood"],[nav.upOneRow, "wheat"],[nav.upRightDiag, "wheat"]];
    this.farmWood2P4 = [col >= 1 && row >=1, [nav.upOneRow, "wood"],[nav.rightOneCol, "wheat"],[nav.upRightDiag, "wheat"]];
    this.chapelStoneP1 = [col <= 1 && row >=1, [nav.rightOneCol, "glass"],[nav.rightTwoCols, "stone"],[nav.rightTwoUpOne, "glass"]];//Pattern1
    this.chapelStoneP2 = [col >=2 && row >=1, [nav.leftOneCol, "glass"],[nav.leftTwoCols, "stone"],[nav.leftTwoUpOne, "glass"]];//Pattern2
    this.chapelStoneP3 = [col <= 1 && row <=2, [nav.rightOneCol, "glass"],[nav.rightTwoCols, "stone"],[nav.rightTwoDownOne, "glass"]];//Pattern3
    this.chapelStoneP4 = [col >=2 && row>=2, [nav.leftOneCol, "glass"],[nav.leftTwoCols, "stone"],[nav.leftTwoDownOne, "glass"]];//Pattern4
    this.chapelStoneP5 = [col>=1 && row<=1, [nav.downOneRow, "glass"],[nav.downTwoRows, "stone"],[nav.downTwoLeftOne, "glass"]];//Pattern5
    this.chapelStoneP6 = [col<=2 && row<=1, [nav.downOneRow, "glass"],[nav.downTwoRows, "stone"],[nav.downTwoRightOne, "glass"]];//Pattern6
    this.chapelStoneP7 = [col>=1 && row<=1, [nav.downOneRow, "glass"],[nav.downTwoRows, "stone"],[nav.leftOneCol, "glass"]];//Pattern7
    this.chapelStoneP8 = [col<=2 && row<=1, [nav.downOneRow, "glass"],[nav.downTwoRows, "stone"],[nav.rightOneCol, "glass"]];//Pattern8
    this.chapelStone2P1 = [col >= 2 && row >=1, [nav.upOneRow, "glass"],[nav.leftOneCol, "glass"],[nav.leftTwoCols, "stone"]];//Pattern1
    this.chapelStone2P2 = [col >=1 && row<=2, [nav.upOneRow, "glass"],[nav.rightOneCol, "glass"],[nav.rightTwoCols, "stone"]];//Pattern2
    this.chapelStone2P3 = [col>=2 && row <=2, [nav.downOneRow, "glass"],[nav.leftOneCol, "glass"],[nav.leftTwoCols, "stone"]];//Pattern3
    this.chapelStone2P4 = [col<=1 && row<=2, [nav.downOneRow, "glass"],[nav.rightOneCol, "glass"],[nav.rightTwoCols, "stone"]];//Pattern4
    this.chapelStone2P5 = [col>=1 && row>=2, [nav.upOneRow, "glass"],[nav.upTwoRows, "stone"],[nav.leftOneCol, "glass"]];//Pattern5
    this.chapelStone2P6 = [col<=2 && row>=2, [nav.upOneRow, "glass"],[nav.upTwoRows, "stone"],[nav.rightOneCol, "glass"]];//Pattern6
    this.chapelStone2P7 = [col>=1 && row>=2, [nav.upOneRow, "glass"],[nav.upTwoRows, "stone"],[nav.upTwoLeftOne, "glass"]];//Pattern7
    this.chapelStone2P8 = [col<=2 && row>=2, [nav.upOneRow, "glass"],[nav.upTwoRows, "stone"],[nav.upTwoRightOne, "glass"]];//Pattern8
    this.chapelGlassP1 = [col>=2 && row<=2, [nav.downOneRow, "stone"],[nav.downLeftDiag, "glass"],[nav.leftTwoDownOne, "stone"]];//Pattern1
    this.chapelGlassP2 = [col<=1 && row>=1, [nav.downOneRow, "stone"],[nav.downRightDiag, "glass"],[nav.rightTwoDownOne, "stone"]];//Pattern2
    this.chapelGlassP3 = [col>=2 && row>=1, [nav.upOneRow, "stone"],[nav.upLeftDiag, "glass"],[nav.leftTwoUpOne, "stone"]];//Pattern3
    this.chapelGlassP4 = [col<=1 && row>=1, [nav.upOneRow, "stone"],[nav.upRightDiag, "glass"],[nav.rightTwoUpOne, "stone"]];//Pattern4
    this.chapelGlassP5 = [col <= 2 && row >= 2, [nav.rightOneCol, "stone"],[nav.upRightDiag, "glass"],[nav.upTwoRightOne, "stone"]];//Pattern5
    this.chapelGlassP6 = [col >= 1 && row >= 2, [nav.leftOneCol, "stone"],[nav.upLeftDiag, "glass"],[nav.upTwoLeftOne, "stone"]];//Pattern6
    this.chapelGlassP7 = [col <= 2 && row <= 1, [nav.rightOneCol, "stone"],[nav.downRightDiag, "glass"],[nav.downTwoRightOne, "stone"]];//Pattern7
    this.chapelGlassP8 = [col >= 1 && row <= 1, [nav.leftOneCol, "stone"],[nav.downLeftDiag, "glass"],[nav.downTwoLeftOne, "stone"]];//Pattern8
    this.chapelGlass2P1 = [col>=1 && col<=2 && row>=1, [nav.leftOneCol, "stone"],[nav.rightOneCol, "stone"],[nav.upRightDiag, "glass"]];//Pattern1
    this.chapelGlass2P2 = [col>=1 && col<=2 && row>=1, [nav.leftOneCol, "stone"],[nav.rightOneCol, "stone"],[nav.upLeftDiag, "glass"]];//Pattern2
    this.chapelGlass2P3 = [col>=1 && col<=2 && row<=2, [nav.leftOneCol, "stone"],[nav.rightOneCol, "stone"],[nav.downRightDiag, "glass"]];//Pattern3
    this.chapelGlass2P4 = [col>=1 && col<=2 && row<=2, [nav.leftOneCol, "stone"],[nav.rightOneCol, "stone"],[nav.downLeftDiag, "glass"]];//Pattern4
    this.chapelGlass2P5 = [col>=1 && row>=1 && row<=2, [nav.upOneRow, "stone"],[nav.downOneRow, "stone"],[nav.downLeftDiag, "glass"]];//Pattern5
    this.chapelGlass2P6 = [col<=2 && row>=1 && row<=2, [nav.upOneRow, "stone"],[nav.downOneRow, "stone"],[nav.downRightDiag, "glass"]];//Pattern6
    this.chapelGlass2P7 = [col>=1 && row>=1 && row<=2, [nav.upOneRow, "stone"],[nav.downOneRow, "stone"],[nav.upLeftDiag, "glass"]];//Pattern7
    this.chapelGlass2P8 = [col<=2 && row>=1 && row<=2, [nav.upOneRow, "stone"],[nav.downOneRow, "stone"],[nav.upRightDiag, "glass"]];//Pattern8
    this.theaterWoodP1 = [col <= 1 && row >=1, [nav.rightOneCol, "glass"],[nav.upRightDiag, "stone"],[nav.rightTwoCols, "wood"]];//Pattern1
    this.theaterWoodP2 = [col <=1 && row <=2, [nav.rightOneCol, "glass"],[nav.downRightDiag, "stone"],[nav.rightTwoCols, "wood"]];//Pattern2
    this.theaterWoodP3 = [col >= 1 && row <=1, [nav.downOneRow, "glass"],[nav.downLeftDiag, "stone"],[nav.downTwoRows, "wood"]];//Pattern3
    this.theaterWoodP4 = [col <=2 && row<=1, [nav.downOneRow, "glass"],[nav.downRightDiag, "stone"],[nav.downTwoRows, "wood"]];//Pattern4
    this.theaterWood2P1 = [col >= 2 && row >=1, [nav.leftOneCol, "glass"],[nav.upLeftDiag, "stone"],[nav.leftTwoCols, "wood"]];//Pattern1
    this.theaterWood2P2 = [col >=2 && row<=2, [nav.leftOneCol, "glass"],[nav.downLeftDiag, "stone"],[nav.leftTwoCols, "wood"]];//Pattern2
    this.theaterWood2P3 = [col>=1 && row >=2, [nav.upOneRow, "glass"],[nav.upLeftDiag, "stone"],[nav.upTwoRows, "wood"]];//Pattern3
    this.theaterWood2P4 = [col<=2 && row>=2, [nav.upOneRow, "glass"],[nav.upRightDiag, "stone"],[nav.upTwoRows, "wood"]];//Pattern4
    this.theaterGlassP1 = [col>=1 && col<=2 && row >= 1, [nav.leftOneCol, "wood"],[nav.rightOneCol, "wood"],[nav.upOneRow, "stone"]];//Pattern1
    this.theaterGlassP2 = [col>=1 && col<=2 && row <= 2, [nav.leftOneCol, "wood"],[nav.rightOneCol, "wood"],[nav.downOneRow, "stone"]];//Pattern2
    this.theaterGlassP3 = [col>=1 && row>=1 && row <= 2, [nav.upOneRow, "wood"],[nav.downOneRow, "wood"],[nav.leftOneCol, "stone"]];//Pattern3
    this.theaterGlassP4 = [col<=2 && row>=1 && row <= 2, [nav.upOneRow, "wood"],[nav.downOneRow, "wood"],[nav.rightOneCol, "stone"]];//Pattern4
    this.theaterStoneP1 = [col>=1 && col<=2 && row <= 2, [nav.downOneRow, "glass"],[nav.downLeftDiag, "wood"],[nav.downRightDiag, "wood"]];//Pattern1
    this.theaterStoneP2 = [col>=1 && col<=2 && row >= 1, [nav.upOneRow, "glass"],[nav.upLeftDiag, "wood"],[nav.upRightDiag, "wood"]];//Pattern2
    this.theaterStoneP3 = [col<=2 && row>=1 && row <= 2, [nav.rightOneCol, "glass"],[nav.upRightDiag, "wood"],[nav.downRightDiag, "wood"]];//Pattern3
    this.theaterStoneP4 = [col>=1 && row>=1 && row <= 2, [nav.leftOneCol, "glass"],[nav.upLeftDiag, "wood"],[nav.downLeftDiag, "wood"]];//Pattern4
    this.factoryWoodP1 = [col == 0 && row <=2, [nav.downOneRow, "brick"],[nav.downRightDiag, "stone"],[nav.rightTwoDownOne, "stone"],[nav.rightThreeDownOne, "brick"]]; //Pattern1
    this.factoryWoodP2 = [col == 0 && row >=1, [nav.upOneRow, "brick"],[nav.upRightDiag, "stone"],[nav.rightTwoUpOne, "stone"],[nav.rightThreeUpOne, "brick"]]; //Pattern2
    this.factoryWoodP3 = [col == 3 && row <=2, [nav.downOneRow, "brick"],[nav.downLeftDiag, "stone"],[nav.leftTwoDownOne, "stone"],[nav.leftThreeDownOne, "brick"]]; //Pattern3
    this.factoryWoodP4 = [col == 3 && row >=1, [nav.upOneRow, "brick"],[nav.upLeftDiag, "stone"],[nav.leftTwoUpOne, "stone"],[nav.leftThreeUpOne, "brick"]]; //Pattern4
    this.factoryWoodP5 = [col <= 2 && row == 0, [nav.rightOneCol, "brick"],[nav.downRightDiag, "stone"],[nav.downTwoRightOne, "stone"],[nav.downThreeRightOne, "brick"]]; //Pattern5
    this.factoryWoodP6 = [col >= 1 && row == 0, [nav.leftOneCol, "brick"],[nav.downLeftDiag, "stone"],[nav.downTwoLeftOne, "stone"],[nav.downThreeLeftOne, "brick"]]; //Pattern6
    this.factoryWoodP7 = [col <= 2 && row == 3, [nav.rightOneCol, "brick"],[nav.upRightDiag, "stone"],[nav.upTwoRightOne, "stone"],[nav.upThreeRightOne, "brick"]]; //Pattern7
    this.factoryWoodP8 = [col >= 1 && row == 3, [nav.leftOneCol, "brick"],[nav.upLeftDiag, "stone"],[nav.upTwoLeftOne, "stone"],[nav.upThreeLeftOne, "brick"]]; //Pattern8
    this.factoryStoneP1 = [col == 1 && row >=1, [nav.leftOneCol, "brick"],[nav.upLeftDiag, "wood"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "brick"]]; //Pattern1
    this.factoryStoneP2 = [col == 1 && row <=2, [nav.leftOneCol, "brick"],[nav.downLeftDiag, "wood"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "brick"]]; //Pattern2
    this.factoryStoneP3 = [col == 1 && row >= 1, [nav.leftOneCol, "brick"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "brick"],[nav.rightTwoUpOne, "wood"]]; //Pattern3
    this.factoryStoneP4 = [col == 1 && row <= 2, [nav.leftOneCol, "brick"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "brick"],[nav.rightTwoDownOne, "wood"]]; //Pattern4
    this.factoryStoneP5 = [col >= 1 && row ==1, [nav.upOneRow, "brick"],[nav.upLeftDiag, "wood"],[nav.downOneRow, "stone"],[nav.downTwoRows, "brick"]]; //Pattern5
    this.factoryStoneP6 = [col <= 2 && row ==2, [nav.downOneRow, "brick"],[nav.downLeftDiag, "wood"],[nav.leftTwoDownOne, "stone"],[nav.leftThreeDownOne, "brick"]]; //Pattern6
    this.factoryStoneP7 = [col >= 1 && row == 2, [nav.downOneRow, "brick"],[nav.downLeftDiag, "wood"],[nav.upOneRow, "stone"],[nav.upTwoRows, "brick"]]; //Pattern7
    this.factoryStoneP8 = [col <= 2 && row == 2, [nav.downOneRow, "brick"],[nav.downRightDiag, "wood"],[nav.upOneRow, "stone"],[nav.upTwoRows, "brick"]]; //Pattern8
    this.factoryStone2P1 = [col == 2 && row >=1, [nav.rightOneCol, "brick"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "brick"],[nav.leftTwoUpOne, "wood"]]; //Pattern1
    this.factoryStone2P2 = [col == 2 && row <=2, [nav.rightOneCol, "brick"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "brick"],[nav.leftTwoDownOne, "wood"]]; //Pattern2
    this.factoryStone2P3 = [col == 2 && row >= 1, [nav.rightOneCol, "brick"],[nav.upRightDiag, "wood"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "brick"]]; //Pattern3
    this.factoryStone2P4 = [col == 2 && row <= 2, [nav.rightOneCol, "brick"],[nav.downRightDiag, "wood"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "brick"]]; //Pattern4
    this.factoryStone2P5 = [col >= 1 && row ==2, [nav.upOneRow, "stone"],[nav.upTwoRows, "brick"],[nav.upTwoLeftOne, "wood"],[nav.downOneRow, "brick"]]; //Pattern5
    this.factoryStone2P6 = [col <= 2 && row == 1, [nav.upOneRow, "stone"],[nav.upTwoRows, "brick"],[nav.upTwoRightOne, "wood"],[nav.downOneRow, "brick"]]; //Pattern6
    this.factoryStone2P7 = [col >= 1 && row == 1, [nav.upOneRow, "brick"],[nav.downOneRow, "stone"],[nav.downTwoRows, "brick"],[nav.downTwoLeftOne, "wood"]]; //Pattern7
    this.factoryStone2P8 = [col <= 2 && row == 1, [nav.upOneRow, "brick"],[nav.downOneRow, "stone"],[nav.downTwoRows, "brick"],[nav.downTwoRightOne, "wood"]]; //Pattern8
    this.factoryBrickP1 = [col == 0 && row >=1, [nav.upOneRow, "wood"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "stone"],[nav.rightThreeCols, "brick"]]; //Pattern1
    this.factoryBrickP2 = [col == 0 && row <=2, [nav.downOneRow, "wood"],[nav.rightOneCol, "stone"],[nav.rightTwoCols, "stone"],[nav.rightThreeCols, "brick"]]; //Pattern2
    this.factoryBrickP3 = [col == 3 && row >= 1, [nav.upOneRow, "wood"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "stone"],[nav.leftThreeCols, "brick"]]; //Pattern3
    this.factoryBrickP4 = [col == 3 && row <= 2, [nav.downOneRow, "wood"],[nav.leftOneCol, "stone"],[nav.leftTwoCols, "stone"],[nav.leftThreeCols, "brick"]]; //Pattern4
    this.factoryBrickP5 = [col >= 1 && row ==0, [nav.leftOneCol, "wood"],[nav.downOneRow, "stone"],[nav.downTwoRows, "stone"],[nav.downThreeRows, "brick"]]; //Pattern5
    this.factoryBrickP6 = [col <=2 && row ==0, [nav.rightOneCol, "wood"],[nav.downOneRow, "stone"],[nav.downTwoRows, "stone"],[nav.downThreeRows, "brick"]]; //Pattern6
    this.factoryBrickP7 = [col >= 1 && row == 3, [nav.leftOneCol, "wood"],[nav.upOneRow, "stone"],[nav.upTwoRows, "stone"],[nav.upThreeRows, "brick"]]; //Pattern7
    this.factoryBrickP8 = [col <= 2 && row == 3, [nav.rightOneCol, "wood"],[nav.upOneRow, "stone"],[nav.upTwoRows, "stone"],[nav.upThreeRows, "brick"]]; //Pattern8
    this.factoryBrick2P1 = [col == 3 && row >=1, [nav.leftOneCol, "stone"],[nav.leftTwoCols, "stone"],[nav.leftThreeCols, "brick"],[nav.leftThreeUpOne, "wood"]]; //Pattern1
    this.factoryBrick2P2 = [col == 3 && row <=2, [nav.leftOneCol, "stone"],[nav.leftTwoCols, "stone"],[nav.leftThreeCols, "brick"],[nav.leftThreeDownOne, "wood"]]; //Pattern2
    this.factoryBrick2P3 = [col == 0 && row >= 1, [nav.rightOneCol, "stone"],[nav.rightTwoCols, "stone"],[nav.rightThreeCols, "brick"],[nav.rightThreeUpOne, "wood"]]; //Pattern3
    this.factoryBrick2P4 = [col == 0 && row <= 2, [nav.rightOneCol, "stone"],[nav.rightTwoCols, "stone"],[nav.rightThreeCols, "brick"],[nav.rightThreeDownOne, "wood"]]; //Pattern4
    this.factoryBrick2P5 = [col >= 1 && row ==3, [nav.upOneRow, "stone"],[nav.upTwoRows, "stone"],[nav.upThreeRows, "brick"],[nav.upThreeLeftOne, "wood"]]; //Pattern5
    this.factoryBrick2P6 = [col <= 2 && row ==3, [nav.upOneRow, "stone"],[nav.upTwoRows, "stone"],[nav.upThreeRows, "brick"],[nav.upThreeRightOne, "wood"]]; //Pattern6
    this.factoryBrick2P7 = [col >= 1 && row == 0, [nav.downOneRow, "stone"],[nav.downTwoRows, "stone"],[nav.downThreeRows, "brick"],[nav.downThreeLeftOne, "wood"]]; //Pattern7
    this.factoryBrick2P8 = [col <= 2 && row == 0, [nav.downOneRow, "stone"],[nav.downTwoRows, "stone"],[nav.downThreeRows, "brick"],[nav.downThreeRightOne, "wood"]]; //Pattern8
}
$.fn.buildingCount = function() {
    return $.grep(this.attr("class").replace('brick','').replace('wood','').replace('glass','').replace('wheat','').replace('stone','').replace('cell','').split(/\s+/), $.trim).length;
};
$.fn.buildingFind = function() {
    return $.grep(this.attr("class").replace('brick','').replace('wood','').replace('glass','').replace('wheat','').replace('stone','').replace('cell','').split(/\s+/), $.trim);
};