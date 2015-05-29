function BankAccount(accountHolder, accountType, balance) {
  this.accountHolder = accountHolder;
  this.accountType = accountType;
  this.balance = balance;
  var that = this;

  return {
    purchase: function(ammount) {
      if (ammount > that.balance) {
        console.log("you can't do that");
      } else {
        that.balance -= ammount;
      }
    },
    getAccountHolder: function() {
      return that.accountHolder;
    },
    setAccountHolder: function(newAccountHolder) {
      that.accountHolder = newAccountHolder;
    },
    getAccountType: function() {
      return that.accountType;
    },
    setAccountType: function(newAccountType) {
      that.accountType = newAccountType;
    },
    getBalance: function() {
      return that.balance;
    },
    setBalance: function(newBalance) {
      that.balance = newBalance;
    };
  };
};

// Usage

var newAccount = new BankAccount("Tristan", "savings", 1.25); // new account with $1.25 balance
newAccount.balance = 5000; // bc of encapsulation you cannot access directly modify the balance
console.log(newAccount.getBalance()); // 1.25

newAccount.setBalance(100);
console.log(newAccount.getBalance()); // 100

newAccount.setAccountType("checking");
console.log(newAccount.getAccountType()); // checking

newAccount.setAccountHolder("Alley");
console.log(newAccount.getAccountHolder()); // Alley

newAccount.purchase(10);
console.log(newAccount.getBalance()); // 90
