ko.components.register('menu-component', 
    {
        viewModel: function(pData) {
            var self = this;
            
            self.name = pData.pMenu.name;
        },
        template:
            '<span data-bind="text: $component.name"></span>'
    }
);