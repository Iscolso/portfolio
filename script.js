function copiarCorreo(){
    let emailInput = document.getElementById("email");
    emailInput.select();
    document.execCommand("copy");
    alert("email copied: " + emailInput.value);
}

document.addEventListener("DOMContentLoaded", function(){
    const textElement = document.getElementById("typing-text");
    const text = "a developer and an engineering student.";
    let index = 0;

    function type(){
        if (index < text.length){
            textElement.textContent += text[index];
            index++;
            setTimeout(type,100);
        }
    }

    type();
});

