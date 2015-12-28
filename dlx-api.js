var dlxApi = {
  
  /*bundle methods*/
  
  deleteBundle (id) {},
  
  deleteBundles (ids) {},
  
  getBundle (id) {},
  
  getBundles (ids) {},
  
  upsertBundle (bundle) {},
  
  upsertBundles (bundles) {},
  
  /*item methods*/

  deleteItemFromBundle (id, bundleID) {},
  
  deleteItemsFromBundle (ids, bundleID) {},
  
  getItemFromBundle (id, bundleID) {},
  
  getItemsFromBundle (ids, bundleID) {},
  
  upsertItemsToBundle (items, bundleID) {},
  
  upsertItemToBundle (item, bundleID) {},
  
  /*lexicon methods*/
  
  deleteLexicon (id) {},
  
  getLexicon (id) {},
  
  upsertLexicon (lexi) {},
  
  /*lexicon entry methods*/

  deleteEntriesFromLexicon (ids, lexiID) {},
  
  deleteEntryFromLexicon (id, lexiID) {},
  
  getEntriesFromLexicon (ids, lexiID) {},
  
  getEntryFromLexicon (id, lexiID) {},
  
  upsertEntriesToLexicon (entries, lexiID) {},
  
  upsertEntryToLexicon (entry, lexiID) {},
  
  /*permission methods*/
  
  upsertPermission (permission, user) {}, /* not sure what exactly is meant by permissions and this example method,
    I assume it will need these two parameters*/
  
  /*phrase methods*/

  getPhraseFromText (id, textID) {},
  
  getPhrasesFromText (ids, textID) {},
  
  /*text methods*/

  deleteText (id) {},
  
  deleteTexts (ids) {},
  
  getText (id) {},
  
  getTexts (ids) {}

  upsertText (text) {},
  
  upsertTexts (texts) {},
  
};
