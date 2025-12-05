const kcs = [
    "KC 5 – Vantagens de computação em Nuvem",
    "KC 208 - O que é a AWS?",
    "KC 6 – Definição de preços",
    "KC 7 – Visão geral da infraestrutura da AWS - Parte II / Serviços e categorias da AWS",
    "KC 8 – Modelo de Responsabilidade compartilhada da AWS",
    "KC 209 – S3 da Amazon",
    "KC 9 – Overview da Console AWS / Elastic Compute da AWS / Subindo uma máquina Windows e uma máquina Linux",
    "KC 10– Redes na Nuvem AWS - Parte I",
    "KC 12 - Redes na Nuvem AWS - Parte II",
    "KC 282 - Nuvem, Internet e DataCenter / Introdução à Segurança",
    "KC 288 - AWS CloudTrail",
    "KC 291 - AWS Trusted Advisor",
    "KC 292 - Práticas recomendadas de segurança / Conformidade de segurança da AWS / Recursos de segurança da AWS",
    "KC 295 - Práticas recomendadas de segurança / Conformidade de segurança da AWS / Recursos de segurança da AWS",
    "KC 296 - Amazon RDS",
    "KC 297 - Amazon RDS",
    "KC 298 - Demonstração do Amazon RDS",
    "KC 308 - Demonstração do Amazon RDS",
    "KC 167 - [JAWS]-KC - Well-Architected Framework",
    "KC 210 - JAWS -KC - Visão geral das operações do sistema",
    "KC 211 - JAWS -KC - Ferramentas e automação",
    "KC 212 - JAWS -KC - Computação (servidores)",
    "KC 213 - JAWS -KC - Computação (dimensionamento e resolução de nomes)",
    "KC 214 - JAWS -KC - Computação (contêineres)",
    "KC 215 - JAWS -KC - Computação (bancos de dados)",
    "KC 216 - Serviços de rede AWS",
    "KC 217 - JAWS -KC - Armazenamento e arquivamento",
    "KC 218 - JAWS -KC - Monitoramento e segurança",
    "KC 219 - JAWS -KC - Gerenciando o consumo de recursos",
    "KC 220 - JAWS -KC - Criando implantações repetíveis automatizadas",
    "KC 195 - CERT - KC - Preparação da Certificação do Cenário de Avaliação",
    "KC 196 - CERT - KC - Prática de estratégia de teste de cenário",
    "KC 197 - CERT - KC - Computação em nuvem",
    "KC 198 - CERT - KC - Economia da nuvem",
    "KC 199 - CERT - KC — Infraestrutura global da AWS",
    "KC 200 - CERT - KC - Compute",
    "KC 201 - CERT - KC - Gerenciamento de identidade e acesso [IAM]",
    "KC 202 - CERT - KC - Amazon Virtual Private Cloud [VPC]",
    "KC 203 - CERT - KC - Armazenamento",
    "KC 204 - CERT - KC - Bancos de dados",
    "KC 205 - CERT - KC - Cobrança e suporte",
    "KC 206 - CERT - KC - Arquitetura em nuvem",
    "KC 207 - CERT -KC - Balanceamento - Dimensionamento - Monitoramento",
    "Parabéns, você conseguiu passar pelo AWS Re/Start!"

];

