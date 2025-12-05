// ============================
// LISTAS COM DATAS
// ============================

const kcs = [
    { title: "KC 5 – O que é computação em nuvem?", deadline: "expirado" },
    { title: "KC 208 - Vantagens da computação em nuvem", deadline: "expirado" },
    { title: "KC 6 – O que é a Amazon Web Services?", deadline: "expirado" },
    { title: "KC 7 – Fundamentos da definição de preço da AWS", deadline: "expirado" },
    { title: "KC 8 – Visão geral da infraestrutura da AWS", deadline: " expirado" },
    { title: "KC 209 – Serviços e categorias da AWS", deadline: "expirado" },
    { title: "KC 9 – Modelo de responsabilidade compartilhada", deadline: "expirado" },
    { title: "KC 10 – Introdução ao Amazon S3", deadline: "08/12/2025" },
    { title: "KC 12 – Introdução ao Amazon EC2", deadline: "08/12/2025" },
    { title: "KC 282 – Introdução à segurança", deadline: "08/12/2025" },
    { title: "KC 288 – Prevenção: Gerenciamento de identidades", deadline: "08/12/2025" },
    { title: "KC 291 – AWS CloudTrail", deadline: "08/12/2025" },
    { title: "KC 292 – AWS Config", deadline: "15/12/2025" },
    { title: "KC 295 – Trusted Advisor", deadline: "15/12/2025" },
    { title: "KC 296 – Práticas recomendadas de segurança para a criação de conta", deadline: "15/12/2025" },
    { title: "KC 297 – Programa de conformidade de segurança da AWS", deadline: "15/12/2025" },
    { title: "KC 298 – Recursos de segurança da AWS", deadline: "15/12/2025" },
    { title: "KC 309 – Amazon DynamoDB", deadline: "N/A" },
    { title: "KC 308 – Amazon RDS", deadline: "15/12/2025" },
    { title: "KC 167 - JAWS - KC - Well-Architected Framework", deadline: "N/A" },
    { title: "KC 210 - JAWS - KC - Visão geral das operações do sistema", deadline: "N/A" },
    { title: "KC 211 - JAWS - KC - Ferramentas e automação", deadline: "N/A" },
    { title: "KC 212 - JAWS - KC - Computação (servidores)", deadline: "N/A" },
    { title: "KC 213 - JAWS - KC - Computação (dimensionamento e resolução de nomes)", deadline: "N/A" },
    { title: "KC 214 - JAWS - KC - Computação (contêineres)", deadline: "N/A" },
    { title: "KC 215 - JAWS - KC - Computação (bancos de dados)", deadline: "N/A" },
    { title: "KC 216 - Serviços de rede AWS", deadline: "N/A" },
    { title: "KC 217 - JAWS - KC - Armazenamento e arquivamento", deadline: "N/A" },
    { title: "KC 218 - JAWS - KC - Monitoramento e segurança", deadline: "N/A" },
    { title: "KC 219 - JAWS - KC - Gerenciando o consumo de recursos", deadline: "N/A" },
    { title: "KC 220 - JAWS - KC - Criando implantações repetíveis automatizadas", deadline: "N/A" },
    { title: "KC 195 - CERT - KC - Preparação da Certificação do Cenário de Avaliação", deadline: "N/A" },
    { title: "KC 196 - CERT - KC - Prática de estratégia de teste de cenário", deadline: "N/A" },
    { title: "KC 197 - CERT - KC - Computação em nuvem", deadline: "N/A" },
    { title: "KC 198 - CERT - KC - Economia da nuvem", deadline: "N/A" },
    { title: "KC 199 - CERT - KC - Infraestrutura global da AWS", deadline: "N/A" },
    { title: "KC 200 - CERT - KC - Compute", deadline: "N/A" },
    { title: "KC 201 - CERT - KC - Gerenciamento de identidade e acesso [IAM]", deadline: "N/A" },
    { title: "KC 202 - CERT - KC - Amazon Virtual Private Cloud [VPC]", deadline: "N/A" },
    { title: "KC 203 - CERT - KC - Armazenamento", deadline: "N/A" },
    { title: "KC 204 - CERT - KC - Bancos de dados", deadline: "N/A" },
    { title: "KC 205 - CERT - KC - Cobrança e suporte", deadline: "N/A" },
    { title: "KC 206 - CERT - KC - Arquitetura em nuvem", deadline: "N/A" },
    { title: "KC 207 - CERT - KC - Balanceamento - Dimensionamento - Monitoramento", deadline: "N/A" },

];

