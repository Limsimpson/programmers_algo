// 1108. Defanging an IP Address
function defangIPaddr(address: string): string {
  address = address.replace(/[.]/g, "[.]");
  return address;
}

//  Solution using split & join
function defangIPaddr2(address: string): string {
  return address.split(".").join("[.]");
};