const labs = [
    "Lab 11 - Redes na Nuvem AWS - Parte II",
    "Lab 267 - Redes na Nuvem AWS - Parte II",
    "Lab 279 - Security Groups da AWS / AWS IAM",
    "Lab 160 - Amazon DynamoDB / LAB DynamoDB",
    "Lab 168 - Instalar e configurar a CLI da AWS",
    "Lab 169 - Usar o AWS Systems Manager",
    "Lab 170 - Criar um site no S3",
    "Lab 171 - Criando instâncias do Amazon EC2",
    "Lab 172 - [Desafio] Exercício de instância do EC2",
    "Lab 173 - Solucionar problemas para criar uma instância",
    "Lab 174 - Dimensionar e balancear a carga da arquitetura",
    "Lab 175 - Usar o Auto Scaling na AWS (Linux)",
    "Lab 176 - Roteamento de failover do Route 53",
    "Lab 178 - Trabalhar com o AWS Lambda",
    "Lab 177 - [Desafio] Exercício do AWS Lambda",
    "Lab 179 - Migrar para o Amazon RDS",
    "Lab 180 - Configurar uma Amazon VPC",
    "Lab 181 - Solucionar problemas de uma VPC",
    "Lab 182 - Trabalhar com o Amazon EBS",
    "Lab 183 - Gerenciar o armazenamento",
    "Lab 184 - [Desafio] Exercício de S3",
    "Lab 185 - Trabalhar com o Amazon S3",
    "Lab 186 - Monitorar a infraestrutura",
    "Lab 187 - Trabalhar com o AWS CloudTrail",
    "Lab 188 - Gerenciar recursos com marcação",
    "Lab 189 - Otimizar a utilização",
    "Lab 190 - Automatização de implantações com o AWS CloudFormation",
    "Lab 191 - Solucionar problemas de implantações do AWS CloudFormation",
    "Lab 192 - [Desafio] CloudFormation",
    "Lab 316 - [AI]-Amazon SageMaker - Training a machine-learning model",
    "Parabéns, você conseguiu passar pelo AWS Re/Start!"
];

// ---------------------------
// Renderização das tarefas
// ---------------------------
function carregar() {
    const salvo = JSON.parse(localStorage.getItem("progressoCurso")) || {};
    const kcsDiv = document.getElementById("kcs");
    const labsDiv = document.getElementById("labs");

    kcsDiv.innerHTML = "";
    labsDiv.innerHTML = "";

    // Render KC's
    kcs.forEach((tarefa, i) => {
        const feita = salvo["kc_" + i] === true;

        const div = document.createElement("div");
        div.className = "task" + (feita ? " done" : "");
        div.innerText = tarefa;
        div.onclick = () => toggle("kc_" + i);

        kcsDiv.appendChild(div);
    });

    // Render Labs
    labs.forEach((tarefa, i) => {
        const feita = salvo["lab_" + i] === true;

        const div = document.createElement("div");
        div.className = "task" + (feita ? " done" : "");
        div.innerText = tarefa;
        div.onclick = () => toggle("lab_" + i);

        labsDiv.appendChild(div);
    });

    atualizarProgresso();
}

// ---------------------------
// Marcar / desmarcar tarefa
// ---------------------------
function toggle(key) {
    const salvo = JSON.parse(localStorage.getItem("progressoCurso")) || {};
    salvo[key] = !salvo[key];
    localStorage.setItem("progressoCurso", JSON.stringify(salvo));
    carregar();
}

// ---------------------------
// Barra de progresso
// ---------------------------
function atualizarProgresso() {
    const salvo = JSON.parse(localStorage.getItem("progressoCurso")) || {};
    const total = kcs.length + labs.length;
    let feitas = 0;

    Object.values(salvo).forEach(v => {
        if (v) feitas++;
    });

    const porcentagem = total === 0 ? 0 : Math.round((feitas / total) * 100);

    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progressText");

    bar.style.width = porcentagem + "%";
    text.innerText = porcentagem + "%";
}



// ---------------------------
// Reset
// ---------------------------
document.getElementById("resetBtn").onclick = () => {
    localStorage.removeItem("progressoCurso");
    carregar();
};

// ---------------------------
// Tema + troca automática do ícone
// ---------------------------
const themeToggle = document.getElementById("themeToggle");

function atualizarIconeTema() {
    const resetBtn = document.getElementById("resetBtn");

    if (document.body.classList.contains("dark")) {
        themeToggle.src = "assets/img/sun.png";      // tema escuro → mostra sol
        resetBtn.src = "assets/img/reiniciar_branco.png"; // ícone reset escuro
    } else {
        themeToggle.src = "assets/img/moon.png";     // tema claro → mostra lua
        resetBtn.src = "assets/img/reiniciar_preto.png"; // ícone reset claro
    }
}




themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("temaEscuro", document.body.classList.contains("dark"));
    atualizarIconeTema();
};

// Carregar tema salvo
if (localStorage.getItem("temaEscuro") === "true") {
    document.body.classList.add("dark");
}
atualizarIconeTema();

// Inicializar
carregar();
