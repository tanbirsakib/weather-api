fetch("https://randomuser.me/api/?results=5")
  .then((res) => res.json())
  .then((data) => showUser(data.results));
    

const showUser = (users) => {
  users.forEach((user) => {
    console.log(user.location);
    const userDiv = document.getElementById("users");
    const div = document.createElement("div");
    div.innerHTML = `
                 <div class=''>
                 <img class='rounded mx-auto w-3/4' src='${user.picture.medium}'>
                 <h2 class='bg-green-300 text-white text-center font-semibold mt-2'>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                 <h2>${user.location.country},${user.location.city},${user.location.street.name} </h2>
                 </div>
                    
                    `;
    userDiv.appendChild(div);
    
  });
};