const labs = [
    { title: "Lab 11 - Introdução ao Amazon EC2", deadline: "08/12/2025" },
    { title: "Lab 267 - Criar a sua VPC e iniciar um servidor Web", deadline: "08/12/2025" },
    { title: "Lab 279 - Introdução ao gerenciamento de identidade e acesso (IAM)", deadline: "08/12/2025" },
    { title: "Lab 160 - Crie seu servidor de banco de dados e interaja com seu banco de dados usando um aplicativo", deadline: "N/A" },
    { title: "Lab 168 - Instalar e configurar a CLI da AWS", deadline: "N/A" },
    { title: "Lab 169 - Usar o AWS Systems Manager", deadline: "N/A" },
    { title: "Lab 170 - Criar um site no S3", deadline: "N/A" },
    { title: "Lab 171 - Criando instâncias do Amazon EC2", deadline: "N/A" },
    { title: "Lab 172 - [Desafio] Exercício de instância do EC2", deadline: "N/A" },
    { title: "Lab 173 - Solucionar problemas para criar uma instância", deadline: "N/A" },
    { title: "Lab 174 - Dimensionar e balancear a carga da arquitetura", deadline: "N/A" },
    { title: "Lab 175 - Usar o Auto Scaling na AWS (Linux)", deadline: "N/A" },
    { title: "Lab 176 - Roteamento de failover do Route 53", deadline: "N/A" },
    { title: "Lab 178 - Trabalhar com o AWS Lambda", deadline: "N/A" },
    { title: "Lab 177 - [Desafio] Exercício do AWS Lambda", deadline: "N/A" },
    { title: "Lab 179 - Migrar para o Amazon RDS", deadline: "N/A" },
    { title: "Lab 180 - Configurar uma Amazon VPC", deadline: "N/A" },
    { title: "Lab 181 - Solucionar problemas de uma VPC", deadline: "N/A" },
    { title: "Lab 182 - Trabalhar com o Amazon EBS", deadline: "N/A" },
    { title: "Lab 183 - Gerenciar o armazenamento", deadline: "N/A" },
    { title: "Lab 184 - [Desafio] Exercício de S3", deadline: "N/A" },
    { title: "Lab 185 - Trabalhar com o Amazon S3", deadline: "N/A" },
    { title: "Lab 186 - Monitorar a infraestrutura", deadline: "N/A" },
    { title: "Lab 187 - Trabalhar com o AWS CloudTrail", deadline: "N/A" },
    { title: "Lab 188 - Gerenciar recursos com marcação", deadline: "N/A" },
    { title: "Lab 189 - Otimizar a utilização", deadline: "N/A" },
    { title: "Lab 190 - Automatização de implantações com o AWS CloudFormation", deadline: "N/A" },
    { title: "Lab 191 - Solucionar problemas de implantações do AWS CloudFormation", deadline: "N/A" },
    { title: "Lab 192 - [Desafio] CloudFormation", deadline: "N/A" },
    { title: "Lab 316 - [AI] Amazon SageMaker - Training a machine-learning model", deadline: "N/A" },
    { title: "Parabéns, você conseguiu passar pelo AWS Re/Start!", deadline: "N/A" }
];


// ============================
// RENDERIZAÇÃO DAS LISTAS
// ============================

function carregar() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const kcsDiv = document.getElementById("kcs");
    const labsDiv = document.getElementById("labs");

    kcsDiv.innerHTML = "";
    labsDiv.innerHTML = "";

    // KC's
    kcs.forEach((item, idx) => {
        const done = saved["kc_" + idx] === true;

        const div = document.createElement("div");
        div.className = "task" + (done ? " done" : "");
        div.onclick = () => toggle("kc_" + idx);

        div.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        kcsDiv.appendChild(div);
    });

    // LABs
    labs.forEach((item, idx) => {
        const done = saved["lab_" + idx] === true;

        const div = document.createElement("div");
        div.className = "task" + (done ? " done" : "");
        div.onclick = () => toggle("lab_" + idx);

        div.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        labsDiv.appendChild(div);
    });

    atualizarProgresso();
}

// ============================
// TOGGLE CONCLUIR
// ============================

function toggle(id) {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    saved[id] = !saved[id];
    localStorage.setItem("progress", JSON.stringify(saved));
    carregar();
}

// ============================
// BARRA DE PROGRESSO
// ============================

function atualizarProgresso() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const total = kcs.length + labs.length;
    const concluidos = Object.values(saved).filter(v => v).length;

    const porcentagem = Math.round((concluidos / total) * 100);

    document.getElementById("progress-bar").style.width = porcentagem + "%";
    document.getElementById("progressText").innerText = porcentagem + "%";
}

// ============================
// RESET
// ============================

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

