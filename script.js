// Lista de programas con sus respectivos enlaces
const programas = [
    { nombre: "Tcp Optimizer", enlace: "https://revennnz.github.io/rachezprograms/tcp%20-%20optimizer.html" },
    { nombre: "Dns Jumper", enlace: "https://www.sordum.org/7952/dns-jumper-v2-3/" },
    { nombre: "Wub", enlace: "https://www.mediafire.com/file/tzlhto13s506e8y/NO_UPDATES.7z/file" },
    { nombre: "Hrc", enlace: "https://www.mediafire.com/file/8d45uqsype847if/HRC.7z/file" },
    { nombre: "MSI util v3", enlace: "https://www.mediafire.com/file/h9z62hrtcez13ot/MSI_util_v3.exe/file" },
    { nombre: "Wget", enlace: "https://revennnz.github.io/rachezprograms/wget.html" },
    { nombre: "Ultra Iso", enlace: "https://huggingface.co/spaces/rachez/Programs/resolve/main/UltraISO%20v.9.6.rar" },
    { nombre: "Path My PC", enlace: "https://patchmypc.com/home-updater" },
    { nombre: "Revo", enlace: "https://www.mediafire.com/file/7rgsy504s2j0y1b/Revo+Uninstaller+Pro+4.4.5+FULL+2021.7z/file" },
    { nombre: "Picassa", enlace: "https://huggingface.co/spaces/rachez/Programs/resolve/main/picasa-3-9-141-259.exe" },
    { nombre: "Ripcord", enlace: "https://linkfly.to/ripcordrachez" }
];

// Selecciona el elemento ul donde se mostrará la lista
const programList = document.getElementById('program-list');

// Recorre la lista de programas y los añade a la página con enlaces
programas.forEach(programa => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = programa.nombre;
    a.href = programa.enlace;
    a.target = "_self"; // Abre el enlace en una nueva pestaña
    li.appendChild(a);
    programList.appendChild(li);
});
