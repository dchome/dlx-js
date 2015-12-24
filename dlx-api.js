var dlxApi = {

  /*text methods*/
  
  addTexts (texts) {},

  getTexts (ids) {},
  
  deleteTexts (ids) {},

  addText (text) {},
  
  getText (id) {},
  
  deleteText (id) {},
  
  /*phrase methods*/
  
  addPhrasesToText (phrases, textID) {},

  getPhrasesFromText (ids, textID) {},
  
  deletePhrasesFromText (ids, textID) {},

  addPhraseToText (phrase, textID) {},
  
  getPhraseFromText (id, textID) {},
  
  deletePhraseFromText (id, textID) {},
  
  /*lexicon methods*/
  
  addLexicons (lexis) {},
  
  getLexicons (ids) {},
  
  deleteLexicons (ids) {},
  
  addLexicon (lexi) {},
  
  getLexicon (id) {},
  
  deleteLexicon (id) {},
  
  /*lexicon entry methods*/
  
  addEntriesToLexicon (entries, lexiID) {},
  
  getEntriesFromLexicon (ids, lexiID) {},
  
  deleteEntriesFromLexicon (ids, lexiID) {},
  
  addEntryToLexicon (entry, lexiID) {},
  
  getEntryFromLexicon (id, lexiID) {},
  
  deleteEntryFromLexicon (id, lexiID) {},
  
  /*bundle methods*/
  
  addBundles (bundles) {},
  
  getBundles (ids) {},
  
  deleteBundles (ids) {},
  
  addBundle (bundle) {},
  
  getBundle (id) {},
  
  deleteBundle (id) {},
  
  /*item methods*/
  
  addItemsToBundle (items, bundleID) {},
  
  getItemsFromBundle (ids, bundleID) {},
  
  deleteItemsFromBundle (ids, bundleID) {},
  
  addItemToBundle (item, bundleID) {},
  
  getItemFromBundle (id, bundleID) {},
  
  deleteItemFromBundle (id, bundleID) {},
  
  /*permission methods*/
  
  addPermission (permission, user) {} /* not sure what exactly is meant by permissions and this example method,
    I assume it will need these two parameters*/
};
