
function removeShitFromUI() {
    document.querySelector("[data-element-id=workspace-tab-teams]").remove()
    document.getElementsByClassName("text-white text-xs font-semibold bg-red-700 rounded-sm px-0.5 py-0.5 cursor-default hover:bg-red-600 transition-colors flex items-center justify-center gap-1 truncate absolute top-1 md:top-0 right-0")[0]
}


setTimeout(() => {removeShitFromUI}, 1000);