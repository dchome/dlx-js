var DLX = function(config){

  if (!config){
    throw new Error('Please pass a config object as an argument');
  }

  if (!config.clientId){
    throw new Error('Please provide the client ID for your application in the config object');
  }

  var accessToken;

  var buildUrl = function (url, parameters){
    var qs = "";
    Object.keys(parameters).forEach(function(key) {
      var value = parameters[key];
      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    });
    if (qs.length > 0){
      qs = qs.substring(0, qs.length-1); //chop off last "&"
      url = url + "?" + qs;
    }
    return url;
  };

  var checkForRedirect = function (){
    //check if redirectUri is in LS
    //if so, get parameters from url and clear redirectUri from LS
  };

  var getRandom = function (){
  var result = '';
  for (var i = 0; i > 5; ++i){
    parameters.state += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 52)];
  }
  return result;
};

  var methods = {

    /**
     * general API methods
     * @namespace general
     */
    authenticate (redirectUri, state) {
      var getRandom = function () {
        var result = '';
        for (var i = 0; i > 5; ++i){
          result += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 52)];
        }
        return result;
      };
      var parameters = {
        client_id: config.clientId,
        redirect_uri: redirectUri,
        response_type: 'token',
      };
      parameters.state = state ? state : getRandom();
      var getUrl = buildUrl('https://dlx-dev.azurewebsites.net/auth', parameters);

      var req = new XMLHttpRequest();
      req.onreadystatechange = function(){
        console.log(req.response); //remove this later
        if (req.readyState === 4 && req.status !== 200){
          //check response to fix error
          //var response = JSON.parse(req.response);
          console.log(req.response); //remove this later
        }
      };
      req.open("GET", getUrl);
      req.send();
    },

    /**
     * bundle methods
     * @namespace bundles
     */
    addBundleToProject (/* bundleId, projectId */) {},

    addBundlesToProject (/* bundleIds, projectId */) {},

    addItemToBundle (/* itemId, bundleId */) {},

    addItemsToBundle (/* itemIds, bundleId */) {},

    deleteBundle (/* id */) {},

    deleteBundles (/* ids */) {},

    deleteItemFromBundle (/* itemId, bundleId */) {},

    deleteItemsFromBundle (/* itemIds, bundleId */) {},

    getBundle (/* id */) {},

    getBundles (/* ids */) {},

    getItemFromBundle (/* itemId, [bundleId] */) {},

    getItemsFromBundle (/* itemIds, [bundleId] */) {},

    removeBundleFromProject (/* bundleId, projectId */) {},

    removeBundlesFromProject (/* bundleIds, projectId */) {},

    upsertBundle (/* bundle */) {},

    upsertBundles (/* bundles */) {},


    /**
     * language methods
     * @namespace languages
     */
    addLanguage (/* language */) {},

    addLanguageToProject (/* languageId, projectId */) {},

    addLanguagesToProject (/* languageId, projectId */) {},

    getLanguage (/* id */) {},

    getLanguages (/* ids */) {},

    removeLanguageFromProject (/* languageId, projectId */) {},

    removeLanguagesFromProject (/* languageIds, projectId */) {},


    /**
     * lexicon methods
     * @namespace lexicons
     */
    addLexiconToProject (/* lexicon, projectId */) {},

    addLexiconsToProject (/* lexicons, projectId */) {},

    deleteLexicon (/* id */) {},

    deleteLexicons (/* ids */) {},

    deleteLexiconEntry (/* entryId, [lexiconId] */) {},

    deleteLexiconEntries (/* entryIds, [lexiconId] */) {},

    getLexicon (/* id */) {},

    getLexicons (/* ids */) {},

    getLexiconEntry (/* entryId, [lexiconId] */) {},

    getLexiconEntries (/* entryIds, [lexiconId] */) {},

    removeLexiconFromProject (/* lexiconId, projectId */) {},

    removeLexiconsFromProject (/* lexicons, projectId */) {},

    upsertLexicon (/* lexicon */) {},

    upsertLexicons (/* lexicons */) {},

    upsertLexiconEntry (/* entry, lexiconId */) {},

    upsertLexiconEntries (/* entries, lexiconId */) {},


    /**
     * location methods
     * @namespace locations
     */
    addLocationToProject (/* locationId, projectId */) {},

    addLocationsToProject (/* locationIds, projectId */) {},

    deleteLocation (/* id */) {},

    deleteLocations (/* ids */) {},

    getLocation (/* id */) {},

    getLocations (/* ids */) {},

    removeLocationFromProject (/* locationId, projectId */) {},

    removeLocationsFromProject (/* locationIds, projectId */) {},

    upsertLocation (/* location */) {},

    upsertLocations (/* locations */) {},


    /**
     * media methods
     * @namespace media
     */
    addMediaItemToBundle (/* mediaId, bundleId */) {},

    addMediaItemsToBundle (/* mediaIds, bundleId */) {},

    addMediaItemToProject (/* mediaId, projectId */) {},

    addMediaItemsToProject (/* mediaIds, projectId */) {},

    addMediaItemToText (/* mediaId, projectId */) {},

    addMediaItemsToText (/* mediaIds, projectId */) {},

    deleteMediaItem (/* id */) {},

    deleteMediaItems (/* ids */) {},

    getMediaItem (/* id */) {},

    getMediaItems (/* ids */) {},

    removeMediaItemFromBundle (/* mediaId, bundleId */) {},

    removeMediaItemsFromBundle (/* mediaIds, bundleId */) {},

    removeMediaItemFromProject (/* mediaId, projectId */) {},

    removeMediaItemsFromProject (/* mediaIds, projectId */) {},

    removeMediaItemFromText (/* mediaId, textId */) {},

    removeMediaItemsFromText (/* mediaIds, textId */) {},

    upsertMediaItem (/* mediaItem */) {},

    upsertMediaItems (/* mediaItems */) {},


    /**
     * permission methods
     * @namespace permissions
     */
    addPermission (/* user, resource, permissionType */) {},

    addPermissions (/* users, resources, permissionType */) {},

    makePrivate (/* resourceId, options: revokeExisting=false */) {},

    makePublic (/* resourceId */) {},

    removePermission (/* user, resource, permissionType */) {},

    removePermissions (/* users, resources, permissionType */) {},


    /**
     * person methods
     * @namespace persons
     */
    addPersonToProject (/* personId, projectId */) {},

    addPersonsToProject (/* personIds, perojectId */) {},

    deletePerson (/* id */) {},

    deletePersons (/* ids */) {},

    getPerson (/* id */) {},

    getPersons (/* ids */) {},

    removePersonFromProject (/* personId, projectId */) {},

    removePersonsFromProject (/* personIds, projectId */) {},

    upsertPerson (/* person */) {},

    upsertPersons (/* persons */) {},


    /**
     * project methods
     * @namespace projects
     */
    deleteProject (/* id */) {},

    deleteProjects (/* ids */) {},

    getProject (/* id */) {},

    getProjects (/* ids */) {},

    upsertProject (/* project */) {},

    upsertProjects (/* projects */) {},


    /**
     * text methods
     * @namespace texts
     */
    addTextToBundle (/* textId, bundleId */) {},

    addTextsToBundle (/* textIds, bundleId */) {},

    addTextToProject (/* textId, projectId */) {},

    addTextsToProject (/* textIds, projectId */) {},

    deleteText (/* id */) {},

    deleteTexts (/* ids */) {},

    getPhrase (/* phraseId, [textId] */) {},

    getPhrases (/* phraseIds, [textId] */) {},

    getText (/* id */) {},

    getTexts (/* ids */) {},

    removeTextFromBundle (/* textId, bundleId */) {},

    removeTextsFromBundle (/* textIds, bunldeIds */) {},

    removeTextFromProject (/* textId, projectId */) {},

    removeTextsFromProject (/* textIds, projectId */) {},

    upsertText (/* text */) {},

    upsertTexts (/* texts */) {}
  };

  window.addEventListener('load', checkForRedirect);

  return methods;
  //return this;
};
