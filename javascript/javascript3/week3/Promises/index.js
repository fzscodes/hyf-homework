const div = document.createElement("div");
const urls = [
  'https://api.github.com/search/repositories?q=user:Aswini-D3',
  'https://api.github.com/search/repositories?q=user:STEP0HEN',
  'https://api.github.com/search/repositories?q=user:AkoAyukngat'
];
Promise.all(urls.map(url =>
  fetch(url)
    .then(response => response.json())
    .then(result => {
      const repo = result.items;

      const arrayOfOwner = repo.map(x => x.owner.login)
      const name = arrayOfOwner[0];
      const htag = document.createElement("h2");
      htag.textContent = `${name}'s repositories:`;
      document.body.appendChild(div);
      div.appendChild(htag);



      const arrayOfRepoDetails = repo.map(value => value.full_name);
      const repoFullname = arrayOfRepoDetails.forEach(name => {
        const p = document.createElement("p");
        p.innerHTML = `Fullname name of the repositories: ${name}`;
        div.appendChild(p);
      });

      const urlArray = repo.map(item => item.url);
      const gitUrl = urlArray.forEach(url => {
        const p = document.createElement("p");
        p.innerHTML = `URL of the repo: ${url}`;
        div.appendChild(p);
      })
    })
))
