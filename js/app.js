
//// Variables
const toggle = document.querySelector('#phone-email-toggle');
const emails = document.getElementsByClassName('email');
const phoneNumbers = document.getElementsByClassName('phone');
const contactRows = document.getElementsByClassName('contact');
const appContainer = document.querySelector('#app-container');
const ids = [];


//// Event Listeners
toggle.addEventListener('change', toggleInfo);


// Build the contact list
contacts.forEach(function (contact) {
    createContact(contact);
});


// For each contact (id in array) onclick, show/hide toggle
ids.forEach(function(id) {
    const elem = document.getElementById(id);
    
    elem.onclick = function(e) {
        if(elem.classList.contains('expanded')) {
            elem.classList.remove('expanded');
        } else {
            elem.classList.add('expanded');
        }
    };
});

function loggit(message) {
    console.log(message)
}


//// Functions
// Email/Phone toggle controller
function toggleInfo() {
    if(toggle.value === 'phone') {
        Array.from(emails).forEach(function(email) {
            email.classList.add('hidden');
        });
        Array.from(phoneNumbers).forEach(function(phone) {
            phone.classList.remove('hidden');
        });
    } else {
        Array.from(emails).forEach(function(email) {
            email.classList.remove('hidden');
        });
        Array.from(phoneNumbers).forEach(function(phone) {
            phone.classList.add('hidden');
        });
    }
}


// Contact Builder
function createContact(contact) {
    // Grab the app container
    const container = document.querySelector('#contacts-container');

    // Create a container for the new contact and insert it into the contacts container
    let contactContainer = document.createElement('div');
    contactContainer.className = 'contact';
    contactContainer.id = contact.id;
    container.appendChild(contactContainer);
    
    // Populate contact html with contact info from contacts.js file
    let htmlInsert = `
    <div class="col col1 name-container">
        <div class="light ${contact.status}"></div>
        <p class="name">${contact.name}</p>
    </div>
    <div class="col col2 info-container">
        <p class="email">${contact.email}</p>
        <p class="phone hidden">${contact.phone}</p>
        <p class="address hidden">
            ${contact.address.street}<br>
            ${contact.address.city} ${contact.address.state} ${contact.address.zipcode}
        </p>
    </div>
    `;

    // Insert the HTML into the newly created contact div
    contactContainer = document.getElementById(contact.id);
    contactContainer.innerHTML = htmlInsert;

    ids.push(contact.id)
}