const Url = "https://rickandmortyapi.com/api/character";

async function state(Url) {
 try {
const response = await fetch(Url);
const body = await response.json();
for (let i = 0; i < body.results.length; i++) {
  if (body.results[i].status === "Alive") {
const newlist = document.createElement("li");
const newContent = document.createTextNode(body.results[i].name);
newlist.appendChild(newContent);
const currentUl = document.getElementById("characterList");
document.body.insertBefore(newlist, currentUl);
    };
  }
 } catch (error) {
console.log("error occurs", error);
}
};
state(Url);
