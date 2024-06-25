const accounts = [
  {
    name: "QNB Finansbank",
    image: "qnbfinansbank",
    iban: "TR12 0011 1000 0000 0094 8207 99",
  },
  {
    name: "İş Bankası",
    image: "isbankasi",
    iban: "TR41 0006 4000 0011 0860 8869 78",
  },
	{
    name: "Akbank",
    image: "akbank",
    iban: "TR94 0004 6005 0988 8000 1894 05",
  },
  {
    name: "Papara",
    image: "papara",
    iban: "1893217857",
  },
	 {
    name: "İninal",
    image: "ininal",
    iban: "5452556565",
  },
  {
    name: "Paycell",
    image: "paycell",
    iban: "5452556565",
  },
  {
    name: "Nays",
    image: "nays",
    iban: "5452556565",
  },
  {
    name: "Tosla",
    image: "tosla",
    iban: "5452556565",
  },
];

window.addEventListener("load", () => {
  if (navigator.language.includes("tr")) {
    document.getElementById("bank-page-title").textContent = "Banka Hesapları";
    document.getElementById("bank-page-desc").textContent =
      "Gönderim yapmak istediğiniz bankayı herhangi bir kutucuğa tıklayarak IBAN adresini kopyalayabilirsiniz.";
    document.getElementById("bank-page-notice").textContent =
      'İsim ve soyisim kısmına "Sadican Özkaya" yazın.';
  }
  const bankAccounts = document.querySelector(".bank-accounts");
  accounts.forEach((account) => {
    const bankAccount = document.createElement("li");
    bankAccount.innerHTML = `
    <img src="assets/img/pay/${account.image}.jpg" alt="${account.name} Görsel">
    <div class="content">
        <h2>${account.name}</h2>
        <span>
            ${account.iban}
        </span>
    </div>`;
    bankAccounts.appendChild(bankAccount);
  });

  document.querySelectorAll(".bank-accounts li").forEach((bankAccount) => {
    bankAccount.addEventListener("click", function () {
      if (this.classList.contains("copied")) return;
      const iban = this.querySelector("span").innerText;
      navigator.clipboard.writeText(iban);
      this.querySelector("span").innerText = navigator.language.includes("tr")
        ? "Kopyalandı!"
        : "Copied!";
      this.classList.add("copied");
      setTimeout(() => {
        this.querySelector("span").innerText = iban;
        this.classList.remove("copied");
      }, 2000);
    });
  });
});
