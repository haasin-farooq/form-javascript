const handleSubmit = () => {
  const elements = document.querySelector(".form-grid").elements;
  const formData = {};
  for (let i = 0; i < elements.length; i++) {
    const input = elements.item(i);
    if (input) {
      formData[input.name] = input.value;
    }
  }

  localStorage.setItem("form-data", JSON.stringify(formData));
};
