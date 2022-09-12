const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

// select tab content item
function selectItem(e){
    removeBorder();
    removeshow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
    console.log(this.id);
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeshow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem))

