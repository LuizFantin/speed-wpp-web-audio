
const interval = setInterval(()=>{
    const header = document.querySelector("._2O84H") 
    if(header){
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "1x"
        button.classList.add("twoTimesButton")
        const button2 = document.createElement("button")
        button2.innerHTML = "2x"
        button2.classList.add("twoTimesButton")

        button.style.color = "#4169e1"

        button.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 1
            })
            button.style.color = "#4169e1"
            button2.style.color = "#d3d3d3"

        })
        button2.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 2
            })
            button2.style.color = "#4169e1"
            button.style.color = "#d3d3d3"
        })

        header.appendChild(button)
        header.appendChild(button2)
    }
},1000)

