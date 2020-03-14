/**
 * Created by Юрий on 14.03.2020.
 */

function generateBlocks (){
    const dom = document;
    const element = dom.getElementById("box");
    element.innerHTML = "";
    const squareCount = 25;
   
    for (let i = 0; i < squareCount; i++) {
        const RGB = 16581375; // 255*255*255
        const colorNumber = "#" + (Math.floor(Math.random() * RGB )).toString(16);
        const div = dom.createElement("div");
        div.style.backgroundColor = colorNumber;
        div.classList = "square";
        element.append(div);
    }
}

// generateBlocks ();

function generateBlocksInterval() {
        setInterval( () => { generateBlocks () }, 1000 )
}
generateBlocksInterval ();




