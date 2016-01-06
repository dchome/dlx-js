var dlxApi = {

  /**
   * settings
   * @namespace settings
   */
  accessToken: '',

  /**
   * general API methods
   * @namespace general
   */
  authenticate (/* args */) {},


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

  getBundle (/* id */) {},

  getBundles (/* ids */) {},

  getItemFromBundle (/* itemId, [bundleId] */) {},

  getItemsFromBundle (/* itemIds, [bundleId] */) {},

  removeBundleFromProject (/* bundleId, projectId */) {},

  removeBundlesFromProject (/* bundleIds, projectId */) {},
  
  removeItemFromBundle (/* itemId, bundleId */) {},

  removeItemsFromBundle (/* itemIds, bundleId */) {},

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

  upsertTexts (/* texts */) {},

};
