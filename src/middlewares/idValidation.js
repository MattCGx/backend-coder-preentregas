export const idValidation = (req, res, next) => {
    req.body.id !== req.params.productId ? res.status(404).json({ msg: 'Product cannot change ID' }): next()
}