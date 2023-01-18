var inp_as=document.getElementById('changeSize'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("changeSpeed");

var butts_algos=document.querySelectorAll(".sortMethods button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
// cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    console.log("Function called");
    document.getElementById("arrayNo").innerHTML = array_size;
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    // for(var i=0;i<3;i++)
    {
        console.log(array_size);
        div_sizes[i]=Math.floor(Math.random() * 0.2*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        // divs[i].innerHTML = "Box" + i;
        // divs[i].style.margin
        // margin_size=0.1;
        divs[i].style=  "margin-left: " + (8*(100/array_size)*i) + "px; background-color: #1c0036; width:" + ((100/array_size)*5)+ "px; height:" + (div_sizes[i]) + "% ;position: absolute; bottom: 150px ;";
        // divs[i].style=  "margin-left: " + (8*(100/array_size)*i) + "px; background-color: white; width:" + ((100/array_size)*5)+ "px; height:" + (div_sizes[i]) + "% ;position: absolute; bottom: 150px ;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        // case "Quick Sort":Quick();
        //                 break;
        // case "Heap Sort":Heap();
        //                 break;
    }
}