/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}
console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor["ticketId"] = null;
  return visitor;
}
console.log(
  revokeTicket({
    name: "Verena Nardi",
    age: 45,
    ticketId: "H32AZ123",
  })
);

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId)) {
    return "unknown ticket id";
  }
  if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return "sold to " + tickets[ticketId];
  }
}

console.log(
  ticketStatus(
    {
      "0H2AZ123": null,
      "23LA9T41": "Verena Nardi",
    },
    "23LA9T41"
  )
);

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "invalid ticket !!!";
}

console.log(
  simpleTicketStatus(
    {
      "0H2AZ123": null,
      "23LA9T41": "Verena Nardi",
    },
    "0H2AZ123"
  )
);

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor["gtc"]?.["version"];
}

console.log(
  gtcVersion({
    name: "Verena Nardi",
    age: 45,
    ticketId: "H32AZ123",
    gtc: {
      signed: true,
      version: "2.1",
    },
  })
);
