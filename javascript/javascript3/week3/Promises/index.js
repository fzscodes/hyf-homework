const div = document.createElement("div");
const users = ['Aswini-D3', 'STEP0HEN', 'AkoAyukngat'];

const url = "https://api.github.com/search/repositories?q=user:";
Promise.all(users.map(user =>
  fetch(url + `${user}`)
    .then(response => response.json())
    .then(readAndDisplayData)
));

function readAndDisplayData(result) {
  const repositories = result.items;
  const arrayOfOwner = repositories.map(x => x.owner.login)
  const name = arrayOfOwner[0];

  const htag = document.createElement("h2");
  htag.textContent = `${name}'s repositories:`;
  document.body.appendChild(div);
  div.appendChild(htag);

  repositories.forEach(repo => {
    const repoFullName = repo.full_name;
    const repoUrl = repo.url;
    const p = document.createElement("p");
    p.innerHTML = `FULL NAME : ${repoFullName}`;
    div.appendChild(p);
    const para = document.createElement("p");
    para.innerHTML = `URL : ${repoUrl}`;
    div.appendChild(para);
  });
}