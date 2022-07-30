const getFormDataFromQueryParams = () => {
  const urlParams = new URLSearchParams(document.location.search);
  showDataonPage(urlParams);
};

const showDataonPage = (urlParams) => {
  for (const p of urlParams) {
    const element = document.querySelector(`.${p[0]}`);
    if (element) {
      element.textContent = p[1];
    }
  }
};

getFormDataFromQueryParams();
