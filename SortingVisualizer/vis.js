var speed=100;
document.getElementById('arSpeed').innerHTML = speed;
inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    // console.log(array_speed);

    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    document.getElementById('arSpeed').innerHTML = speed;
   
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated on every div change so that visualization is visible.

function div_update(cont,height,color,i)
{
    window.setTimeout(function(){
        cont.style= "margin-left: " + (8*(100/array_size)*i) + "px; background-color:"+color+"; width:" + ((100/array_size)*5)+ "px; height:" + height + "% ;position: absolute; bottom: 150px ;";
        // cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)*i) + "%; height:" + height + "%; background-color:" + color + "; position: absolute; bottom: 150px ;";

    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}