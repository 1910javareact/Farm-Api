workerRouter.get('', 
    async (req, res) => {
    const workers = await workerServices.getAllWorkersBySalary();
    if (workers) {
        res.json(workers);
    } else {
        res.sendStatus(500);
    }
});