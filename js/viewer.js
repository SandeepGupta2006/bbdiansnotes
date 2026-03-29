// 1. Setup Variables from URL
const params = new URLSearchParams(window.location.search);
const fileName = params.get("file");
const subjectName = fileName ? fileName.replace(".pdf", "") : "";

// 2. Find Subject Data
const subjectData = (typeof notesData !== 'undefined')
    ? notesData.find(s => s.subject === subjectName)
    : null;

// 3. Select UI Elements
const moduleList = document.getElementById("moduleList");
const pyqList = document.getElementById("pyqList");
const docTitle = document.getElementById("currentDocTitle");
const downloadBtn = document.getElementById("downloadBtn");
const subjectHeader = document.getElementById("subjectTitle");
const mobileSubject = document.getElementById("mobileSubject");

// 4. Initialization Logic
if (subjectData) {
    subjectHeader.innerText = subjectData.subject;

    if (mobileSubject) {
        mobileSubject.innerText = subjectData.subject;
    }

    // --- RENDER MODULES ---
    if (subjectData.modules && subjectData.modules.length > 0) {
        subjectData.modules.forEach((mod, modIndex) => {

            // Add Module Label
            const header = document.createElement("div");
            header.className = "module-group-label";
            header.innerText = mod.moduleName;
            moduleList.appendChild(header);

            // Check for Chapters first, then fall back to single file
            if (mod.chapters && mod.chapters.length > 0) {
                mod.chapters.forEach((chap, chapIndex) => {
                    createLink(chap.name, chap.file, "notes-pdf", modIndex === 0 && chapIndex === 0);
                });
            } else {
                // It's a single module file (Note: your data uses 'files')
                createLink(mod.moduleName.split(':')[1] || "Full Module", mod.files, "notes-pdf", modIndex === 0);
            }
        });
    }

    // --- RENDER PYQS ---
    if (subjectData.pyqs && subjectData.pyqs.length > 0) {
        subjectData.pyqs.forEach(pyq => {
            const btn = document.createElement("div");
            btn.className = "module-link";
            btn.innerHTML = `<span style="color:#ef4444; margin-right:8px;">•</span> ${pyq.year} (${pyq.term})`;
            btn.onclick = () => loadPDF(`assets/pdf/pyqs-pdf/${subjectData.subject}/${pyq.file}`, `${pyq.year} ${pyq.term} PYQ`, btn);
            pyqList.appendChild(btn);
        });
    }
}

// Helper to create sidebar links
function createLink(displayName, fileName, folder, autoClick) {
    const link = document.createElement("div");
    link.className = "module-link chapter-indent";
    link.innerHTML = `📖 ${displayName}`;

    // Construct the URL
    const finalUrl = fileName ? `assets/pdf/${folder}/${subjectData.subject}/${fileName}` : "";

    link.onclick = () => loadPDF(finalUrl, displayName, link);
    moduleList.appendChild(link);
    if (autoClick) link.click();
}

/**
 * Core Function to Switch PDFs with Coming Soon Logic
 */
function loadPDF(url, title, element) {
    const pdfWrapper = document.querySelector(".pdf-wrapper");

    // 1. Get the actual filename from the URL
    const parts = url.split('/');
    const actualFile = parts[parts.length - 1];

    // 2. Logic: If filename is empty or invalid, show Coming Soon
    if (!actualFile || actualFile === "" || actualFile === "undefined" || actualFile === "null") {
        pdfWrapper.innerHTML = `
                    <div class="coming-soon-container" style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; background: rgba(255,255,255,0.02); border: 2px dashed var(--glass-border); border-radius: 20px; padding: 40px;">
                        <div style="font-size: 60px; margin-bottom: 20px;">⏳</div>
                        <h3 style="color:white; margin-bottom:10px;">Coming Soon</h3>
                        <p style="color:var(--text-dim); max-width:300px;">We are currently digitizing the notes. Please check back later!</p>
                    </div>
                `;
        docTitle.innerText = "Coming Soon";
        downloadBtn.style.display = "none";
    } else {
        // 3. File exists - Load the iframe
        pdfWrapper.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>`;
        docTitle.innerText = title;
        downloadBtn.href = url;
        downloadBtn.style.display = "inline-block";
    }

    // Manage active states
    document.querySelectorAll('.module-link').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
}
