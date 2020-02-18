var urlUtils = require('../../server/lib/url-utils'),
    settingsCache = require('../../server/services/settings/cache'),
    imageLib = require('../../server/lib/image');

function getBlogLogo() {
    var logo = {};

    logo.url = imageLib.blogIcon.getIconUrl(true);

    return logo;
}

module.exports = getBlogLogo;
