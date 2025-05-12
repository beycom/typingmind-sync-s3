
function removeShitFromUI() {
    console.log("Enhancing UI")
    document.querySelector("[data-element-id=workspace-tab-teams]").remove()
    document.getElementsByClassName("text-white text-xs font-semibold bg-red-700 rounded-sm px-0.5 py-0.5 cursor-default hover:bg-red-600 transition-colors flex items-center justify-center gap-1 truncate absolute top-1 md:top-0 right-0")[0].remove()
    document.getElementsByClassName("min-w-[58px] sm:min-w-0 sm:aspect-auto aspect-square cursor-default h-12 md:h-[50px] flex-col justify-start items-start inline-flex focus:outline-0 focus:text-white w-full")[0].remove()
}


setTimeout(() => {removeShitFromUI()}, 500);
