// 1672. Richest Customer Wealth
function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((account: number[]) =>
      account.reduce((acc: number, curr: number) => acc + curr),
    ),
  );
}

// Solution using for loop
function maximumWealth2(accounts: number[][]): number {
  const sumAccounts: number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    sumAccounts.push(sum);
  }
  return Math.max(...sumAccounts);
}

// More efficient solution
function maximumWealth3(accounts: number[][]): number {
  return accounts.reduce(
    (p, c) =>
      Math.max(
        p,
        Math.max(
          p,
          c.reduce((curr, prev) => curr + prev, 0),
        ),
      ),
    0,
  );
}