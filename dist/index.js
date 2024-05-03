"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["medium"] = 2] = "medium";
    Size2[Size2["large"] = 3] = "large";
})(Size2 || (Size2 = {}));
var Size3;
(function (Size3) {
    Size3["Small"] = "S";
    Size3["Medium"] = "M";
    Size3["Large"] = "L";
})(Size3 || (Size3 = {}));
const mySize = Size2.medium;
console.log(mySize);
//# sourceMappingURL=index.js.map