function selectPartners () {
  document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('#partners') !== null) {
      const selectorPartnersItem = '.partners__item';
      const selectorPartnersDot = '.partners__dot';
      const partnersItems = Array.from(document.querySelectorAll(selectorPartnersItem))
      const partnersDots = Array.from(document.querySelectorAll(selectorPartnersDot));
      const partnersNavigation = document.querySelector('.partners__left');

      function makeActive(evt) {
        const target = evt.target;
        const dataCity = evt.target.dataset.namecity;
    
         if (!target || !target.matches(selectorPartnersItem))
           return;
         
        partnersItems.forEach(elem => elem.classList.remove('active'));
        partnersDots.forEach(elem => {
          elem.classList.remove('active');
          if(elem.dataset.dotcity === dataCity)
            elem.classList.add('active')
        });
        evt.target.classList.add('active');
      };
      
      partnersNavigation.addEventListener('click', makeActive);
    }
  })
}
selectPartners();