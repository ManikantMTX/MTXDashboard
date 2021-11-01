function bgcolor(){
  var val = document.getElementById("favcolor");
  document.getElementById("bgbody").style.backgroundColor = val.value;
  document.getElementById("bgform").style.backgroundColor = val.value;
}

function myIconClick() {
  document.getElementById("favcolor").click(); 
}

$(document).ready(function () {
  var tagList = ['MTXtian', 'Angular', 'Node', 'React'];
  
  var $tagList = $("#tagList");
  var $newTag = $("#newTag");

  tagList_render();

  function tagList_render () {
    $tagList.empty();
    tagList.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList.append(temp);
    });
  };
  
  $newTag.on('keyup', function (e) {
    if (e.keyCode == 13) {
      var newTag = $("#newTag").val();
      if( newTag.replace(/\s/g, '') !== '' ){
        tagList.push(newTag);
        $newTag.val('');
        tagList_render();
      }
    }
  });
  
  $tagList.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList.splice(index, 1);
    tagList_render();
  });
})();

function submitName(){
  var ename = document.getElementById("name").value;
  document.getElementById("myname").innerHTML = "Hello "+ename+"!";
  document.getElementById("namediv").style.display = "none";
  document.getElementById("tagdiv").style.display = "block";
}