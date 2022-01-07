let sec = 0;
let min = 0;
let hrs = 0;
let t;
let check = true;
$(function (){


        $("#start").on("click",function (){

            sec_pause();
            $(this).attr('disabled', true);
        });



    $("#stop").on("click",function ()
    {
        clearTimeout(t);
        check = true;
        $("#start").attr('disabled', false);
    });
    $("#reset").on("click", function(){
        $("#timer").text("00:00:00");
        sec = 0;
        min = 0;
        hrs = 0;

    });
});
function step()
{
    sec++;
    if(sec == 60)
    {
        sec = 0;
        min++;
    }
    if(min==60)
    {
        min = 0;
        hrs++;
    }
    console.log(sec,min);
}
function add()
{
    step();
    $("#timer").text((hrs>9? hrs:"0"+hrs)
        +":"+ (min>9? min:"0"+min)
        +":"+(sec>9 ? sec:"0"+sec));
    sec_pause();
}
function sec_pause()
{

    t = setTimeout(add,1000);
}