const generateButton = document.getElementById("generateButton")
const input = document.getElementById("inputText")
const response = document.getElementById("responseElement")

generateButton.onclick = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/generate/", {
            prompt: input.value
        })
        const output = await res.json()

        response.innerHTML = "<b>GenAI: </b>" + await output
    } catch (error) {
        console.log(error)
    }
}