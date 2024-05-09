const input = prompt("what fruit do you like?");
const css = "color: #ffffff";

switch (input) {
  case "orange": {
    const css = "color: #FFA500";
    console.log("%orange!", css);
    break;
  }
  case "lemon":
    const css = "color: #FFFF00";
    console.log("%yellow!", css);
    break;
  default:
    console.log("no color for you");
}
