chrome.action.onClicked.addListener(() => {
  try {
    chrome.storage.local.get(null, (result) => {
      console.log(result);
      if (result.isEnabled === undefined) {
        chrome.storage.local.set({ isEnabled: true });
        result.isEnabled = true;
      }
  
      // Change the icon
      let iconPath = result.isEnabled ? { 512: 'icon-enabled.png' } : { 512: 'icon-disabled.png' };
      chrome.action.setIcon({ path: iconPath });
  
      // Save the state
      chrome.storage.local.set({ isEnabled: !result.isEnabled });
    });
  } catch(err) {
    console.error(err);
  }
});