var dlxApi = {
  
  /*bundle methods*/
  
  addBundle (bundle) {},
  
  addBundles (bundles) {},
  
  deleteBundle (id) {},
  
  deleteBundles (ids) {},
  
  getBundle (id) {},
  
  getBundles (ids) {},
  
  /*item methods*/
  
  addItemsToBundle (items, bundleID) {},
  
  addItemToBundle (item, bundleID) {},
  
  deleteItemFromBundle (id, bundleID) {},
  
  deleteItemsFromBundle (ids, bundleID) {},
  
  getItemFromBundle (id, bundleID) {},
  
  getItemsFromBundle (ids, bundleID) {},
  
  /*lexicon methods*/
  
  addLexicon (lexi) {},
  
  deleteLexicon (id) {},
  
  getLexicon (id) {},
  
  /*lexicon entry methods*/
  
  addEntriesToLexicon (entries, lexiID) {},
  
  addEntryToLexicon (entry, lexiID) {},
  
  deleteEntriesFromLexicon (ids, lexiID) {},
  
  deleteEntryFromLexicon (id, lexiID) {},
  
  getEntriesFromLexicon (ids, lexiID) {},
  
  getEntryFromLexicon (id, lexiID) {},
  
  /*permission methods*/
  
  addPermission (permission, user) {}, /* not sure what exactly is meant by permissions and this example method,
    I assume it will need these two parameters*/
  
  /*phrase methods*/

  getPhraseFromText (id, textID) {},
  
  getPhrasesFromText (ids, textID) {},
  
  /*text methods*/
  
  addText (text) {},
  
  addTexts (texts) {},
  
  deleteText (id) {},
  
  deleteTexts (ids) {},
  
  getText (id) {},
  
  getTexts (ids) {}
  
};
