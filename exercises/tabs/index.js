const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // 1. hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // 2. mark all tabs as unselected
  tabBtns.forEach((tab) => tab.setAttribute('aria-selected', false));
  // 3. mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // 4. find the associated tabpanel and show it
  const { id } = event.currentTarget;
  /* Method 1 */
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;
  /* Method 2: use find method */
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabBtns.forEach((btn) => btn.addEventListener('click', handleTabClick));
