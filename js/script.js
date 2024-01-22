const itemsPerPage = 10;
let currentPage = 1;

// Initial display
displayContacts(currentPage);
displayPagination();
document.getElementById('totalContacts').innerHTML = "Total : " + users.length;

//display contact list
function displayContacts (page){
    const startIndexValue = (page - 1 ) * itemsPerPage;
    const endIndexValue = startIndexValue + itemsPerPage;

    //extract the 10 for one page
    const paginatedUsers = users.slice(startIndexValue, endIndexValue);

    const conactList = document.getElementById('contactList');
    conactList.innerHTML = '';

    paginatedUsers.forEach(user => {

        const listItem = document.createElement('li');
        listItem.className = 'contact-item cf';
        listItem.innerHTML = `
        <div class="contact-details">
                <img class="avatar" src="${user.image}">
                <h3>${user.name}</h3>
                <span class="email">${user.email}</span>
            </div>
            <div class="joined-details">
                   <span class="date"> Joined ${user.joined}</span>
           </div>
           `;
           conactList.appendChild(listItem)
    });
   
}

function displayPagination(){
    const totalContacts = users.length;
    //getting the number of total pages to display the all number of conatct list
    const totalPages = Math.ceil(totalContacts / itemsPerPage);

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    //display the pagination button for all pages
    for(let i = 1; i<= totalPages; i++){
        const pageButton = document.createElement('button');
        pageButton.innerText = i;

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayContacts(currentPage)
        })
        pagination.appendChild(pageButton)
    }
}

