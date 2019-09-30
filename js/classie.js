/*!
 * classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

  

})( window );

/*right click diseable */

window.oncontextmenu = function () {
    console.log("Right Click Disabled");
    return false;
}


//////////F12 disable code//////////////////////// 
document.onkeypress = function (event) {
    event = (event || window.event); if (event.keyCode == 123) { //alert('No F-12'); 
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event); if (event.keyCode == 123) { //alert('No F-keys'); 
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event); if (event.keyCode == 123) { //alert('No F-keys'); 
        return false;
    }
}
/////////////////////end/////////////////////// 


var isCtrl = false;
document.onkeyup = function (e) {
    if (e.which == 17) isCtrl = false;
}
document.onkeydown = function (e) {
    if (e.which == 17) isCtrl = true;
    if (e.which == 85 && isCtrl == true) {
        //run code for CTRL+U -- ie, whatever!
        //alert('CTRL + U stuff');
        return false;
    }
}

/////////////////////end/////////////////////// 
window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});