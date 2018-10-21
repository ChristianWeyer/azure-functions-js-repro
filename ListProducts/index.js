module.exports = function (context, req) {
    context.log('Start ListProducts...');

    context.res.status(200).json(context.bindings.products.map(o => {
        return { id: o.Id, name: o.Name, description: o.Description, onStock: o.OnStock }
    }));
};