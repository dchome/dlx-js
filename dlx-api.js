var dlxApi = {
  
  /*bundle methods*/
  
  deleteBundle (id) {},
  
  deleteBundles (ids) {},
  
  deleteItemFromBundle (id, bundleID) {},
  
  deleteItemsFromBundle (ids, bundleID) {},
  
  getBundle (id) {},
  
  getBundles (ids) {},
  
  getItemFromBundle (id, bundleID) {},
  
  getItemsFromBundle (ids, bundleID) {},
  
  upsertBundle (bundle) {},
  
  upsertBundles (bundles) {},
  
  upsertItemsToBundle (items, bundleID) {},
  
  upsertItemToBundle (item, bundleID) {},
  
  /*lexicon methods*/
  
  deleteEntriesFromLexicon (ids, lexiID) {},
  
  deleteEntryFromLexicon (id, lexiID) {},
  
  deleteLexicon (id) {},
  
  getEntriesFromLexicon (ids, lexiID) {},
  
  getEntryFromLexicon (id, lexiID) {},
  
  getLexicon (id) {},
  
  upsertEntriesToLexicon (entries, lexiID) {},
  
  upsertEntryToLexicon (entry, lexiID) {},
  
  upsertLexicon (lexi) {},
  
  /*permission methods*/
  
  addPermission (user, resource, permissionType) {},
  
  addPermissions (users, resources, permissionTypes) {}, /*should this be 
    permissionType or permissionTypes? Based on your comments it says singular,
    but I think you meant plural? */

  authenticate () {},
  
  deletePermission (user, resource, permissionType) {},
  
  deletePermissions (users, resources, permissionType) {},
  
  makePrivate (resourceID, revokeExistingPermissions=false) {},
  
  makePublic (resourceID),
  
  /*project methods*/
  
  addBundleToProject (bundID, projID) {},
  
  addBundlesToProject (bundIDs, projID) {},
  
  addLanguageToProject (langID, projID) {},
  
  addLanguagesToProject (langIDs, projID) {},
  
  addLexiconToProject (lexiID, projID) {},
  
  addLexiconsToProject (lexiIDs, projID) {},
  
  addLocationToProject (locaID, projID) {},
  
  addLocationsToProject (locaIDs, projID) {},
  
  addMediaToProject (mediaID, projID) {},
  
  addMediasToProject (mediaIDs, projID) {},
  
  addTextToProject (textID, projID) {},
  
  addTextsToProject (textIDs, projID) {},
  
  removeBundleFromProject (bundID, projID) {},
  
  removeBundlesFromProject (bundIDs, projID) {},
  
  removeLanguageFromProject (langID, projID) {},
  
  removeLanguagesFromProject (langIDs, projID) {},
  
  removeLexiconFromProject (lexiID, projID) {},
  
  removeLexiconsFromProject (lexiIDs, projID) {},
  
  removeLocationFromProject (locaID, projID) {},
  
  removeLocationsFromProject (locaIDs, projID) {},
  
  removeMediaFromProject (mediaID, projID) {},
  
  removeMediasFromProject (mediaIDs, projID) {},
  
  removeTextFromProject (textID, projID) {},
  
  removeTextsFromProject (textIDs, projID) {},
  
  /*properties*/
  
  accessToken: "",
  
  /*text methods*/

  deleteText (id) {},
  
  deleteTexts (ids) {},
  
  getPhraseFromText (id, textID) {},
  
  getPhrasesFromText (ids, textID) {},
  
  getText (id) {},
  
  getTexts (ids) {},

  upsertText (text) {},
  
  upsertTexts (texts) {},
  
};
