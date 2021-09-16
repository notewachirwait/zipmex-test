import selector from '../enum/trade';
Cypress.Commands.add('tradeBuySide', (percentage, amount) => {
		let newPrice;
		cy.get(selector.bidSideOrderBook).eq(3).click();
		cy.get(selector.limitTab).click();
		cy.get(selector.inputPrice).eq(0).invoke('val').then(originPrice => {
    	const bestPrice = originPrice;
		// Buy side new price = price + 0.1%
		newPrice = +bestPrice+(bestPrice*percentage)/100;
		newPrice = parseFloat(newPrice.toFixed(4));
		cy.wrap(newPrice).as('price');
		cy.wrap(bestPrice).as('originPrice');
});
		// input new price,amount and validate the total is equal total usd
		cy.get('@price').then(newPrice => {
		cy.get(selector.inputPrice).eq(0).clear().type(newPrice);
		cy.get(selector.inputPrice).eq(1).clear().type(amount);
		cy.get(selector.inputPrice).eq(2).invoke('val').then(totalUsd => {

		let total = newPrice*amount;
		total = Math.trunc(total*Math.pow(10, 4))/Math.pow(10, 4);
		cy.log('Trade USDTUSD');
		cy.log('with side = buy');
		cy.log('with new price:'+newPrice);
		cy.log('with amount = '+amount);
		cy.log('Total (USD) = '+totalUsd);
		cy.get('@originPrice').then(bestPrice => {
		cy.log('Origin price = '+bestPrice);
		});
		assert.equal(totalUsd, total);	
	// 		if you want to see the result on console.log just uncomment
	// 		console.log('Trade USDTUSD');
	// 		console.log('with side = buy');
	// 		console.log('with new price:'+newPrice);
	// 		console.log('with amount = '+amount);
	// 		console.log('Total (USD) = '+totalUsd);
	// 		cy.get('@originPrice').then(bestPrice => {
	// 		console.log('Origin price = '+bestPrice);
	// });
		});
	});
});

Cypress.Commands.add('tradeSellSide', (percentage, amount) => {
		let newPrice;
		cy.get(selector.askSideOrderBook).eq(0).click();
		cy.get(selector.limitTab).click();
		cy.get(selector.inputPrice).eq(3).invoke('val').then(originPrice => {
		const bestPrice = originPrice;
		// sell side new price = price - 0.1%
		newPrice = +bestPrice-(bestPrice*percentage)/100;
		newPrice = parseFloat(newPrice.toFixed(4));
		cy.wrap(newPrice).as('price');
		cy.wrap(bestPrice).as('originPrice');
});
		// input new price,amount and validate the total is equal total usd
		cy.get('@price').then(newPrice => {
		cy.get(selector.inputPrice).eq(3).clear().type(newPrice);
		cy.get(selector.inputPrice).eq(4).clear().type(amount);
		cy.get(selector.inputPrice).eq(5).invoke('val').then(totalUsd => {
		
		let total = newPrice*amount;
		total = Math.trunc(total*Math.pow(10, 4))/Math.pow(10, 4);
		cy.log('Trade USDTUSD');
		cy.log('with side = sell');
		cy.log('with new price:'+newPrice);
		cy.log('with amount = '+amount);
		cy.log('Total (USD) = '+totalUsd);
		cy.get('@originPrice').then(bestPrice => {
		cy.log('Origin price = '+bestPrice);
		});	
		assert.equal(totalUsd, total);
	// 		if you want to see the result on console.log just uncomment
	
	// 		console.log('Trade USDTUSD');
	// 		console.log('with side = sell');
	// 		console.log('with new price:'+newPrice);
	// 		console.log('with amount = '+amount);
	// 		console.log('Total (USD) = '+totalUsd);
	// 		cy.get('@originPrice').then(bestPrice => {
	// 		console.log('Origin price = '+bestPrice);
	// });	
		});
	});	
});
