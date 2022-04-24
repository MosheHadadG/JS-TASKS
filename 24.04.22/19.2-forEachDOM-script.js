const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// Create order list
const ol = document.createElement("ol");
// Remove the bullet points
ol.style = "list-style-type: none;"
const div = document.querySelector("div");
// Append Child (ol) To Div
div.appendChild(ol);

for(let user of users) {
  // Create list item for each user
  const li = document.createElement("li");
  // add text first name and last name to li
  li.innerText = `${user.firstName} ${user.lastName}`;
  // set atrribute to li "date-id"
  li.setAttribute("data-id", user.id);
  // Append Child (li) To Order list
  ol.appendChild(li);
}
