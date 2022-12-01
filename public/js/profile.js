const newForm = async (event) => {
  console.log("New expense Submitted !!!!");
  event.preventDefault();

  //Pulling in the elements from the HTML page
  const name = document.querySelector("#expense-name").value.trim();
  const payment_amount = document.querySelector("#payment-amount").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const description = document.querySelector("#expense-desc").value.trim();

  console.log(name, payment_amount, due_date, description);

  //Checking for the required inputs for the expense
  if (name && payment_amount && due_date && description) {
    const response = await fetch('/api/expense', {
      method: 'POST',
      body: JSON.stringify({
        name,
        payment_amount,
        description,
        due_date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace("/addexpense");
    } else {
      alert("Failed to create new expense!");
    }
  }
};

// Deletes the expense
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/newexpense/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete expense");
    }
  }
};

document.querySelector(".new-expense-form").addEventListener("submit", newForm);
// document.querySelector(".new-expense-form").addEventListener("click", newForm);

document
  .querySelector(".expense-list")
  .addEventListener("click", delButtonHandler);
