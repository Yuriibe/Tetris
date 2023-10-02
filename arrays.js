var iBlock1 = {
    type: "iHorizontal",
    shape: [
        [1, 1, 1, 1]
    ]
}
var iBlock2 = {
    type: "iVertical",
    shape: [
        [1],
        [1],
        [1],
        [1]
    ]
}
var iBlock3 = {
    type: "iVertical",
    shape: [
        [1, 1, 1, 1]

    ]
}
var iBlock4 = {
    type: "iVertical",
    shape: [
        [1],
        [1],
        [1],
        [1]
    ]
}

// S Block
var sBlock1 = {
    type: "sBase",
    shape: [
        [0, 1, 1],
        [1, 1, 0]
    ]
}

var sBlock2 = {
    type: "s90Degree",
    shape: [
        [1, 0],
        [1, 1],
        [0, 1]
    ]
}
var sBlock3 = {
    type: "s180Degree",
    shape: [
        [0, 1, 1],
        [1, 1, 0]
    ]
}
var sBlock4 = {
    type: "s270Degree",
    shape: [
        [0, 1],
        [1, 1],
        [1, 0]
    ]
}

// Z Block
var zBlock1 = {
    type: "zBase",
    shape: [
        [1, 1, 0],
        [0, 1, 1],
    ]
}
var zBlock2 = {
    type: "z90Degree",
    shape: [
        [0, 1],
        [1, 1],
        [1, 0],
    ]
}
var zBlock3 = {
    type: "z180Degree",
    shape: [
        [1, 1, 0],
        [0, 1, 1]
    ]
}
var zBlock4 = {
    type: "z270Degree",
    shape: [
        [0, 1],
        [1, 1],
        [1, 0],

    ]
}

// L BLock
var lBlock1 = {
    type: "lBase",
    shape: [
        [0, 0, 1],
        [1, 1, 1],
    ]
}
var lBlock2 = {
    type: "l90Degree",
    shape: [
        [1, 0],
        [1, 0],
        [1, 1],
    ]
}
var lBlock3 = {
    type: "l180Degree",
    shape: [
        [1, 1, 1],
        [1, 0, 0],
    ]
}
var lBlock4 = {
    type: "l270Degree",
    shape: [
        [1, 1],
        [0, 1],
        [0, 1],
    ]
}

//J Block
var jBlock1 = {
    type: "jBase",
    shape: [
        [1, 0, 0],
        [1, 1, 1],
    ]
}
var jBlock2 = {
    type: "i90Degree",
    shape: [
        [1, 1],
        [1, 0],
        [1, 0],
    ]
}
var jBlock3 = {
    type: "i180Degree",
    shape: [
        [1, 1, 1],
        [0, 0, 1],
    ]
}
var jBlock4 = {
    type: "i270Degree",
    shape: [
        [0, 1],
        [0, 1],
        [1, 1]
    ]
}
// T Block
var tBlock1 = {
    type: "tBase",
    shape: [
        [0, 1, 0],
        [1, 1, 1]
    ]
}
var tBlock2 = {
    type: "t90Degree",
    shape: [
        [1, 0],
        [1, 1],
        [1, 0]
    ]
}
var tBlock3 = {
    type: "t180Degree",
    shape: [
        [1, 1, 1],
        [0, 1, 0],
    ]
}
var tBlock4 = {
    type: "t270Degree",
    shape: [
        [0, 1],
        [1, 1],
        [0, 1],
    ]
}
// O Block
var oBlock = {
    type: "oBase",
    shape: [
        [1, 1],
        [1, 1]
    ]
}
const allForms = [

    tPieces = [  // [0][0]
        tBlock1, // [0][1]
        tBlock2, // [0][2]
        tBlock3, // [0][3]
        tBlock4  // [0][4]
    ],
    iPieces = [
        iBlock1, // [1][0]
        iBlock2, // [1][1]
        iBlock3, // [1][2]
        iBlock4  // [1][3]
    ],
    sPieces = [
        sBlock1,  // [2][0]
        sBlock2,  // [2][1]
        sBlock3,  // [2][2]
        sBlock4  // [2][3]
    ],
    zPieces = [
        zBlock1, // [3][0]
        zBlock2, // [3][1]
        zBlock3, // [3][2]
        zBlock4 // [3][3]
    ],
    lPieces = [
        lBlock1, // [4][0]
        lBlock2, // [4][1]
        lBlock3, // [4][2]
        lBlock4 // [4][3]
    ],
    jPieces = [
        jBlock1, // [5][0]
        jBlock2, // [5][1]
        jBlock3, // [5][2]
        jBlock4, // [5][3]
    ],
    oPieces = [
        oBlock, // [6][0]
        oBlock, // [6][1]
        oBlock, // [6][1]
        oBlock  // [6][1]
    ]
]
var tPieces = [
    tBlock1,
    tBlock2,
    tBlock3,
    tBlock4
]


var allPieces = [
    oBlock,
    tBlock1,
    zBlock1,
    sBlock1,
    jBlock1,
    lBlock1,
    iBlock1
];
