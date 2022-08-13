function generate()
{
    for(let i=1; i<=16;i++)
    {
        const container = document.querySelector('#container');
        const row= document.createElement('div');
        container.append(row);
        for(let j=1;j<=6;j++)
        {     
            const box = document.createElement('div');
           box.textContent = "   ";
            row.append(box);
            box.style.cssText = ' border: 2px ; height: 90px;  width: 90px;'; 
            box.addEventListener('mouseenter', (event) => {
            switch(j)
            {
                case 1:box.style.backgroundColor = "#f4b400"; break;
                case 2:box.style.backgroundColor = "#4285f4"; break;
                case 3:box.style.backgroundColor = "#db4437"; break;
                case 4:box.style.backgroundColor = "#0f9d58"; break;
                case 5:box.style.backgroundColor = "#4285f4"; break;
                case 6:box.style.backgroundColor = "#f4b400"; break;
            }
            });
        }
    }       
}
generate();
