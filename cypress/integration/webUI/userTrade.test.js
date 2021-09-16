describe('The user trade order limit buy and sell', () => {
	before(() => {
		cy.visit('/global/trade/USDTUSD');
	});
	it('User trade buy order and the system can calculate Total USD correctly', () => {
		cy.wait(5000);
		// input percentage and amount 
		cy.tradeBuySide(0.1,1);
	});
	it('User trade sell order and the system can calculate Total USD correctly', () => {
		// input percentage and amount 
		cy.tradeSellSide(0.1,1);
		
});
});
