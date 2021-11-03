

var text = "Hello"
var expV = {
  chrome: 100,
  firefox: 50,
  MSIE: 20,
  edge: 20,
  safari: 20, 
};

var ua = navigator.userAgent,
browserName,
versionNum,
versionStr;

var url = 'versionReview.html'
var border = 'none'
var bgc = 'white'
window.onload = function onload() {

  //function for getting into a specific browser
  function specific(version) {
    if (versionNum < version) {
      // alert(`You're  browser version ${versionStr} is outdated `);
      document.getElementById( "inner" ).innerHTML = `You're browser version ${versionStr} is outdated <br> <br><a href="${url}"><b class="btn" >View Details</b></a>`;
      let btn = document.createElement("button")
      btn.innerHTML= 'View Details'
      document.div.appendChild(btn)
      // disableScroll();
      disableScroll2();
    } else {
      const m = document.querySelector("#outer");
      m.style.display = "none";
      // elem.parentNode.removeChild(elem)
      //  elem.parentElement.removeChild(elem);
      // elem.parentNode.removeChild
    }
  }
  //disable scrolling function 1
  function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  //disable scrolling function 2
  function disableScroll2() {
    document.body.classList.add("stop-scrolling");
  }

  //enable scrolling
  function enableScrolling() {
    window.onscroll = function () {};
  }
  function enableScrolling2() {
    document.body.classList.remove("enable-scrolling");
  }
// function to Check the version of ther user
  function V(){
   
    var browserList = ["Chrome", "Firefox", "MSIE", "Edge"]; //browser list
    for (var i = 0; i < browserList.length; i++) {
      if (ua.indexOf(browserList[i]) > -1) {
        browserName = browserList[i];
        //subName from the browserName to the end of the string
        var subName = ua.split(browserName + "/")[1];
  
        // console.log(`version Length ${subName.length}`);
        // console.log(`first char ${subName[0]}`);
  
        //nameArr separates the subName string where ever there's a space
        var nameArr = subName.split(" ");
  
        //versionNumber is the float point number of the version of the browser
        versionNum = parseFloat(subName);
  
        //versionStr is the string Name of the user's version
        versionStr = nameArr[0];
        // console.log(nameArr[0]);
        // console.log("parseInt Fxn " + versionNum);
      }
    }
    document.getElementById("inner").innerHTML = toString(versionStr);
  }
 V();

  //checking if the browser version is depreciated
  if (browserName === "FireFox") {
    specific(expV.firefox);
  } else if (browserName === "Chrome") {
    specific(expV.chrome);
  } else if (browserName === "MSIE") {
    specific(expV.MSIE);
  } else if (browserName === "Edge") {
    specific(expV.Edge);
  } else if (browserName === "Safari") {
    specific(expV.safari);
  }
};
