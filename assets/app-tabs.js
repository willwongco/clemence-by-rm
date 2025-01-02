if (!customElements.get('app-tabs')) {
  customElements.define(
    'app-tabs',
    class AppTabs extends HTMLElement {
      constructor() {
        super();
        console.log('app-tabs');
      }

      open(key) {
        console.log(`tab open ${key}`);

        this.querySelectorAll('tabs-link').forEach((link) => {
          if( link.getAttribute('data-key') === key ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        this.querySelectorAll('.tabs__content').forEach((tabContent) => {
          console.log({
            key,
            tabContent: tabContent.getAttribute('id')
          })
          if( tabContent.getAttribute('id') === key ) {
            tabContent.style.display = 'block';
          } else {
            tabContent.style.display = 'none';
          }
        });
      }
    }
  );
}

if (!customElements.get('tabs-link')) {
  customElements.define(
    'tabs-link',
    class TabsLink extends HTMLElement {
      constructor() {
        super();

        this.addEventListener('click', (event) => {
          event.preventDefault()
          const key = this.getAttribute('data-key');
          const tabs = this.closest('app-tabs');
          if( tabs !== null ) {
            tabs.open(key);
          }
        });
      }
    }
  );
}
