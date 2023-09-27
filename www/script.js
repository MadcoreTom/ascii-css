window.onload = () => {
    let previews = [...document.querySelectorAll(".preview")];

    previews.forEach((p) => {
        const code = document.createElement("pre");
        const lines = p.innerHTML.split("\n");
        const leftTrimLen = lines.filter(x => x.trim().length > 0)
            .map(x => x.match(/(^\s*)/g))
            .map(x => x[0] ? x[0].length : Number.POSITIVE_INFINITY)
            .reduce((a, b) => Math.min(a, b), Number.POSITIVE_INFINITY);

        code.innerText = lines.map(a => a.substring(leftTrimLen)).join("\n");
        code.className = "preview-code";
        appendAfter(code, p);
    });
};

function appendAfter(newElem, curElem) {
    if (curElem.nextSibling) {
        curElem.parentNode.insertBefore(newElem, curElem.nextSibling);
    } else {
        curElem.parentNode.appendChild(newElem);
    }
}
