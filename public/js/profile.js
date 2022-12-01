const newForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#expense-name").value.trim();
  const payment_amount = document.querySelector("#payment-amount").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const description = document.querySelector("#expense-desc").value.trim();
  const type = document.querySelector("#expense-type").value.trim();

  if (name && payment_amount && due_date && description && type) {
    const response = await fetch(`/api/newexpenses`, {
      method: "POST",
      body: JSON.stringify({
        name,
        payment_amount,
        description,
        due_date,
        type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create new expense!");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/newexpense/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete expense");
    }
  }
};

document.querySelector(".new-expense-form").addEventListener("submit", newForm);

document
  .querySelector(".expense-list")
  .addEventListener("click", delButtonHandler);
