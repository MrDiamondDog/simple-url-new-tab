document.addEventListener("DOMContentLoaded", async () => {
    const url = await browser.storage.sync.get("simple-new-tab-url");
    console.log(url)

    if (!url || url === {} || !url["simple-new-tab-url"])
        return void browser.runtime.openOptionsPage();

    const iframe = document.createElement("iframe");
    iframe.src = url["simple-new-tab-url"];

    document.body.appendChild(iframe);
})