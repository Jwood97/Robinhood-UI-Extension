function colorReplace(findHexColor, replaceWith) {
  // Convert rgb color strings to hex
  // REF: https://stackoverflow.com/a/3627747/1938889
  function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  // Select and run a map function on every tag
  $('*').map(function(i, el) {
    // Get the computed styles of each tag
    var styles = window.getComputedStyle(el);

    // Go through each computed style and search for "color"
    Object.keys(styles).reduce(function(acc, k) {
      var name = styles[k];
      var value = styles.getPropertyValue(name);
      if (value !== null && name.indexOf("color") >= 0) {
        // Convert the rgb color to hex and compare with the target color
        if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
          // Replace the color on this found color attribute
          $(el).css(name, replaceWith);
        }
      }
    });
  });
}
function rgb2hex(rgb) {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
 $(document).ready(function() {

  window.setInterval(function(){
    /// call your function here
    // console.log("[] Document ready. Replacing Colors.")
    // colorReplace("rgba(0, 200,5,1)", rgb2hex("rgb(88, 193, 156)"));
    $("div").each(function () {
      var color = $(this).css("color");
      if (color == "rgba(0, 200,5,1)") {
          $(this).css("color", "rgb(88, 193, 156)!important");
      }
  });
  $(".css-1vdcxym").each(function () {
    var color = $(this).css("color");
    if (color == "rgba(0,200,5,1)") {
        $(this).css("color", "rgb(88, 193, 156)!important");
    }
});
  
  }, 5000);
  // rgb2hex("rgba(0,200,5,1)", "rgba(88, 193, 156)")
    // $(function(){
    //     $("span").each(function(){
    //       var $this = $(this);
    //       $this.attr("data-content", $this.text());
    //     });
    //   });
    //   var elms = document.evaluate( "//span[contains(., '+')]", node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null )
    //   for ( var i=0 ; i < elms.snapshotLength; i++ ){
    //     elms.snapshotItem(i).style.color = "rgb(85, 187, 151)";
    //  }
 });