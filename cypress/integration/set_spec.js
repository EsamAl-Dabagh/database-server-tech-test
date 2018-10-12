describe("/set", function() {
  it("returns a 200 status", function() {
    cy.visit("http://localhost:4000/set")

    cy.server().should(function(server) {
      expect(server.status).to.eq(200);
    });
  });

  describe("when parameters are provided", function() {
    it("provides confirmation that parametes have been stored", function() {
      cy.visit("http://localhost:4000/set?somekey=somevalue");

      cy.contains("somekey stored");
      });
    });
  });
