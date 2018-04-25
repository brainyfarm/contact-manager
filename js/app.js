const preloadedContacts = [{
  title: "Mr",
  name: "John Smith",
  email: "john.smith@gmail.com",
  imageUrl: "http://completeflyfisherman.co.za/wp-content/uploads/2015/02/team-2.jpg"
},

{
  title: "Mrs",
  name: "Tracy James",
  email: "tracey.2018@gmail.com",
  imageUrl: "http://completeflyfisherman.co.za/wp-content/uploads/2015/02/team-2.jpg"
}];

function renderContacts(contacts) {
  var directoryHolder = $('#directory-list');

  if(contacts.length) {
    contacts.forEach(function(contact) {
      var contactCard = `
      <div class="card">
      <img src="${contact.imageUrl}" alt="Avatar" style="width:100%;">
      <div class="container">
        <h4><b>${contact.title}. ${contact.name}</b></h4> 
        <p>${contact.email}</p> 
      </div>
    </div>
      `
      $(directoryHolder).append(contactCard);
      
    });
  } else {

  }
}

$(document).ready(function() {
  let contacts = JSON.parse(localStorage.getItem('contacts'));

  if(!contacts) {
    localStorage.setItem('contacts', JSON.stringify(preloadedContacts));
    contacts = JSON.parse(localStorage.getItem('contacts'));
    renderContacts(contacts);
  } else {
    renderContacts(contacts);
  }

  /**
   * handle new Contact form
   */
  $('#add-student').on('click', function(){
    const newContact = {
      title: $('#title').val(),
      name: $('#name').val(),
      email: $('#email').val(),
      imageUrl: $('#image').val(),
    }

    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts([newContact]);
    
    const elements = [$('#title'), $('#name'), $('#email'), $('#image')]
    elements.forEach(function(element){
      $(element).val('')
    });
  });
});