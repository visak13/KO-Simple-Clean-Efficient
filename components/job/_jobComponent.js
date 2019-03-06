ko.components.register('job-component', 
    {
        viewModel: function(pData){
            var self = this;

            self.parent = pData.pJob;

            self.id = self.parent.id;
            self.name = self.parent.name;
            self.creationTime = self.parent.creationTime;
            self.createdBy = self.parent.createdBy;
            self.lastModifiedTime = self.parent.lastModifiedTime;
            self.modifiedBy = self.parent.modifiedBy;
            self.filesAssigned = self.parent.filesAssigned;
            self.queueSequence = self.parent.queueSequence;
            self.fileProcessed = self.parent.fileProcessed;
            self.status = self.parent.status;
            self.errorsCount = self.parent.errorsCount;
            self.input = self.parent.input;

            self.input.subscribe(function(pChangeValue){
                console.log(pChangeValue);
                console.log(self.input());
            });
        },
        template:
            '<checkbox-component class="col-1"></checkbox-component>\
            <span data-bind="text: $component.name" class="col-3"></span>\
            <span data-bind="text: $component.creationTime" class="col-3"></span>\
            <input type="text" data-bind="value: $component.input" ></input>\
            <input type="text" data-bind="value: $component.parent.input" ></input>\
            <files-processed-component params="pFilesProcessed: $component.fileProcessed" class="col-1"></files-processed-component>'
    }
);