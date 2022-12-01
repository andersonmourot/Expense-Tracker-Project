// Deletes the expense
const delButtonHandler = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete expense");
  }
};

const DelExpense = document.querySelectorAll(".del-button");
DelExpense.forEach((d) => {
  d.addEventListener("click", () => {
    const id = d.getAttribute("data-id");
    const url = `/api/expense/${id}`;
    delButtonHandler(url);
  });
});
