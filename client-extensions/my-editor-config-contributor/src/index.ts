import {
    EditorConfigTransformer,
    EditorTransformer,
} from "@liferay/js-api/editor";

interface CKEditorOptions {
    extraPlugins: string;
    toolbar: string | string[][];
}

type EditorConfigObject = CKEditorOptions;

const getCKEditor = (config: CKEditorOptions): CKEditorOptions => {
    const finalConfig = { ...config, extraPlugins: "aicreator" };
    const finalToolbar = [
        ["Undo", "Redo"],
        ["Source", "Expand"],
        ["AICreator"],
    ];

    if (typeof config.toolbar === "string") {
        return {
            ...finalConfig,
            [`toolbar_${config.toolbar}`]: finalToolbar,
        };
    } else if (Array.isArray(config.toolbar)) {
        return {
            ...finalConfig,
            toolbar: finalToolbar,
        };
    }

    return config;
};

const editorConfigTransformer: EditorConfigTransformer<EditorConfigObject> = (
    config
) => {
    // CKEditor
    if ("toolbar" in config) {
        return getCKEditor(config);
    }

    return config;
};

const editorTransformer: EditorTransformer<EditorConfigObject> = {
    editorConfigTransformer,
};

export default editorTransformer;
