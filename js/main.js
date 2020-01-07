
// Create a contact object variables
class Contact {
    constructor(light, name, phone, email, street, city, state, zip) {
        this.light = light;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;  
    }
}

// Create the contacts to populate the list
const contact1 = new Contact(
    'Red', 'Christian', '555-555-5555', 'christian@gmail.com', '6539 Wilton Ave.', 'Culver City', 'CA', '90234' 
    );


//Grab the main section ID
const contactContainer = document.getElementById('contacts-container');
console.log(contactContainer);


function contactBuilder(contactName) {
    sectionBuilder();
    divBuilder();
    lightBuilder();
    nameBuilder();
    infoBuilder();
    emailBuilder();
    phoneBuilder();
    moreInfoBuilder();
    emailLinkBuilder();
    moreInfoPhoneBuilder();
    addressBuilder();
}

contactBuilder(contact1);
contactBuilder();






//////Row builder

//// Create contact section

// Build a section
function sectionBuilder(contactName) {
    let section = document.createElement('section');
    section.className = 'contact';
    section.id = contactName;

    contactContainer.appendChild(section);
    // let text = document.createTextNode('This is a section. ');
    // let contactSection = document.getElementById('contact');
    // contactSection.appendChild(text);
    console.log(section);
    // contactContainer.append('section');  
}


// // Build a section
// const sectionBuild = sectionBuilder();
// console.log("Just built the contact container section!");





// Build a div inside the section
function divBuilder() {
    //Grab the last section ID
    let lastId = document.getElementById('contact');
    //Set up the div element
    let div = document.createElement('div');
    div.className = 'col1 name-container';
    div.id = 'name-container';

    //Insert the Div into the last section
    lastId.appendChild(div);
    // let text = document.createTextNode('This is a div. ');
    // let contactSection = document.getElementById('name-container');
    // contactSection.append(text);
    console.log(div);  
}

// // Build a div
// const divBuild = divBuilder();
// console.log("Just built a div and inserted it into last section");





// Build a div for the light inside the name container
function lightBuilder() {
    //Grab the last section ID for the container it's going in
    let lastId = document.getElementById('name-container');

    //Create and set up the element
    let div = document.createElement('div');
    div.className = 'light red-light';
    div.id = 'light';

    //Insert the element into the last section
    lastId.appendChild(div);
    console.log(div);  
}

// // Build a light
// const lightBuild = lightBuilder();
// console.log("Just built a div for the light and inserted it into last section");





// Build a p for the name inside the name container
function nameBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('name-container');

    /////Create and set up the element
    let p = document.createElement('p');
    p.className = 'name';
    p.id = 'name';

    // Enter text that goes into the html tag
    let text = document.createTextNode('Chuck');
    p.append(text);

    //Insert the element into the last section
    lastId.appendChild(p);
    console.log(p);  
}

// // Build the paragraph
// const nameBuild = nameBuilder();
// console.log("Just built a p for the name and inserted it into last div");





// Build the info-container inside the main container
function infoBuilder() {
    //Grab the last section ID
    let lastId = document.getElementById('contact');
    //Set up the div element
    let div = document.createElement('div');
    div.className = 'col2 info-container';
    div.id = 'info-container';

    //Insert the Div into the last section
    lastId.appendChild(div);
    console.log(div);  
}

// // Build a div
// const infoBuild = infoBuilder();
// console.log("Just built a div and inserted it into main section");





// Build a p for the email inside the info container
function emailBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('info-container');

    /////Create and set up the element
    let p = document.createElement('p');
    p.className = 'email';
    p.id = 'email';

    // Enter text that goes into the html tag
    let text = document.createTextNode('chuck@gmail.com');
    p.append(text);

    //Insert the element into the last section
    lastId.appendChild(p);
    console.log(p);  
}

// // Build the paragraph
// const emailBuild = emailBuilder();
// console.log("Just built a p for the name and inserted it into last div");





// Build a p for the phone inside the info container
function phoneBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('info-container');

    /////Create and set up the element
    let p = document.createElement('p');
    p.className = 'phone hide';
    p.id = 'phone';

    // Enter text that goes into the html tag
    let text = document.createTextNode('208-298-7339');
    p.append(text);

    //Insert the element into the last section
    lastId.appendChild(p);
    console.log(p);  
}

// // Build the paragraph
// const phoneBuild = phoneBuilder();
// console.log("Just built a p for the name and inserted it into last div");





// Build the more-info div inside the main container
function moreInfoBuilder() {
    //Grab the last section ID
    let lastId = document.getElementById('contact');
    //Set up the div element
    let div = document.createElement('div');
    div.className = 'col2 more-info hide';
    div.id = 'more-info';

    //Insert the Div into the last section
    lastId.appendChild(div);
    console.log(div);  
}

// // Build a div
// const moreInfoBuild = moreInfoBuilder();
// console.log("Just built a div and inserted it into main section");





// Build a a for the name inside the name container
function emailLinkBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('more-info');

    /////Create and set up the element
    let a = document.createElement('a');
    a.className = 'email-link';
    a.id = 'email-link';

    // Enter text that goes into the html tag
    let text = document.createTextNode('chuck@gmail.com');
    a.append(text);

    //Insert the element into the last section
    lastId.appendChild(a);
    console.log(a);  
}

// // Build the paragraph
// const emailLinkBuild = emailLinkBuilder();
// console.log("Just built a link for the email and inserted it into last div");





// Build a p for the phone inside the more-info container
function moreInfoPhoneBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('more-info');

    /////Create and set up the element
    let p = document.createElement('p');
    //p.className = '';
    //p.id = '';

    // Enter text that goes into the html tag
    let text = document.createTextNode('208-298-7339');
    p.append(text);

    //Insert the element into the last section
    lastId.appendChild(p);
    console.log(p);  
}

// // Build the paragraph
// const moreInfoPhoneBuild = moreInfoPhoneBuilder();
// console.log("Just built a p for the name and inserted it into last div");





// Build a p for the address inside the more-info container
function addressBuilder() {
    /////Grab the last section ID for the container it's going in
    let lastId = document.getElementById('more-info');

    /////Create and set up the element
    let p = document.createElement('p');
    //p.className = '';
    //p.id = '';

    // Enter text that goes into the html tag
    let text = document.createTextNode('6539 Wilton Ave\nCulver City CA 90234');
    p.append(text);

    //Insert the element into the last section
    lastId.appendChild(p);
    console.log(p);  
}

// // Build the paragraph
// const addressBuild = addressBuilder();
// console.log("Just built a p for the address and inserted it into last div");