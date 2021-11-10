let inputElements = document.getElementsByClassName('markdown-content');

for (let i = 1; i < inputElements.length + 1; i++) {
  console.log(`markdown-content-${i}`);
  let inputElement = document.getElementById(`markdown-content-${i}`);
  console.log(inputElement);
  let outputElement = document.getElementById(`react-content-${i}`);

  let renderedElement = React.createElement(
      ReactMarkdown, {source: inputElement.innerHTML}, null);

  ReactDOM.render(renderedElement, outputElement);

  inputElement.innerHTML = '';
}
