//UNCOMMENT TO MAKE DESKTOP icon DRAGABLE
$('.window').draggable();
//$('.icon').draggable();

setInterval(function() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  m = m < 10 ? '0'+m : m;

  $(".dock-time").text(h+":"+m+" "+ampm);
}, 1000 //milliseconds
);


// Start menu
$('.start-btn').on('onmousedown', function(e){
   e.preventDefault();
  $(this).toggleClass('active');
  //$('.start-menu').toggleClass('open');
});


$('.start-btn').on('onmouseup', function(e){
  e.preventDefault();
  $(this).removeClass("active");
  //$('.start-menu').toggleClass('open');
});

// disable selection
function disableselect(e) {
  return false
}

function reEnable() {
  return true
}

document.onselectstart = new Function ("return false")

if (window.sidebar) {
  document.onmousedown = disableselect
  document.onclick = reEnable
}

// selection


var firstX, firstY, down = false;

$(".about").click(function() {
  $(".about").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = 'about.html';
});

$(".my-stuff").click(function() {
  $(".my-stuff").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = 'kewl.html';
});

$(".options").click(function() {
  $(".options").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = "options.html"
});

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
  }
  
  
  window.onload = function () { document.getElementById("options").selectedIndex = readCookie("myDDIdx"); } 

  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=myDDIdx";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function doSomething() {
    var myCookie = getCookie("myDDIdx");

    if (myCookie == 0) {
        // do cookie doesn't exist stuff;
    }
    else {
      setInterval(function() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        m=checkTime(m);
        function checkTime(i) {
          if (i<10) {
            i="0" + i;
          }
          return i;
        }
        $("#dock-time").text(h+":"+m);
      }, 1000);
    }
}

/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 1.2.3
 */
(function (a) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], a);
  } else {
    a(jQuery);
  }
})(function (c) {
  c.fn.overlaps = function (e) {
    return this.pushStack(d(this, e && c(e)));
  };
  function d(h, g) {
    var j = b(h),
      i = !g ? j : b(g),
      m = [],
      l = 0,
      k = 0,
      f = j.length,
      e = !g ? j.length : i.length;
    if (!g) {
      g = h;
    }
    for (; l < f; l++) {
      for (k = 0; k < e; k++) {
        if (h[l] === g[k]) {
          continue;
        } else {
          if (a(j[l], i[k])) {
            m.push(f > e ? h[l] : g[k]);
          }
        }
      }
    }
    return c.unique(m);
  }
  function b(e) {
    var j = [],
      f = 0,
      h,
      g;
    while ((g = e[f++])) {
      h = c(g).offset();
      j.push([h.top, h.left, g.offsetWidth, g.offsetHeight]);
    }
    return j;
  }
  function a(i, h) {
    var f = i[1],
      n = i[0],
      j = i[2],
      l = i[3],
      e = h[1],
      m = h[0],
      g = h[2],
      k = h[3];
    return !(m + k <= n || n + l <= m || e + g <= f || f + j <= e);
  }
});
