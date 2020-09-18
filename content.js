
const interval = setInterval(()=>{
    const header = document.querySelector("._1QUKR") 
    if(header){
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "1x"
        button.classList.add("twoTimesButton")
        const button2 = document.createElement("button")
        button2.innerHTML = "2x"
        button2.classList.add("twoTimesButton")

        button.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 1
            })
        })
        button2.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 2
            })
        })

        header.appendChild(button)
        header.appendChild(button2)
    }
},1000)
