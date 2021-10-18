var Body = {
  SetColor:function(BackGroundColor, Color){
    // var target = document.querySelector('body');
    // target.style.backgroundColor=BackGroundColor;
    // target.style.color=Color;
    $('body').css('backgroundColor', BackGroundColor);
    $('body').css('color', Color);
  }
}

var Links ={
  SetColor:function LinksSetColor(color){
    // var alist = document.querySelectorAll('a');
    // for(var i=0; i<alist.length; i++){
    //   alist[i].style.color = color;
    // }
    $('a').css('color', color)
  }
}

function ntToggleSet(self){
  var target = document.querySelector('body');
  var alist = document.querySelectorAll('a');
  if(self.value==='night'){
    self.value='day';
    Links.SetColor('powderblue');
    Body.SetColor('black','white');
  } else {
    self.value='night';
    Links.SetColor('blue');
    Body.SetColor('white','black');
  }
}
