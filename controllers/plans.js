module.exports = {
    index, 
    new: newPlans,
    show,
    create
};

async function index(req, res) {
    // const plans = await plans.find({});
    res.send('babymuk');
}

async function newPlans(req, res) {
    res.send('testing 123');
}

async function show(req, res) {
    res.send('test 123');
}

async function create(req, res) {
    res.send('test 123')
}
