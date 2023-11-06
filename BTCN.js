const menuIcon = document.querySelector('.menu_icon');
const topBar = document.querySelector('.top_bar');

menuIcon.addEventListener('click', function() {
   if (menuIcon.classList.contains('active')) {
       menuIcon.classList.remove('active');
       topBar.classList.remove('small');
   } else {
       menuIcon.classList.add('active');
       topBar.classList.add('small');
   }
});
const notificationIcon = document.querySelector('.notification-icon');

notificationIcon.addEventListener('click', function() {
  const dropdownContent = this.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});