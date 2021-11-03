
{
  var f = getVersion;
  function getVersion() {
    let name = navigator.appVersion;
    let version = navigator.appVersion;
    // console.log(name + "" + version);
    document.getElementById("disp").innerHTML = name + "br";
    // document.write(navigator.userAgent)
  }
}
var arrayB = getVersion2;
function getVersion2() {
  //   let var =  Liferay.Browser.getMajorVersion();
  var browserArr = ["Chrome", "Firefox", "MSIE", "Edge"];
  var array = navigator.userAgent;
  var browserName;
  for (var i = 0; i < browserArr.length; i++) {
    if (array.indexOf(browserArr[i]) > -1) {
      browserName = browserArr[i];
      var ver2 = array.split(browserName + '/')[1];
    //   var ver2 = navigator.userAgent.;
    //   console.log( array.split('Chrome/')[1]);
      console.log(`version Length ${ver2.length}`);
      console.log(`first char ${ver2[0]}`)
     var ver3 = ver2.split(" ");
    var ver4 =  parseFloat(ver2)
    console.log(ver3[0])
      console.log('parseInt Fxn ' + ver4);
    //   console.log(`\n ${navigator.appVersion}`);
      break;
      console.log(`${navigator.version}`);
    }
  
  
  document.getElementById("disp2").innerHTML =( browserName + " browser. Version " + ver2) ;
  
  if(ver4>50){
      alert('Testing')
     
     
      }
    
  }
}
// remove element from dom
function remove(){
    const elem = document.querySelector('#disp2');
    elem.style.display = 'none'
    // elem.parentNode.removeChild(elem)
    //  elem.parentElement.removeChild(elem);
    window.scroll() = f;
    var f = 45;
    // elem.parentNode.removeChild
}
function removeModal(){
    const m = document.querySelector('#outer');
    m.style.display = 'none'
    // elem.parentNode.removeChild(elem)
    //  elem.parentElement.removeChild(elem);
    // elem.parentNode.removeChild
}

//disable scrolling
function disableScroll(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrolllLeft = window.pageXOffset || document.documentElement.scrollLeft
    window.onscroll = function(){
        window.scrollTo(scrollLeft,scrolllTop)
    }
}
//enable scrolling
function enableScrolling(){
    window.onscroll = function(){};
}