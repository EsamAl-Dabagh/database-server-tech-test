describe("/set", function() {
  it("returns a 200 status", function() {
    cy.visit("http://localhost:4000/set")

    cy.server().should(function(server) {
      expect(server.status).to.eq(200);
    });
    
  });
});

describe("/get", function() {
  it("returns a 200 status", function() {
    cy.visit("http://localhost:4000/get");

    cy.server().should(function(server) {
      expect(server.status).to.eq(200);
    });
  });
});
