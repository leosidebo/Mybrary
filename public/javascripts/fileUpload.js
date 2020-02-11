FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageReSizeTargetWidth: 100,
    imageReSizeTargetHeight: 150
})

FilePond.parse(document.body);