ko.components.register('menu-component', 
    {
        viewModel: function(pData) {
            var self = this;
            
            self.parent = pData.pMenu;

            self.name = self.parent.name;
        },
        template:
            '<span data-bind="text: $component.name"></span>'
    }
);