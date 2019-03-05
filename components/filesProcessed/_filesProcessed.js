ko.components.register('files-processed-component', 
    {
        viewModel: function(pData){
            var self = this;

            self.fileProcessedCount = pData.pFilesProcessed;
        },
        template:
            '<span data-bind="text: $component.fileProcessedCount"></span'
    }
);