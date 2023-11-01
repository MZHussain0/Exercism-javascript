/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
 */

const defandIp = (address) => {
  return address.split(".").join("[.]");
};

console.log(defandIp("1.1.1.1"));
