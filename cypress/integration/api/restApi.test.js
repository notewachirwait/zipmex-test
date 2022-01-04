import { markdownTable } from "markdown-table";

describe("Create markdown table", () => {
  it("Must return a markdown table format correctly", () => {
    cy.log(Cypress.env("TEST"));
    cy.request("GET", "https://public-api.zipmex.net/api/v1.0/summary").then(
      (resp) => {
        const rows = [];
        const marketData = resp.body.data;
        const columns = [
          "instrument",
          "last_price",
          "lowest_24hr",
          "highest_24hr",
        ];
        Object.entries(marketData).forEach(([key, value]) => {
          rows.push([
            key,
            value.last_price,
            value.lowest_24hr,
            value.highest_24hr,
          ]);
        });

        rows.unshift(columns);
        cy.writeFile("cypress/log/result.txt", "Zipmex market cap\n");
        cy.writeFile("cypress/log/result.txt", markdownTable(rows), {
          flag: "a+",
        });
      }
    );
  });
});
