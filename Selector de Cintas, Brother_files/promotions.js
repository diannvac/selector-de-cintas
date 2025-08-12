
function onPromoClickRedirect(destinationUrl, newWindow) {
    if (newWindow) {
        window.open(destinationUrl);
    }
    else {
        document.location = destinationUrl;
    }
}