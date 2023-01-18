function Bubble()
{
    // //Setting Time complexities
    // console.log("Inside the bubble sort This is made now ")
    // document.getElementById("Time_Worst").innerText="O(N^2)";
    // document.getElementById("Time_Average").innerText="Θ(N^2)";
    // document.getElementById("Time_Best").innerText="Ω(N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;
    var i_val = 0;
    for(var i=0;i<array_size-1;i++)
    {
        var temp = 0;
        for(var j=0;j<array_size-i-1;j++)
        {
            // Yellow color to show the selected one & orange for compare block
            div_update(divs[j],div_sizes[j],"yellow",j);

            div_update(divs[j+1],div_sizes[j+1],"orange",j+1);


            if(div_sizes[j]>div_sizes[j+1])
            {
                temp = 1;
                // Setting the color red if the position is not correct
                div_update(divs[j],div_sizes[j], "red",j);
                div_update(divs[j+1],div_sizes[j+1], "red",j+1);

                // Performing the swapping 
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                // Updating the height
                div_update(divs[j],div_sizes[j], "red",j);
                div_update(divs[j+1],div_sizes[j+1], "red",j+1);
                
            }

            // Setting the compared block to blue
            div_update(divs[j],div_sizes[j], "#1c0036",j);
            
        }
        // Setting the sorted block(larger block) to green
        div_update(divs[j],div_sizes[j], "green",j);
        if(temp==0)
        {
            break;
        }
        
    }

    // Setting the first block to green
    div_update(divs[0],div_sizes[0], "green");
    for(var i=0;i<array_size-1;i++){
        div_update(divs[i],div_sizes[i], "green",i);
    }

    enable_buttons();
}
