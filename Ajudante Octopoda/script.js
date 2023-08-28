document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const projectInput = document.getElementById("projectInput");

    const projects = [
        "Pro Vida - Amostra Grátis Web",
    "Nuvende - API de Pagamentos",
    "Global Top Marcas - APP - Virada de Vida - Sorteios",
    "Teibou - App Teibou",
    "DTBX - Apresentações",
    "Arlete Transportes - Arlete App",
    "Arlete Transportes - Arlete Web",
    "Doutbox - Atendimento Mídias Sociais",
    "Nuvende - Aticks",
    "Global Top Marcas - Backoffice",
    "Nuvende - Backoffice",
    "Expay - Cadastro",
    "Doutbox - Campanha de Marketing",
    "DTBX - Campanha de Marketing - DTBX",
    "Nuvende - Campanha de Marketing",
    "Conexão Business - Conexão Business",
    "Doutbox - CRM",
    "Unimed - Devices Unimed App",
    "Doutbox - Documentação Marketplace",
    "Doutbox - Doutbox (Administrativo)",
    "Doutbox - DoutStore",
    "Lojas Adelino - E-commerce",
    "LUHRS - E-commerce",
    "Master Shopping Atacadista - E-commerce",
    "Nuvende - E-commerce",
    "QRiqueza Modas - E-commerce",
    "Doutbox - Endomarketing",
    "Doutbox - Estágio Flutter",
    "Doutbox - Estágio Laravel",
    "Doutbox - Flutter Starter",
    "Doutbox - Formulário de reembolso",
    "Nuvende - Gateway ADIQ",
    "Haggle - Haggle App",
    "Haggle - Haggle Web",
    "Pase - HidrowebAPI V4",
    "Doutbox - Horas de acompanhamento",
    "Doutbox - Horas de documentação",
    "Doutbox - Infraestrutura",
    "LocallPrint - LocallPrint",
    "Cheiro Verde Ambiental - Logística Reversa de Medicamentos",
    "PEDRASPLAST - MANUAL DE INSTRUÇÃO",
    "Doutbox - Marketing de Relacionamento | Clientes",
    "Eclipse - Material de Marketing",
    "Doutbox - Material Interno",
    "DTBX - Material Interno",
    "Nuvende - Material Interno",
    "MEDCARE - MEDCARE Web",
    "Metal Fort - Metal Fort",
    "Arlete Transportes - Mídias Sociais",
    "Bom Sabor Restaurante - Mídias Sociais",
    "Chopp Brahma Express - Mídias Sociais",
    "Doutbox - Mídias Sociais",
    "DTBX - Mídias Sociais - DTBX",
    "Mendes & Koch - Mídias Sociais",
    "Nuvende - Mídias Sociais",
    "Wagner Motos - Mídias Sociais - Wagner Motos",
    "Zanotto Diesel Truck - Mídias Sociais - Zanotto",
    "Expay - Minha Conta",
    "Nuvende - Minha Conta",
    "Lojas Adelino - Nikos App",
    "Lojas Adelino - Nikos Web",
    "NSC - Novo Clube NSC",
    "Nuvende - Nuvende App",
    "Nuvende - Nuvende link de cobrança",
    "Nuvende - Nuvende PDV App",
    "Nuvende - Nuvende POS",
    "Doutbox - Octopoda",
    "Odontologia Andrino - Odontify",
    "Lojas Adelino - Paguelino Web",
    "Vialaser - Painel Disponibilidade",
    "Setram - Portal",
    "Farol Shopping - POS Farol Shopping",
    "Nuvende - Prestador Serviços Pagamentos Instantâneos",
    "Nuvende - Reembolso.net",
    "Safeair - Safeair App",
    "Luzems - Sather App",
    "Luzems - Sather Site",
    "Luzems - Sather Web",
    "Servitech - Servitech Web",
    "Seven Glass - Seven Glass",
    "Nuvende - Site",
    "DTBX - Site - Webflow",
    "Lojas Adelino - Site adelino",
    "Doutbox - Site Doutbox",
    "Doutbox - SmartPdv Api Web",
    "Nuvende - SmartPdv Backoffice",
    "Nuvende - SmartPdv Backoffice Web",
    "Nuvende - SmartPdv POS",
    "Expay - Sustentação",
    "Haggle - Telas aplicativos - Google Play/Apple Store - Haggle",
    "YOUWISE - Telas aplicativos - Google Play/Apple Store - YOUWISE",
    "CREASC - Unicrea Web",
    "Global Top Marcas - Virada de Vida - Plataforma de Sorteios",
    "Doutbox - WebStore",
    "Doutbox - White Label Fintech",
    "Doutbox - White Label Gestão de Consumo",
    "You Wise - YouWise App",
    "You Wise - YouWise web"
    ];

    const projectOptions = projects.map(project => {
        const [client, projectDetails] = project.split(" - ");
        return {
            client,
            projectDetails,
            text: `${client} - ${projectDetails}`
        };
    });

    const datalist = document.createElement("datalist");
    datalist.id = "projectOptions";
    projectOptions.forEach(projectOption => {
        const option = document.createElement("option");
        option.value = projectOption.text;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);

    projectInput.setAttribute("list", "projectOptions");

    copyButton.addEventListener("click", function () {
        const selectedOption = projectInput.value;
        const [client, projectDetails] = selectedOption.split(" - ");
        const copiedText = `#OCT ${client} <> ${projectDetails}:`; // Corrected order
        copyToClipboard(copiedText);
    });
});

function copyToClipboard(text) {
    const dummyTextArea = document.createElement("textarea");
    dummyTextArea.value = text;
    document.body.appendChild(dummyTextArea);
    dummyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextArea);
}
