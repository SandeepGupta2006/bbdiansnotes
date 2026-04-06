const params = new URLSearchParams(window.location.search);
const fileName = params.get("file");
const subjectName = fileName ? fileName.replace(".pdf", "") : "";

const subjectData = (typeof notesData !== 'undefined')
    ? notesData.find(s => s.subject === subjectName)
    : null;

const moduleList = document.getElementById("moduleList");
const pyqList = document.getElementById("pyqList");
const docTitle = document.getElementById("currentDocTitle");
const downloadBtn = document.getElementById("downloadBtn");
const subjectHeader = document.getElementById("subjectTitle");
const mobileSubject = document.getElementById("mobileSubject");

document.title = `${subjectName} - BBDians Notes`;

function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

if (subjectData) {
    subjectHeader.innerText = subjectData.subject;

    if (mobileSubject) {
        mobileSubject.innerText = subjectData.subject;
    }

    if (subjectData.modules && subjectData.modules.length > 0) {
        subjectData.modules.forEach((mod, modIndex) => {

            const header = document.createElement("div");
            header.className = "module-group-label module-toggle";
            header.innerHTML = `▶ ${mod.moduleName}`;

            const chapterContainer = document.createElement("div");
            chapterContainer.className = "chapter-container";

            header.onclick = () => {
                const isOpen = chapterContainer.classList.contains("open");

                document.querySelectorAll(".chapter-container").forEach(el => el.classList.remove("open"));
                document.querySelectorAll(".module-toggle").forEach(el => el.classList.remove("active"));

                if (!isOpen) {
                    chapterContainer.classList.add("open");
                    header.classList.add("active");

                    if (mobileSubject) {
                        const moduleName = header.innerText.replace("▶", "").trim();
                        mobileSubject.innerText = `${subjectData.subject} \n ${toTitleCase(moduleName.split(':')[0])}`;
                    }
                }
            };

            moduleList.appendChild(header);
            moduleList.appendChild(chapterContainer);

            if (mod.chapters && mod.chapters.length > 0) {
                mod.chapters.forEach((chap, chapIndex) => {
                    createLink(
                        chap.name,
                        chap.file,
                        "notes-pdf",
                        modIndex === 0 && chapIndex === 0,
                        chapterContainer
                    );
                });
            } else {
                createLink(
                    mod.moduleName.split(':')[1] || "Full Module",
                    mod.files,
                    "notes-pdf",
                    modIndex === 0,
                    chapterContainer
                );
            }
        });
    }

    if (subjectData.pyqs && subjectData.pyqs.length > 0) {
        subjectData.pyqs.forEach(pyq => {
            const btn = document.createElement("div");
            btn.className = "module-link";
            btn.innerHTML = `<span style="color:#ef4444; margin-right:8px;">•</span> ${pyq.year} (${pyq.term})`;
            btn.onclick = () => loadPDF(
                `assets/pdf/pyqs-pdf/${subjectData.subject}/${pyq.file}`,
                `${pyq.year} ${pyq.term} PYQ`,
                btn
            );
            pyqList.appendChild(btn);
        });
    }
}

function createLink(displayName, fileName, folder, autoClick, parent) {
    const link = document.createElement("div");
    link.className = "module-link chapter-indent";
    link.innerHTML = `📖 ${displayName}`;

    const finalUrl = fileName
        ? `assets/pdf/${folder}/${subjectData.subject}/${fileName}`
        : "";

    link.onclick = () => {
        loadPDF(finalUrl, displayName, link);

        if (mobileSubject) {
            const activeModule = parent.previousElementSibling;
            const moduleName = activeModule.innerText.replace("▶", "").trim();
            mobileSubject.innerText = `${subjectData.subject} \n ${toTitleCase(moduleName.split(':')[0])}`;
        }
    };

    parent.appendChild(link);

    if (autoClick) {
        parent.classList.add("open");
        const header = parent.previousElementSibling;
        if (header) header.classList.add("active");

        if (mobileSubject && header) {
            const moduleName = header.innerText.replace("▶", "").trim();
            mobileSubject.innerText = `${subjectData.subject} \n ${toTitleCase(moduleName.split(':')[0])}`;
        }

        link.click();
    }
}

function loadPDF(url, title, element) {
    const pdfWrapper = document.querySelector(".pdf-wrapper");

    const parts = url.split('/');
    const actualFile = parts[parts.length - 1];

    if (!actualFile || actualFile === "" || actualFile === "undefined" || actualFile === "null") {
        pdfWrapper.innerHTML = `
            <div class="coming-soon">
                <div class="icon">⏳</div>
                <h3>Coming Soon</h3>
                <p>We are currently digitizing the notes. Please check back later!</p>
            </div>
        `;
        docTitle.innerText = "Coming Soon";
        downloadBtn.style.display = "none";
    } else {

        pdfWrapper.innerHTML = `
            <div class="pdf-loader">
                <div class="spinner"></div>
                <p>Loading...</p>
            </div>
        `;

        docTitle.innerText = title;
        downloadBtn.href = url;
        downloadBtn.style.display = "inline-block";

        setTimeout(() => {
            pdfWrapper.innerHTML = `
                <iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>
            `;
        }, 600);
    }

    document.querySelectorAll('.module-link').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
}

const guide = document.getElementById("mobileGuide");
const toggleBtn = document.getElementById("mobileSidebarToggle");

if (window.innerWidth <= 992 && guide && toggleBtn) {
    const dismissed = localStorage.getItem("mobileGuideDismissed");

    if (!dismissed) {
        const showOnboarding = () => {
            guide.style.display = "block";
            toggleBtn.classList.add("guide-active");
            document.body.style.overflow = "hidden";
        };

        const hideOnboarding = () => {
            guide.style.display = "none";
            toggleBtn.classList.remove("guide-active");
            document.body.style.overflow = "";
        };

        setTimeout(showOnboarding, 2000);

        toggleBtn.addEventListener("click", () => {
            if (toggleBtn.classList.contains("guide-active")) {
                localStorage.setItem("mobileGuideDismissed", "true");
                hideOnboarding();
            }
        });

        setTimeout(() => {
            if (!localStorage.getItem("mobileGuideDismissed")) {
                hideOnboarding();
            }
        }, 4000);
    }
}