function Insertion()
{
    // console.log("Inside function");
    c_delay=0;
    // div_update(divs[0],div_sizes[0],"yellow",0);
    // for(var j=0;j<array_size;j++)
    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow",j);

        var key= div_sizes[j];
        var i=j-1;
        // while(i>=0 && div_sizes[i]>key)
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red",i);
            div_update(divs[i+1],div_sizes[i+1],"red",i+1);
            
            var temp = div_sizes[i+1];
            div_sizes[i+1]=div_sizes[i];
            div_sizes[i] = temp;

            // div_update(divs[i],div_sizes[i],"red",i);
            // div_update(divs[i+1],div_sizes[i+1],"red",i+1);
    
            div_update(divs[i],div_sizes[i],"blue",i);

            // not here
            div_update(divs[i+1],div_sizes[i+1],"blue",i+1);

            // if(i==(j-1))
            // {
            //     div_update(divs[i+1],div_sizes[i+1],"yellow",i+1);
            // }
            // else
            // {
            //     div_update(divs[i+1],div_sizes[i+1],"blue",i+1);
            // }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            // div_update(divs[t],div_sizes[t],"#1c0036",t);//Color update
            div_update(divs[t],div_sizes[t],"green",t);//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green",j-1);//Color update
    // div_update(divs[j-1],div_sizes[j-1],"#1c0036",j-1);//Color update

    enable_buttons();
}
