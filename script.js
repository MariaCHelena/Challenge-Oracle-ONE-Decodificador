const inputTexto = document.querySelector(".textEntrada");
const mensagem = document.querySelector(".textSaida");
mensagem.disabled = "true";
fundoMensagem();

function BtnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    fundoMensagem();
}

function BtnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

function copiar(){
    let textCopy = mensagem.value;
    navigator.clipboard.writeText(textCopy);
}

function fundoMensagem(){
    if(mensagem.value == ''){
        document.querySelector('.ativado').style.display = 'none';
        document.querySelector('.desativado').style.display = 'flex';
    } else {
        document.querySelector('.ativado').style.display = 'flex';
        document.querySelector('.desativado').style.display = 'none';
    }
}