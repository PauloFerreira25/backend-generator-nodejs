const _validateName = (v) => v.length > 3;

module.exports = {
    type: String,
    validate: [_validateName, 'Valor de Name tem que ser maior que 3'],
    required: true,
    index: true
}
