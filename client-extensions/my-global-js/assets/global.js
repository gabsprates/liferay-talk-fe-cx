((context, page) => {
    const originalAlert = context.alert;

    context.alert = (message) => {
        const dialog = page.createElement("dialog");
        dialog.open = true;

        const button = page.createElement("button");
        button.innerText = "ok";
        button.autofocus = true;
        button.onclick = () => dialog.close();

        dialog.innerHTML = `<p>${message}</p>`;
        dialog.appendChild(button);

        page.body.appendChild(dialog);
    };

    context.resetAlert = () => {
        context.alert = originalAlert;
    };
})(window, document);
