/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
(function () {
    angular.module('piwikApp').factory('siteSelectorModel', siteSelectorModel);

    siteSelectorModel.$inject = ['piwikApi', '$filter', 'piwik', '$q'];

    function siteSelectorModel(piwikApi, $filter, piwik, $q) {

        var initialSites = null;
        var limitPromise = null;

        var model = {
            sites : [],
            hasMultipleWebsites : false,
            isLoading : false,
            firstSiteName : '',
            onlySitesWithAdminAccess: false,
            updateWebsitesList: updateWebsitesList,
            searchSite: searchSite,
            loadSite: loadSite,
            loadInitialSites: loadInitialSites,
            hasMultipleSites: hasMultipleSites
        };

        return model;


    }
})();
