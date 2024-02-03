
const addItem = async (item) => {
    await timeDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
};

const timeDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};
async function main(){
    let t = setInterval(() => {
        let last = document.body.lastElementChild
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML += "."
        }
    }, 200);
    
    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up",
        "You are Hacked"
    ];
    
    
    for (const item of text) {
        await addItem(item);
        }

        await timeDelay();
        clearInterval(t);
    }

main()



