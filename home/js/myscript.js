function updateParagraph() {
    try {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    } catch (error) {
        console.error("Error updating paragraph: ", error);
    }
}
