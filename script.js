function copiarCorreo(){
    let emailInput = document.getElementById("email");
    emailInput.select();
    document.execCommand("copy");
    alert("email copied: " + emailInput.value);
}