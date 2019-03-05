function JobItem(pJob) {
    var self = this;

    self.id = pJob.id;
    self.name = pJob.name;
    self.creationTime = pJob.creationTime;
    self.createdBy = pJob.createdBy;
	self.lastModifiedTime = pJob.lastModifiedTime;
	self.modifiedBy = pJob.modifiedBy;
	self.filesAssigned = pJob.filesAssigned;
	self.queueSequence = pJob.queueSequence;
	self.fileProcessed = pJob.fileProcessed;
	self.status = pJob.status;
	self.errorsCount = pJob.errorsCount;
}
 
function JobViewModel() {
    var self = this;

    self.jobItems = ko.observableArray();

    if(jobDataFromServer)
    {
        jobDataFromServer.forEach(function(pJob){
            self.jobItems.push(new JobItem(pJob));
        })
    }
}

var JobContainerModel = {
    JobViewModel : JobViewModel
}