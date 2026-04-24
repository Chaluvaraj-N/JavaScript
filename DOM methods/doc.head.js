// document.head gives access to the <head> element
const headElement = document.head;

// Example: add a meta tag to <head>
const meta = document.createElement("meta");
meta.name = "description";
meta.content = "Sample page description";
headElement.appendChild(meta);

// Example: add a stylesheet link to <head>
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "styles.css";
headElement.appendChild(link);

console.log("Head element:", headElement);
