const getDatafromStorage = () => {
  const formData = JSON.parse(localStorage.getItem("form-data"));
  console.log(formData);
  showDataonPage(formData);
};

const showDataonPage = (formData) => {
  Object.entries(formData).map((field) => {
    console.log(field);
    const element = document.querySelector(`.${field[0]}`);
    if (element) {
      element.textContent = field[1];
    }
  });
};

getDatafromStorage();
