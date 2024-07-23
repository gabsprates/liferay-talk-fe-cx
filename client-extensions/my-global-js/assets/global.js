(function mutateAlert(context, page) {
    const originalAlert = context.alert;
    const keyTitle = page.currentScript?.dataset.myKey ?? "Default Title";

    context.alert = (message) => {
        const dialog = page.createElement("dialog");
        dialog.open = true;

        const button = page.createElement("button");
        button.innerText = "ok";
        button.autofocus = true;
        button.onclick = () => dialog.close();

        dialog.innerHTML = `<h1>${keyTitle}</h1><p>${message}</p>`;
        dialog.appendChild(button);

        page.body.appendChild(dialog);
    };

    context.resetAlert = () => {
        context.alert = originalAlert;
    };
})(window, document);
