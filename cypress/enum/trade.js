/**
 * Enum for element selector
 * @readonly
 * @enum {String}
 */
 export default Object.freeze({
	bidSideOrderBook: '.flex-table__column .ap-padded-decimal--buy',
	askSideOrderBook: '.flex-table__column .ap-padded-decimal--sell',
	limitTab: 'label[data-test="Limit Order Type"]',
	inputPrice: 'input[type="antNumericInput"]',
});