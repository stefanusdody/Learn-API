let getData = () => {
  return fetch("https://api.github.com/users/stefanusdody/followers")
  .then(response => {
    return response.json();
  })
  .then (data => {
    console.log (data);
    return data;
  });
}

getData().then(data =>{
  const list = document.getElementById('followersList');
  console.log(list);
  let myFollowersList = '';
  data.map((data,index) => {
    myFollowersList += `
    <img style="width: 200px;"src="${data.avatar_url}"><br>
    ${data.login}<br>
    <a href="${data.html_url}">github</a><br>`
  })
  list.innerHTML = myFollowersList;
})
