function MenuItem(name) {
    this.name = name;
}
 
function MenuViewModel() {
    var self = this;
    self.menuItems = ko.observableArray();

    self.menuItems.push(new MenuItem('Jobs'));
}

var MenuContainerModel = {
    MenuViewModel : MenuViewModel
}