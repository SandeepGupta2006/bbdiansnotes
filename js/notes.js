const container = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");
const branchFilter = document.getElementById("branchFilter");
const semFilter = document.getElementById("semFilter");
const typeFilter = document.getElementById("typeFilter");

function getAbbreviation(text) {
    const ignoreWords = ["and", "in", "of", "to", "for", "&", "with", "on", "by", "from"];

    return text
        .toLowerCase()
        .replace(/[^a-z\s]/g, "")
        .split(" ")
        .filter(word => word && !ignoreWords.includes(word))
        .map(word => word[0])
        .join("");
}

function renderNotes() {

    container.innerHTML = "";

    const filtered = notesData.filter(note => {

    const searchText = searchInput.value.toLowerCase().trim();

        return (
            (
                note.subject.toLowerCase().includes(searchText) ||
                getAbbreviation(note.subject).includes(searchText)
            ) &&

            (!branchFilter.value ||
                (Array.isArray(note.branch)
                    ? note.branch.includes(branchFilter.value) || note.branch.includes("All")
                    : note.branch === branchFilter.value || note.branch === "All"
                )
            ) &&

            (!semFilter.value ||
                (typeof note.semester === "object"
                    ? !branchFilter.value
                        ? Object.values(note.semester).includes(semFilter.value) // check all semesters
                        : note.semester[branchFilter.value] === semFilter.value
                    : note.semester.includes(semFilter.value)
                )
            ) &&

            (!typeFilter.value || note.type === typeFilter.value)

        );

    });

    if (filtered.length === 0) {
        container.innerHTML = "<p>No notes found.</p>";
        return;
    }

    filtered.sort((a, b) => {

        // 1. Available first
        if (a.available !== b.available) {
            return a.available === "yes" ? -1 : 1;
        }

        // 2. Semester sorting
        const getSemester = (note) => {

            // If branch selected → use that semester
            if (branchFilter.value && note.semester[branchFilter.value]) {
                return parseInt(note.semester[branchFilter.value]);
            }

            // If no branch selected → take lowest semester (safe choice)
            if (typeof note.semester === "object") {
                return Math.min(...Object.values(note.semester).map(s => parseInt(s)));
            }

            return parseInt(note.semester);
        };

        const semA = getSemester(a);
        const semB = getSemester(b);

        if (semA !== semB) {
            return semA - semB;
        }

        // 3. Alphabetical
        return a.subject.localeCompare(b.subject);

    });

    filtered.forEach(note => {

        const card = document.createElement("div");
        card.className = "note-card";

        const isAvailable = note.available === "yes";

        if (!isAvailable) {
            card.classList.add("unavailable");
        }

        card.innerHTML = `

<h3 class="note-subject">${note.subject}</h3>

<p class="note-info">
Branch: ${Array.isArray(note.branch)
                ? (note.branch.includes("All") || note.branch.length >= 4
                    ? "All BTech CSE Branch"
                    : note.branch.join(", ")
                )
                : note.branch
            }
</p>

<p class="note-info">
Semester: ${(() => {

                if (typeof note.semester === "string") return note.semester;

                if (typeof note.semester === "object") {

                    if (branchFilter.value && note.semester[branchFilter.value]) {
                        return note.semester[branchFilter.value];
                    }

                    return [...new Set(Object.values(note.semester))]
                        .sort((a, b) => parseInt(a) - parseInt(b))
                        .join("/");
                }

                return "";

            })()
            }
</p>

<span class="note-type">${note.type}</span>

<a 
href="${isAvailable ? `viewer.html?file=${encodeURIComponent(note.subject)}.pdf&type=${encodeURIComponent(note.type)}` : '#'}"
class="note-btn ${!isAvailable ? 'disabled-btn' : ''}"
${!isAvailable ? 'onclick="return false;"' : ''}
>
${isAvailable ? 'View' : 'Coming Soon'}
</a>

`;

        container.appendChild(card);

    });

}

searchInput.addEventListener("input", renderNotes);
branchFilter.addEventListener("change", renderNotes);
semFilter.addEventListener("change", renderNotes);
typeFilter.addEventListener("change", renderNotes);

renderNotes();