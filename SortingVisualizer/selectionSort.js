function Selection_sort()
{
    c_delay = 0;

    for(var i=0 ; i<array_size-1;i++)
    {
        var min = i;
        div_update(divs[i],div_sizes[i],"yellow",i);
        for(var j = i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"orange",j);

            if(div_sizes[j] < div_sizes[min]){
                
                div_update(divs[j],div_sizes[j], "red",j);

                if(min!=i){
                    div_update(divs[min],div_sizes[min], "#1c0036",min);
                }
                min = j;
            }

            else{
                div_update(divs[j],div_sizes[j],"#1c0036",j);
            }

        }
        div_update(divs[min],div_sizes[min],"blue",min);        
        div_update(divs[i],div_sizes[i],"blue",i);
    
        if(div_sizes[min]==div_sizes[i]){
            div_update(divs[i],div_sizes[i], "green",i);
            div_update(divs[min],div_sizes[min], "green",min); 
            
        }

        else{
            // Performing the swapping 
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[min];
            div_sizes[min]=temp;
        
            // Updating the height
            div_update(divs[i],div_sizes[i], "green",i);
            div_update(divs[min],div_sizes[min], "#1c0036",min); 
        }
    }
    div_update(divs[array_size-1],div_sizes[array_size-1], "green",array_size-1);
    enable_buttons();
}