import type {
    FDSFilter,
    FDSFilterHTMLElementBuilderArgs,
} from "@liferay/js-api/data-set";

type FilterData = string;

function descriptionBuilder(selectedData: FilterData): string {
    return selectedData;
}

function htmlElementBuilder({
    filter,
    setFilter,
}: FDSFilterHTMLElementBuilderArgs<FilterData>): HTMLElement {
    const input = document.createElement("input");

    if (filter.selectedData) {
        input.value = filter.selectedData;
    }

    input.className = "form-control";
    input.placeholder = "Search with Odata";

    const button = document.createElement("button");

    button.className = "btn btn-block btn-secondary btn-sm mt-2";
    button.innerText = "Submit";
    button.onclick = () => {
        setFilter({
            selectedData: input.value,
        });
    };

    const div = document.createElement("div");

    div.className = "dropdown-item";

    div.appendChild(input);
    div.appendChild(button);

    return div;
}

function oDataQueryBuilder(selectedData: FilterData): string {
    return selectedData;
}

const fdsFilter: FDSFilter<FilterData> = {
    descriptionBuilder,
    htmlElementBuilder,
    oDataQueryBuilder,
};

export default fdsFilter;
