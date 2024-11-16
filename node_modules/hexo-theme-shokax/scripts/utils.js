"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendorLink = getVendorLink;
function getVendorLink(hexo, source) {
    const vendorsCfg = hexo.theme.config.vendors;
    if (source.source === "local") {
        return {
            url: source.url,
            local: true,
            sri: ''
        };
    }
    else {
        return {
            url: vendorsCfg.cdns[source.source] + '/' + source.url,
            local: false,
            sri: source.sri
        };
    }
}
