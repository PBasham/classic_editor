console.log("JS is connected!")

$(document).ready(() => {
    console.log("Document Loaded")
    let temp = `<br data-cke-filler="true"></br>`

    let controleBar = $("#controle-bar")
    let editor = $("#editor")
    let firstParagraph = $("#starter-paragraph")
    // set these equal to the buttons. and track if the button is selected or not.
    let isBold = false
    let isItalic = false
    let isBulletPoints = false
    let isNumberList = false



    /*  --------------------------------------------------
            Event Listeners
    --------------------------------------------------  */
    // listen for backspace press.
    $("#editor").on("keyup", ((e) => {
        if (e.key === "Backspace") {
            if ($("#editor #starter-paragraph").length === 0) {
                editor.append(firstParagraph)
            }
        }
    }))

})

// console.log("creating new first paragraph")
// editor.insertBefore(firstParagraph, editor.firstChild)