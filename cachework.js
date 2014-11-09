
var MainMemory, BlockSize, InputVal, Mod, CurrentID;
var NoOfAccess=0;
var NoOfHits=0;
var NoOfMiss = 0;
window.onload
{
    $("#access").val("0");
    $("#hits").val("0");
    $("#miss").val("0");
}
function CalMod(memory, blocksize, currentid) {
    this.MainMemory = memory;
    this.BlockSize = blocksize;
    this.CurrentID = currentid;
    var Mod = MainMemory % blocksize;
    var t = document.forms['cacheform'].getElementsByTagName('input').length;
    if (Mod == 0)
    {
        var f;
        for (var i = 0; i < t; i++)
        {
          
            if ($("#c" + i).val() == MainMemory)
            {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory)
            {
                f = false;

            }
        }
        
        if (f == true)
            {
        
            IncrementHit(CurrentID);
            }
            else if(f==false)
            {
                IncrementMiss(CurrentID);
            }
            else
            {
                alert("Unknown Value");
            }
        $("#c0").val(MainMemory);

    }
    else if (Mod == 1)
    {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c1").val(MainMemory);
    }
    else if (Mod == 2)
    {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c2").val(MainMemory);
    }
    else if (Mod == 3) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c3").val(MainMemory);
    }
    else if (Mod == 4) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c4").val(MainMemory);
    }
    else if (Mod == 5) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c5").val(MainMemory);
    }
    else if (Mod == 6) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c6").val(MainMemory);
    }
    else if (Mod == 7) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c7").val(MainMemory);
    }
    else if (Mod == 8) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c8").val(MainMemory);
    }
    else if (Mod == 9) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c9").val(MainMemory);
    }
    else if (Mod == 10) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }
        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c10").val(MainMemory);
    }
    else if (Mod == 11) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c11").val(MainMemory);
    }
    else if (Mod == 12) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }
        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c12").val(MainMemory);
    }
    else if (Mod == 13) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c13").val(MainMemory);
    }
    else if (Mod == 14) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c14").val(MainMemory);
    }
    else if (Mod == 15) {
        var f;
        for (var i = 0; i < t; i++) {

            if ($("#c" + i).val() == MainMemory) {
                f = true;
                break;
            }
            else if ($("#c" + i).val() != MainMemory) {
                f = false;

            }
        }

        if (f == true) {

            IncrementHit(CurrentID);
        }
        else if (f == false) {
            IncrementMiss(CurrentID);
        }
        else {
            alert("Unknown Value");
        }
        $("#c15").val(MainMemory);
    }
    else
    {
        alert("Wrong Value");
    }
   
};

function IncrementHit(itemno)
{
    NoOfAccess++;
    NoOfHits++;
    $("#access").val(NoOfAccess);
    $("#hits").val(NoOfHits);
    if (itemno == "m0")
    {
        $("span#lb0").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb0").text("Hit");
    }
    else if (itemno == "m1")
    {
        $("span#lb1").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb1").text("Hit");
    }
    else if (itemno == "m2") {
        $("span#lb2").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb2").text("Hit");
    }
    else if (itemno == "m3") {
        $("span#lb3").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb3").text("Hit");
    }
    else if (itemno == "m4") {

        $("span#lb4").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb4").text("Hit");
    }
    else if (itemno == "m5") {

        $("span#lb5").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb5").text("Hit");
    }

    else if (itemno == "m6") {

        $("span#lb6").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb6").text("Hit");
    }

    else if (itemno == "m7") {

        $("span#lb7").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb7").text("Hit");
    }

    else if (itemno == "m8") {

        $("span#lb8").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb8").text("Hit");
    }

    else if (itemno == "m9") {

        $("span#lb9").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb9").text("Hit");
    }

    else if (itemno == "m10") {

        $("span#lb10").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb10").text("Hit");
    }
    else if (itemno == "m11") {

        $("span#lb11").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb11").text("Hit");
    }
    else if (itemno == "m12") {

        $("span#lb12").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb12").text("Hit");
    }
    else if (itemno == "m13") {

        $("span#lb13").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb13").text("Hit");
    }
    else if (itemno == "m14") {

        $("span#lb14").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb14").text("Hit");
    }
    else if (itemno == "m15") {

        $("span#lb15").removeClass("label label-default label-danger lb").addClass("label label-success lbb");
        $("span#lb15").text("Hit");
    }
    else
    {
        alert("Unknown ID Of Hit Bar");
    }

    

}
function IncrementMiss(itemno)
{
    NoOfAccess++;
    NoOfMiss++;
    $("#access").val(NoOfAccess);
    $("#miss").val(NoOfMiss);
    if (itemno == "m0") {
        $("span#lb0").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb0").text("Miss");
    }
    else if (itemno == "m1") {
        $("span#lb1").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb1").text("Miss");
    }
    else if (itemno == "m2") {
        $("span#lb2").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb2").text("Miss");
    }
    else if (itemno == "m3") {
        $("span#lb3").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb3").text("Miss");
    }
    else if (itemno == "m4") {

        $("span#lb4").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb4").text("Miss");
    }
    else if (itemno == "m5") {

        $("span#lb5").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb5").text("Miss");
    }

    else if (itemno == "m6") {

        $("span#lb6").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb6").text("Miss");
    }

    else if (itemno == "m7") {

        $("span#lb7").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb7").text("Miss");
    }

    else if (itemno == "m8") {

        $("span#lb8").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb8").text("Miss");
    }

    else if (itemno == "m9") {

        $("span#lb9").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb9").text("Miss");
    }

    else if (itemno == "m10") {

        $("span#lb10").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb10").text("Miss");
    }
    else if (itemno == "m11") {

        $("span#lb11").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb11").text("Miss");
    }
    else if (itemno == "m12") {

        $("span#lb12").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb12").text("Miss");
    }
    else if (itemno == "m13") {

        $("span#lb13").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb13").text("Miss");
    }
    else if (itemno == "m14") {

        $("span#lb14").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb14").text("Miss");
    }
    else if (itemno == "m15") {

        $("span#lb15").removeClass("label label-default lb").addClass("label label-danger lbbb");
        $("span#lb15").text("Miss");
    }
    else {
        alert("Unknown ID Of Hit Bar");
    }

}

$("input").keypress(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        var currentId = $(this).attr('id');
        var mm = $("#"+currentId).val();
        CalMod(mm, 16,currentId);
    }
});

