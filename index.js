let chessminidescription = ["Created a playable chess application independently <span>within 60 hours</span>", "Optimized algorithms and optimized methods to <span>reduce energy and memory impact</span>", 
"<span>Techstack:</span> Xcode, Swift", '<a target="_blank" href="https://apps.apple.com/us/app/chessmini-made-for-mobile/id6449878204">project link</a> | <a target="blank" href="https://github.com/emekamoemeka/Chess-Mini">view repository</a>']

let wordleracedescription = ["Created a <span>functioning clone</span> of the popular word puzle wordle, adding several <span>additional features </span>", "<span>Tracked various changes</span> and <span>accelorated development time </span>trough proper use of version control", 
"<span>Techstack:</span> HTML, CSS, javascript, git", '<a target="_blank" href="https://wordlerace.com/" >project link</a> | <a target="blank" href="https://github.com/emekamoemeka/Wordle-Race">view repository</a>']

let nextButton = document.getElementById("nextButton")
let wordleSampleImage = document.getElementById("wordleSampleImage")
let wordleSamplePoints = Array.from(document.getElementById("wOne").querySelectorAll("li"))
wordleSamplePoints = wordleSamplePoints.concat(Array.from(document.getElementById("wTwo").querySelectorAll("li")))

let chessMiniSampleImage = document.getElementById("chessMiniSampleImage")
let chessMiniSamplePoints = Array.from(document.getElementById("cOne").querySelectorAll("li"))
nextButton.addEventListener('click', buttonClickHandler);


let projectTitle = document.getElementById("projectDescription").querySelector("h4")
let projectDescription = Array.from(document.getElementById("projectDescription").querySelectorAll("h5"))
sampleIndex = 0


function buttonClickHandler() {
    // turn off wordle
    if (sampleIndex == 0) {
        wordleSampleImage.style.opacity = '0.25'
        wordleSampleImage.style.zIndex = '0'
        sampleIndex = 1
        for (let i = 0; i < wordleSamplePoints.length; i++) {
            wordleSamplePoints[i].style.visibility = 'hidden'
        }
        // turn on chess
        projectTitle.innerHTML = "<span>Chessmini - iOS application</span>"
        for (let i = 0; i < projectDescription.length; i++) {
            projectDescription[i].innerHTML = chessminidescription[i]
        }

        chessMiniSampleImage.style.opacity = '1'
        chessMiniSampleImage.style.zIndex = '10'
        for (let i = 0; i < wordleSamplePoints.length; i++) {
            chessMiniSamplePoints[i].style.visibility = 'visible'
        }
    }
    else {
        //turn on wordle
        projectTitle.innerHTML = "<span>Wordle Race - website</span>"
        for (let i = 0; i < projectDescription.length; i++) {
            projectDescription[i].innerHTML = wordleracedescription[i]
        }

        wordleSampleImage.style.opacity = '1'
        wordleSampleImage.style.zIndex = '10'
        for (let i = 0; i < wordleSamplePoints.length; i++) {
            wordleSamplePoints[i].style.visibility = 'visible'
        }
        // turn off chess
        chessMiniSampleImage.style.opacity = '0.25'
        chessMiniSampleImage.style.zIndex = '0'
        for (let i = 0; i < wordleSamplePoints.length; i++) {
            chessMiniSamplePoints[i].style.visibility = 'hidden'
        }
        sampleIndex = 0
    }
}

