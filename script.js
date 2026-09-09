let primeiraEscolha = "";
let segundaEscolha = "";
let terceiraEscolha = "";

function esconderTodas() {
    document.getElementById("inicio").classList.add("escondida");
    document.getElementById("pergunta2").classList.add("escondida");
    document.getElementById("pergunta3").classList.add("escondida");
    document.getElementById("resultado").classList.add("escondida");
}


function escolherInicio(escolha) {

    primeiraEscolha = escolha;

    esconderTodas();

    document.getElementById("pergunta2").classList.remove("escondida");
}


function escolherPergunta2(escolha) {

    segundaEscolha = escolha;

    esconderTodas();

    document.getElementById("pergunta3").classList.remove("escondida");
}


function escolherPergunta3(escolha) {

    terceiraEscolha = escolha;

    criarHistoria();

    esconderTodas();

    document.getElementById("resultado").classList.remove("escondida");
}


function criarHistoria() {

    let texto = "";

    if (
        primeiraEscolha === "assustador" &&
        segundaEscolha === "naoUsar" &&
        terceiraEscolha === "controle"
    ) {

        texto = `
            Você ficou preocupado com o crescimento da inteligência artificial.
            Por isso, decidiu aprender mais sobre a tecnologia antes de utilizá-la.

            Você percebeu que a IA poderia trazer muitos benefícios, mas também
            poderia causar problemas se fosse utilizada sem responsabilidade.

            No futuro, você se tornou uma pessoa que defendia o uso consciente
            da inteligência artificial e ajudou outras pessoas a entenderem
            como utilizar essa tecnologia de maneira segura.

            <br><br>

            <strong>Seu futuro: a tecnologia evoluiu, mas com responsabilidade.</strong>
        `;

    } else if (
        primeiraEscolha === "maravilhoso" &&
        segundaEscolha === "usar" &&
        terceiraEscolha === "liberdade"
    ) {

        texto = `
            Você ficou impressionado com as possibilidades da inteligência
            artificial.

            Começou a utilizá-la nos estudos, na criação de imagens e em
            diversos projetos. A tecnologia ajudou você a aprender coisas
            novas e desenvolver ideias que pareciam impossíveis.

            Porém, com o passar dos anos, a IA ficou tão avançada que começou
            a tomar decisões cada vez mais importantes.

            Você percebeu que a tecnologia precisava ser acompanhada pelos
            seres humanos.

            <br><br>

            <strong>Seu futuro: inovação sem esquecer a responsabilidade.</strong>
        `;

    } else {

        texto = `
            Suas escolhas levaram você para um caminho diferente.

            Você decidiu aproveitar os benefícios da inteligência artificial,
            mas também percebeu que algumas decisões deveriam continuar nas
            mãos das pessoas.

            No futuro, a sociedade aprendeu a trabalhar junto com a IA.
            Humanos e máquinas passaram a colaborar em áreas como educação,
            ciência, arte e meio ambiente.

            A grande lição foi perceber que o futuro da inteligência artificial
            não depende apenas da tecnologia.

            Ele depende principalmente das escolhas das pessoas.

            <br><br>

            <strong>Seu futuro: você ajudou a construir um equilíbrio entre
            humanos e tecnologia.</strong>
        `;
    }

    document.getElementById("historia").innerHTML = texto;
}


function reiniciar() {

    primeiraEscolha = "";
    segundaEscolha = "";
    terceiraEscolha = "";

    esconderTodas();

    document.getElementById("inicio").classList.remove("escondida");
}
