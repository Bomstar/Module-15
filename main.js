document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  console.log(checkbox);
  checkbox.addEventListener("change", (e) => {
    console.log(e);
    const id = e.target.id.split("-")[1];
    console.log(id);
    const plusIcon = document.getElementById(`plus-${id}`);
    const minusIcon = document.getElementById(`minus-${id}`);

    if (e.target.checked) {
      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    } else {
      plusIcon.classList.remove("hidden");
      minusIcon.classList.add("hidden");
    }
  });
});
