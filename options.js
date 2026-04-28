document.addEventListener("DOMContentLoaded", async () => {
    let url = (await browser.storage.sync.get("simple-new-tab-url")) || "";
    console.log(url);

    document.querySelector("input").addEventListener("input", e => {
        url = e.target.value;
    })

    document.querySelector("button").addEventListener("click", e => {
        browser.storage.sync.set({ "simple-new-tab-url": url });
        document.querySelector("#success").style.display = "block"
    })

    document.addEventListener("load", () => {
        document.querySelector("input").value = url;
    })
});