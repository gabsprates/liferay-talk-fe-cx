import type { FDSTableCellHTMLElementBuilder } from "@liferay/js-api/data-set";

const languageFlags = {
    "ar-SA": "🇸🇦",
    // "ca-ES": "",
    // "de-DE": "",
    "en-US": "🇺🇸",
    "es-ES": "🇪🇸",
    // "fi-FI": "",
    // "fr-FR": "",
    // "hu-HU": "",
    // "ja-JP": "",
    // "nl-NL": "",
    "pt-BR": "🇧🇷",
    // "sv-SE": "",
    // "zh-CN": "",
};

const fdsCellRenderer: FDSTableCellHTMLElementBuilder = ({ value }) => {
    const element = document.createElement("div");

    element.innerHTML = languageFlags[value as string] || value.toString();

    return element;
};

export default fdsCellRenderer;
