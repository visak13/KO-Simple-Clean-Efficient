ko.components.register('job-component', 
    {
        viewModel: function(pData){
            var self = this;

            self.id = pData.pJob.id;
            self.name = pData.pJob.name;
            self.creationTime = pData.pJob.creationTime;
            self.createdBy = pData.pJob.createdBy;
            self.lastModifiedTime = pData.pJob.lastModifiedTime;
            self.modifiedBy = pData.pJob.modifiedBy;
            self.filesAssigned = pData.pJob.filesAssigned;
            self.queueSequence = pData.pJob.queueSequence;
            self.fileProcessed = pData.pJob.fileProcessed;
            self.status = pData.pJob.status;
            self.errorsCount = pData.pJob.errorsCount;
        },
        template:
            '<checkbox-component class="col-1"></checkbox-component>\
            <span data-bind="text: $component.name" class="col-3"></span>\
            <span data-bind="text: $component.creationTime" class="col-3"></span>\
            <files-processed-component params="pFilesProcessed: $component.fileProcessed" class="col-1"></files-processed-component>'
    }
);