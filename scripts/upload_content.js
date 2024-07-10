function contentUpload(){
    $("header").html("<p>Loading header....</p>");
    $("header").load("./header.html");
    $("footer").html("<p>Loading footer....</p>");
    $("footer").load("./footer.html");
}
$(document).ready(function(){
    contentUpload();
});